// src/components/animations/SlideUpReveal.jsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SlideUpReveal({ children, delay = 0.2 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const variants = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 18,
        delay,
      },
    },
  };
  

  return (
    <div ref={ref} style={{ position: "relative", height: "100vh" }}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "transparent", // optional
          zIndex: 10,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
