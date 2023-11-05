import { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import { motion, useAnimation } from "framer-motion";
import React from "react";

export function Reveal({ children }: any, width = "fit-content") {
  const ref = useRef(null);
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  });

  const animation = useAnimation();

  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.3) {
      animation.start("visible");
    }
  }, [animation, intersection]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.1,
              staggerChildren: 1
            }
          }
        }}
        initial="hidden"
        animate={animation}
      >
        {React.Children.map(children, (child, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {child}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
