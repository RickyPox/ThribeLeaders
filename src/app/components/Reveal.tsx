"use client"
import { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import {delay, motion, stagger, useAnimation} from "framer-motion";


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
        }         
    })

    return(
        <div ref={ref} style={{ position: "relative", width, overflow:"hidden" }}>
            <motion.div
                variants={{ 
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration:0.5}}
                {...stagger(0.2)}
            >
                {children}
            </motion.div>
        </div>
    )
}