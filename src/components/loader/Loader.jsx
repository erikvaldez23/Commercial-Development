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
        "0 0 8px rgba(107, 255, 193, 0.7)",
        "0 0 18px rgba(107, 255, 193, 0.9)",
        "0 0 8px rgba(107, 255, 193, 0.7)"
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
      <motion.div
        variants={hexagonVariants}
        animate="rotate"
        style={{
          position: "absolute",
          width: "550px",
          height: "550px",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='550' height='550' viewBox='0 0 550 550' fill='none'%3E%3Cpath d='M275 5L484.5 147.5L484.5 402.5L275 545L65.5 402.5L65.5 147.5L275 5Z' stroke='rgba(107, 255, 193, 0.6)' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: "cover"
        }}
      />

      {/* Middle hexagon */}
      <motion.div
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
      />

      {/* Inner hexagon */}
      <motion.div
        variants={pulseVariants}
        animate="pulse"
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250' viewBox='0 0 250 250' fill='none'%3E%3Cpath d='M125 15L215.5 70.5L215.5 181.5L125 237L34.5 181.5L34.5 70.5L125 15Z' stroke='rgba(107, 255, 193, 0.9)' stroke-width='2' fill='rgba(107, 255, 193, 0.05)'/%3E%3C/svg%3E")`,
          backgroundSize: "cover"
        }}
      />

      {/* Core glow */}
      <Box
        component={motion.div}
        animate={{
          boxShadow: [
            "0 0 40px rgba(107, 255, 193, 0.4)",
            "0 0 70px rgba(107, 255, 193, 0.7)",
            "0 0 40px rgba(107, 255, 193, 0.4)"
          ]
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
          background: "radial-gradient(circle, rgba(107, 255, 193, 0.2) 0%, rgba(107, 255, 193, 0.1) 70%, transparent 100%)"
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
            color: "#6BFFC1",
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
            color: "#6BFFC1",
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
              background: "linear-gradient(90deg, rgba(107, 255, 193, 0) 0%, rgba(107, 255, 193, 1) 50%, rgba(107, 255, 193, 0) 100%)"
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}



// import React, { useEffect, useRef, useState } from "react";
// import { Box, Typography, useTheme } from "@mui/material";
// import { motion } from "framer-motion";

// export default function BuildingBlocksLoader({ onComplete }) {
//   const theme = useTheme();
//   const [progress, setProgress] = useState(0);
//   const containerRef = useRef(null);
  
//   // Simulate loading progress
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress(prev => {
//         const newProgress = prev + Math.random() * 3;
//         if (newProgress >= 100) {
//           clearInterval(interval);
//           // Route to main page after completion animation finishes
//           setTimeout(() => {
//             if (onComplete) onComplete();
//           }, 1000);
//           return 100;
//         }
//         return newProgress;
//       });
//     }, 100);
    
//     return () => clearInterval(interval);
//   }, [onComplete]);

//   // Block grid configuration
//   const rows = 5;
//   const cols = 5;
//   const totalBlocks = rows * cols;
//   const blocksToShow = Math.floor((progress / 100) * totalBlocks);
  
//   // Create blocks with staggered animation
//   const blocks = [];
//   for (let i = 0; i < totalBlocks; i++) {
//     const visible = i < blocksToShow;
//     const row = Math.floor(i / cols);
//     const col = i % cols;
    
//     blocks.push(
//       <motion.div
//         key={i}
//         initial={{ scale: 0, opacity: 0 }}
//         animate={visible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
//         transition={{ 
//           duration: 0.5, 
//           delay: visible ? i * 0.05 : 0,
//           type: "spring",
//           stiffness: 260,
//           damping: 20
//         }}
//         style={{
//           width: 50,
//           height: 50,
//           borderRadius: 6,
//           margin: 5,
//           background: `rgba(20, 25, 40, 0.8)`,
//           border: `1px solid rgba(80, 90, 120, 0.3)`,
//           boxShadow: `inset 0 0 10px rgba(50, 180, 255, ${visible ? '0.3' : '0'})`,
//           gridRow: row + 1,
//           gridColumn: col + 1,
//           position: 'relative',
//           overflow: 'hidden'
//         }}
//       >
//         {visible && (
//           <motion.div
//             initial={{ height: '0%' }}
//             animate={{ height: '100%' }}
//             transition={{ duration: 0.5 }}
//             style={{
//               position: 'absolute',
//               bottom: 0,
//               left: 0,
//               width: '100%',
//               background: 'linear-gradient(0deg, rgba(30, 90, 150, 0.2) 0%, rgba(20, 25, 40, 0) 100%)'
//             }}
//           />
//         )}
//       </motion.div>
//     );
//   }

//   // Completion animation
//   const isComplete = progress === 100;

//   return (
//     <Box
//       sx={{
//         position: "fixed",
//         inset: 0,
//         background: "linear-gradient(135deg, #0A0E17 0%, #121A2C 100%)",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         zIndex: theme.zIndex.modal + 10,
//         overflow: "hidden",
//       }}
//       ref={containerRef}
//     >
//       {/* Grid overlay */}
//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage: `
//             linear-gradient(rgba(50, 90, 150, 0.05) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(50, 90, 150, 0.05) 1px, transparent 1px)
//           `,
//           backgroundSize: "20px 20px",
//           opacity: 0.6
//         }}
//       />

//       {/* Ambient glow */}
//       <motion.div
//         animate={{
//           opacity: [0.4, 0.6, 0.4],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//         style={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           background: "radial-gradient(circle at 50% 50%, rgba(30, 80, 120, 0.1) 0%, rgba(10, 15, 30, 0) 70%)",
//         }}
//       />
      
//       {/* Company name */}
//       <Typography
//         component={motion.div}
//         animate={{
//           opacity: isComplete ? [1, 0] : 1,
//         }}
//         transition={{
//           duration: 0.5,
//           delay: isComplete ? 0.5 : 0
//         }}
//         variant="h3"
//         sx={{
//           color: "#FFFFFF",
//           fontFamily: "'Poppins', sans-serif",
//           fontWeight: 600,
//           letterSpacing: "0.1em",
//           marginBottom: "40px"
//         }}
//       >
//         GREEN ARK
//       </Typography>
      
//       {/* Building blocks grid */}
//       <motion.div
//         animate={isComplete ? {
//           scale: 1.2,
//           opacity: 0,
//           rotateY: 180
//         } : {}}
//         transition={{
//           duration: 0.8,
//           ease: "easeInOut",
//           delay: 0.2
//         }}
//         style={{
//           display: "grid",
//           gridTemplateColumns: `repeat(${cols}, 60px)`,
//           gridTemplateRows: `repeat(${rows}, 60px)`,
//           gap: 0,
//           perspective: "1000px"
//         }}
//       >
//         {blocks}
//       </motion.div>
      
//       {/* Loading text and progress */}
//       <Box
//         component={motion.div}
//         animate={isComplete ? { opacity: 0 } : { opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         sx={{ 
//           mt: 4,
//           textAlign: "center"
//         }}
//       >
//         <Typography
//           variant="body2"
//           sx={{
//             color: "rgba(255, 255, 255, 0.7)",
//             fontFamily: "'Roboto Mono', monospace",
//             fontSize: "0.8rem",
//             mb: 1
//           }}
//         >
//           {isComplete ? "CONSTRUCTION COMPLETE" : "BUILDING SYSTEM"}
//         </Typography>
        
//         {/* Progress bar */}
//         <Box
//           sx={{
//             position: "relative",
//             width: "280px",
//             height: "3px",
//             background: "rgba(30, 40, 60, 0.5)",
//             borderRadius: "4px",
//             overflow: "hidden"
//           }}
//         >
//           <motion.div
//             initial={{ width: 0 }}
//             animate={{ width: `${progress}%` }}
//             style={{
//               height: "100%",
//               background: "linear-gradient(90deg, #2C6DB4 0%, #50A2F0 100%)",
//               borderRadius: "4px"
//             }}
//           />
//         </Box>
        
//         {/* Progress percentage */}
//         <Typography
//           variant="body2"
//           sx={{
//             color: "rgba(255, 255, 255, 0.5)",
//             fontFamily: "'Roboto Mono', monospace",
//             fontSize: "0.7rem",
//             mt: 1
//           }}
//         >
//           {Math.floor(progress)}%
//         </Typography>
//       </Box>
//     </Box>
//   );
// }