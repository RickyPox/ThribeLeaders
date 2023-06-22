"use client"
import { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import {motion, useAnimation} from "framer-motion";


export  function Reveal ({children}:any , {width = "fit-content"}) {

    const ref = useRef(null);
    const intersection = useIntersection(ref, {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
    });

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if(intersection && intersection.intersectionRatio > 0.3){
            mainControls.start("visible")
            slideControls.start("visible")
        }         
    })

    return(
        <div ref={ref} style={{ position: "relative", width, overflow:"hidden" }}>
            <motion.div
                variants={{ 
                    hidden: {opacity: 0, y: 75},
                    visible: { opacity: 1, y: 0}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration:0.5, delay:0.25}}
            >
                {children}
            </motion.div>

            <motion.div
                variants={{ 
                    hidden: {left:0},
                    visible: { left: "100%"}
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration:0.5, ease:"easeIn" }}
                style={{ 
                    position: "absolute",
                    top: 4,
                    bottom:4,
                    left:0,
                    right:0,
                    background:"#8870BB",
                    zIndex: 90,
                }}
            >
            </motion.div>
        </div>
    )
}