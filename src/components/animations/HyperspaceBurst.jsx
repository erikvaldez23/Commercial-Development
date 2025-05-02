// components/reusable-components/HyperspaceBurst.jsx
import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

const HyperspaceBurst = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particleCount = 600;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "burst-particle";

      const size = Math.random() * 2 + 1;
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      const delay = Math.random() * 0.5;

      Object.assign(particle.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${posX}px`,
        top: `${posY}px`,
        animationDelay: `${delay}s`,
      });

      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        "& .burst-particle": {
          position: "absolute",
          background: "white",
          borderRadius: "50%",
          opacity: 0.7,
          animation: "hyperspace-burst 2s linear forwards"

        },
        "@keyframes hyperspace-burst": {
  "0%": {
    transform: "translateZ(0px) scale(0.1)",
    opacity: 0.3,
  },
  "70%": {
    transform: "translateZ(600px) scale(2.8)",
    opacity: 1,
  },
  "100%": {
    transform: "translateZ(1200px) scale(6)",
    opacity: 0,
  },
},

      }}
    />
  );
};

export default HyperspaceBurst;
