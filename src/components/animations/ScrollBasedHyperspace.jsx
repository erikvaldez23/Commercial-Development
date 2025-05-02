// components/animations/ScrollBasedHyperspace.jsx
import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import HyperspaceBurst from "../animations/HyperspaceBurst";

const ScrollBasedHyperspace = () => {
  const [showEffect, setShowEffect] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const timeoutRef = useRef(null);
  const lastSectionChange = useRef(0);
  const sectionHeightRef = useRef(window.innerHeight);
  
  // Detect scroll position and section changes
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      
      // Calculate which section we're in
      const sectionHeight = sectionHeightRef.current;
      const currentSection = Math.floor(currentPosition / sectionHeight);
      const previousSection = Math.floor(lastSectionChange.current / sectionHeight);
      
      // If we've crossed a section boundary and enough time has passed (prevent multiple triggers)
      const now = Date.now();
      if (currentSection !== previousSection && now - lastSectionChange.current > 1000) {
        lastSectionChange.current = now;
        
        // Trigger the hyperspace effect
        setShowEffect(true);
        
        // Hide the effect after animation completes
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setShowEffect(false), 1000);
      }
    };
    
    // Update section height when window resizes
    const handleResize = () => {
      sectionHeightRef.current = window.innerHeight;
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  
  if (!showEffect) return null;
  
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0.7) 80%)",
          opacity: showEffect ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      />
      <HyperspaceBurst />
    </Box>
  );
};

export default ScrollBasedHyperspace;