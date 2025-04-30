// src/components/transitions/TransitionElement.jsx
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TransitionElement = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });

  // Transform properties based on scroll
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.8, 1.2, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 0.6, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const blurAmount = useTransform(scrollYProgress, [0, 0.5, 1], [10, 20, 35]);
  
  // Dynamic gradient based on scroll position
  const gradientPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  return (
    <motion.div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        x: "-50%",
        y,
        scale,
        rotate,
        opacity,
        zIndex: 1,
        pointerEvents: "none", // So it doesn't interfere with clicks
      }}
    >
      {/* Floating element with gradient glow */}
      <motion.div
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "linear-gradient(90deg, #c9b49a 0%, #e2c799 100%)",
          boxShadow: "0 0 60px rgba(201,180,154,0.4)",
          filter: `blur(${blurAmount}px)`,
        }}
      />
      
      {/* Particles that follow the main element */}
      <motion.div
        style={{
          position: "absolute",
          top: "30%",
          left: "20%",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "#c9b49a",
          opacity: 0.5,
          filter: "blur(8px)",
          transform: `translateY(${gradientPosition})`,
        }}
      />
      
      <motion.div
        style={{
          position: "absolute",
          top: "60%",
          right: "10%",
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          background: "#e2c799",
          opacity: 0.7,
          filter: "blur(5px)",
          transform: `translateY(${gradientPosition})`,
        }}
      />
    </motion.div>
  );
};

export default TransitionElement;