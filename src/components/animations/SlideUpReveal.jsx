import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";

export default function SlideUpReveal({ children, delay = 0.2, overlap = "100vh" }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1, // Lower threshold to trigger earlier
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        zIndex: 10, // Higher z-index to ensure it appears above the hero
        overflow: "visible", // Changed from hidden to allow for shadow effects
        mt: `-${overlap}`, // Negative margin to create overlap with hero
        pt: overlap, // Add padding to compensate for negative margin
      }}
    >
      {/* Decorative handle/edge that appears at the top of the sliding section */}
      {/* <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1, 
            y: 0,
            transition: { delay: delay - 0.1, duration: 0.5 }
          }
        }}
        sx={{
          height: "5px",
          width: "80px",
          backgroundColor: "#c9b49a",
          borderRadius: "10px",
          margin: "0 auto 20px auto",
          position: "relative",
          top: "10px",
          boxShadow: "0 0 15px rgba(201,180,154,0.5)",
        }}
      /> */}

      {/* Main content container with shadow for depth effect */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { y: 200, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 40, // Lower stiffness for smoother animation
              damping: 22, // Higher damping to reduce bouncing
              delay,
            },
          },
        }}
        style={{ 
          // borderTopLeftRadius: "30px", 
          // borderTopRightRadius: "30px",
          // boxShadow: "0 -10px 30px rgba(0,0,0,0.4)",
          backgroundColor: "#111", // Match your WhatWeDo section background
          minHeight: "50vh",
          overflow: "hidden"
        }}
      >
        {children}
      </motion.div>
    </Box>
  );
}