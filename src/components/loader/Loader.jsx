import React, { useEffect, useRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function FuturisticLoader() {
  const theme = useTheme();
  const containerRef = useRef(null);

  // Particle effect setup
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particleCount = 150; // More particles for stronger hyperspace feel
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      // Random position, size, and initial scale
      const size = Math.random() * 2 + 1;
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      const delay = Math.random() * 5;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      particle.style.animationDelay = `${delay}s`;

      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  // Variants
  const hexagonVariants = {
    rotate: {
      rotate: 360,
      transition: { duration: 20, ease: "linear", repeat: Infinity }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: { duration: 2, ease: "easeInOut", repeat: Infinity }
    }
  };

  const textVariants = {
    glow: {
      textShadow: [
        "0 0 8px rgba(201, 180, 154, 0.7)",
        "0 0 18px rgba(201, 180, 154, 0.9)",
        "0 0 8px rgba(201, 180, 154, 0.7)"
      ],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        background: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: theme.zIndex.modal + 10,
        overflow: "hidden",
        perspective: "1000px",
        "& .particle": {
          position: "absolute",
          background: "white",
          borderRadius: "50%",
          pointerEvents: "none",
          animation: "hyperspace 2s linear infinite",
          opacity: 0.8
        },
        "@keyframes hyperspace": {
          "0%": {
            transform: "translateZ(0px) scale(1)",
            opacity: 0.3
          },
          "70%": {
            transform: "translateZ(500px) scale(2)",
            opacity: 1
          },
          "100%": {
            transform: "translateZ(1000px) scale(4)",
            opacity: 0
          }
        }
      }}
      ref={containerRef}
    >
      {/* Optional faint grid overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(107, 255, 193, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(107, 255, 193, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          opacity: 0.1
        }}
      />

      {/* Outer hexagon */}
      {/* <motion.div
        variants={hexagonVariants}
        animate="rotate"
        style={{
          position: "absolute",
          width: "550px",
          height: "550px",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='550' height='550' viewBox='0 0 550 550' fill='none'%3E%3Cpath d='M275 5L484.5 147.5L484.5 402.5L275 545L65.5 402.5L65.5 147.5L275 5Z' stroke='rgba(107, 255, 193, 0.6)' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: "cover"
        }}
      /> */}

      {/* Middle hexagon */}
      {/* <motion.div
        variants={hexagonVariants}
        animate="rotate"
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400' fill='none'%3E%3Cpath d='M200 10L347.9 103.1L347.9 296.9L200 390L52.1 296.9L52.1 103.1L200 10Z' stroke='rgba(107, 255, 193, 0.7)' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          transform: "rotate(180deg)"
        }}
      /> */}

      {/* Inner hexagon */}
      {/* <motion.div
        variants={pulseVariants}
        animate="pulse"
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250' viewBox='0 0 250 250' fill='none'%3E%3Cpath d='M125 15L215.5 70.5L215.5 181.5L125 237L34.5 181.5L34.5 70.5L125 15Z' stroke='rgba(107, 255, 193, 0.9)' stroke-width='2' fill='rgba(107, 255, 193, 0.05)'/%3E%3C/svg%3E")`,
          backgroundSize: "cover"
        }}
      /> */}

      {/* Core glow */}
      <Box
        component={motion.div}
        animate={{
          boxShadow: [
            "0 0 8px rgba(201, 180, 154, 0.7)",
            "0 0 18px rgba(201, 180, 154, 0.9)",
            "0 0 8px rgba(201, 180, 154, 0.7)"
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        sx={{
          position: "absolute",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: 'linear-gradient(145deg, #c9b49a 0%, #e5ded1 50%, #fffaf2 100%)'

        }}
      />

      {/* Company Name */}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          textAlign: "center"
        }}
      >
        <Typography
          component={motion.div}
          variants={textVariants}
          animate="glow"
          variant="h3"
          sx={{
            color: "#c9b49a",
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textShadow: "0 0 10px rgba(107, 255, 193, 0.8)",
            marginBottom: "16px"
          }}
        >
          GREEN ARK
        </Typography>

        <Typography
          component={motion.div}
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          variant="subtitle1"
          sx={{
            color: "#c9b49a",
            fontFamily: "'Roboto Mono', monospace",
            letterSpacing: "0.2em",
            fontSize: "0.8rem",
            opacity: 0.8
          }}
        >
          INITIALIZING SYSTEMS
        </Typography>

        {/* Progress bar */}
        <Box
          sx={{
            position: "relative",
            width: "200px",
            height: "4px",
            background: "rgba(107, 255, 193, 0.2)",
            margin: "12px auto 0",
            borderRadius: "2px",
            overflow: "hidden"
          }}
        >
          <Box
            component={motion.div}
            animate={{
              x: ["-100%", "100%"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            sx={{
              position: "absolute",
              width: "50%",
              height: "100%",
              background: 'linear-gradient(145deg, #c9b49a 0%, #e5ded1 50%, #fffaf2 100%)'


            }}
          />
        </Box>
      </Box>
    </Box>
  );
}