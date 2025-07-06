import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const WhatWeDo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: false, amount: isMobile ? 0.1 : 0.3 });

  const titleY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const dividerWidth = useTransform(
    scrollYProgress,
    [0.6, 0.8],
    ["0%", "100%"]
  );
  const quoteOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const quoteY = useTransform(scrollYProgress, [0.4, 0.6], [30, 0]);

  const items = [
    {
      title: "Smart Cities",
      description: "Designed with AI, powered by purpose.",
      icon: "/icons/smart.png",
    },
    {
      title: "Mixed-Use Towers",
      description: "Modular, efficient, connected.",
      icon: "/icons/towers.png",
    },
    {
      title: "Eco Communities",
      description: "Off-grid carbon aware. Future ready.",
      icon: "/icons/communities.png",
    },
    {
      title: "Regenerative Projects",
      description: "Built to give back more than they take.",
      icon: "/icons/projects.png",
    },
  ];

  // Hover state for card animation
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box
      ref={sectionRef}
      sx={{
        background: "#000",
        height: { xs: "auto", md: "100vh" },
        minHeight: { xs: "100vh" },
        py: { xs: 8, sm: 10, md: 16 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "url('/api/placeholder/1920/1080') center/cover no-repeat",
          opacity: 0.08,
          mixBlendMode: "overlay",
        },
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: "relative", 
          zIndex: 2,
          px: { xs: 2, sm: 3 }
        }}
      >
        <motion.div
          ref={titleRef}
          style={{
            y: prefersReducedMotion ? 0 : titleY,
            opacity: prefersReducedMotion ? 1 : titleOpacity,
          }}
        >
          <Typography
            variant="h1"
            align="center"
            sx={{
              fontSize: { 
                xs: "3rem",
                sm: "2.5rem", 
                md: "3.5rem", 
                lg: "4.5rem" 
              },
              letterSpacing: { xs: 1, md: 2 },
              color: "#e2c799",
              mb: { xs: 4, sm: 6, md: 12 },
              fontWeight: 600,
              textShadow: "0 0 40px rgba(226, 199, 153, 0.3)",
              position: "relative",
              px: { xs: 1, sm: 0 },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -20,
                left: "50%",
                transform: "translateX(-50%)",
                width: "60px",
                height: "4px",
                background:
                  "linear-gradient(90deg, rgba(226,199,153,0) 0%, rgba(226,199,153,1) 50%, rgba(226,199,153,0) 100%)",
              },
            }}
          >
            OUR BLUEPRINT FOR THE FUTURE
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "grid",
    gridTemplateColumns: {
  xs: "repeat(2, 1fr)",
  md: "repeat(4, 1fr)",
},


            gap: { xs: 2, sm: 3, md: 4 },
            my: { xs: 3, sm: 4, md: 8 },
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 50 }}
              whileInView={prefersReducedMotion ? {} : {
                opacity: 1,
                y: 0,
                transition: {
                  duration: isMobile ? 0.4 : 0.7,
                  delay: index * (isMobile ? 0.1 : 0.15),
                  ease: [0.215, 0.61, 0.355, 1],
                },
              }}
              viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              onTouchStart={() => setHoveredIndex(index)}
              onTouchEnd={() => setHoveredIndex(null)}
              whileHover={!isMobile ? { scale: 1.02 } : {}}
              whileTap={{ scale: 0.98 }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  height: "100%",
                  p: { xs: 2, sm: 3 },
                  borderRadius: 2,
                  minHeight: { xs: 200, sm: 250 },
                  background:
                    hoveredIndex === index
                      ? "linear-gradient(145deg, rgba(30,30,30,0.3) 0%, rgba(10,10,10,0.3) 100%)"
                      : "transparent",
                  backdropFilter: hoveredIndex === index ? "blur(8px)" : "none",
                  border: "1px solid",
                  borderColor:
                    hoveredIndex === index
                      ? "rgba(226,199,153,0.2)"
                      : "transparent",
                  transition: "all 0.4s ease",
                  position: "relative",
                  overflow: "hidden",
                  "&::before":
                    hoveredIndex === index
                      ? {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "1px",
                          background:
                            "linear-gradient(90deg, rgba(226,199,153,0) 0%, rgba(226,199,153,0.5) 50%, rgba(226,199,153,0) 100%)",
                          animation: "shimmer 2s infinite",
                        }
                      : {},
                  "@keyframes shimmer": {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(100%)" },
                  },
                }}
              >
                <motion.div
                  animate={{
                    y: hoveredIndex === index && !isMobile ? [-5, 0, -5] : 0,
                    transition: {
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "reverse",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      mb: { xs: 2, sm: 3 },
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 80, sm: 100 },
                        height: { xs: 80, sm: 100 },
                        background:
                          "radial-gradient(circle, rgba(226,199,153,0.1) 0%, rgba(226,199,153,0) 70%)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={item.icon}
                        alt={item.title}
                        style={{
                          width: isMobile ? 60 : 80,
                          height: isMobile ? 60 : 80,
                          filter: "drop-shadow(0 0 10px rgba(226,199,153,0.3))",
                        }}
                      />
                    </Box>
                  </Box>
                </motion.div>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.7rem" },
                    transition: "color 0.3s ease",
                    color: hoveredIndex === index ? "#e2c799" : "#fff",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#aaa",
                    maxWidth: { xs: "180px", sm: "220px" },
                    mx: "auto",
                    fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1.5rem" },
                    opacity: 0.8,
                    lineHeight: { xs: 1.3, sm: 1.4 },
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>

        <Divider
          sx={{
            my: { xs: 4, sm: 5, md: 8 },
            background:
              "linear-gradient(90deg, rgba(201,180,154,0) 0%, rgba(201,180,154,1) 50%, rgba(201,180,154,0) 100%)",
            height: "2px",
            width: "100%",
            mx: "auto",
            boxShadow: "0 0 10px rgba(201,180,154,0.3)",
          }}
        />

        <motion.div
          style={{
            opacity: prefersReducedMotion ? 1 : quoteOpacity,
            y: prefersReducedMotion ? 0 : quoteY,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              color: "#bfae90",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },
              textShadow: "0 0 20px rgba(191,174,144,0.2)",
              letterSpacing: { xs: 0.5, md: 1 },
              lineHeight: { xs: 1.3, md: 1.5 },
              px: { xs: 3, sm: 0 },
              mt: { xs: 3, md: 0 },
            }}
          >
            "The best way to predict the future is to create it"
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default WhatWeDo;