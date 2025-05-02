import React, { useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import StarryBackground from "../reusable-components/StarryBackground";

// Apple-inspired color palette
const colors = {
  background: "#000000",
  cardBg: "rgba(40, 40, 40, 0.5)",
  accent: "#86c2ff", // Apple blue
  text: "#ffffff",
  subtext: "rgba(255, 255, 255, 0.8)",
  lightgray: "rgba(255, 255, 255, 0.3)",
};

const sections = [
  {
    title: "Conviction",
    content:
      "Our vast portfolio provides us with proprietary information across every major real estate asset class in virtually every major market around the world, allowing us to identify themes and invest capital with conviction.",
    icon: "graph.circle.fill", // Apple SF Symbol name reference
  },
  {
    title: "Connectivity",
    content:
      "Our people are our advantage. Our team of nearly 900 real estate professionals across 12 offices operates as one globally integrated business, allowing us to identify the opportunities and limits of each potential transaction.",
    icon: "network.fill", // Apple SF Symbol name reference
  },
  {
    title: "Scale",
    content:
      "Scale is one of our greatest strengths. The breadth of our existing portfolio gives us differentiated perspectives across sectors and geographies, while our significant discretionary capital base enables us to execute large and complex transactions.",
    icon: "chart.bar.fill", // Apple SF Symbol name reference
  },
];

const AppleIcons = {
  "graph.circle.fill": (
    <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 14l-1.41-1.41L13 13.17V7h-2v6.17l-1.59 1.59L8 16l4 4 4-4z" />
    </svg>
  ),
  "network.fill": (
    <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
      <path d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z" />
    </svg>
  ),
  "chart.bar.fill": (
    <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
      <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" />
    </svg>
  ),
  "arrow.right": (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </svg>
  ),
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

// Particle effect component
const ParticleEffect = ({ scrollYProgress }) => {
  // Create multiple particles with different animations
  const particles = Array.from({ length: 12 }, (_, i) => {
    const delay = i * 0.1;
    const size = Math.random() * (20 - 5) + 5;
    const xPos = Math.random() * 100;

    const y = useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [`${i * -20}%`, `${i * -10}%`, `${i * -5}%`]
    );

    const opacity = useTransform(
      scrollYProgress,
      [0, 0.2, 0.8, 1],
      [0, 0.6, 0.3, 0]
    );

    return (
      <motion.div
        key={i}
        style={{
          position: "absolute",
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          background: i % 2 === 0 ? "#c9b49a" : "#e2c799",
          left: `${xPos}%`,
          opacity,
          y,
          filter: `blur(${size / 3}px)`,
        }}
        animate={{
          x: [0, Math.random() * 20 - 10, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          repeatType: "reverse",
          delay,
        }}
      />
    );
  });

  return <>{particles}</>;
};

const WhatWeDo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const ref = useRef(null);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.1, 1.05, 1]
  );
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3],
    [0, 0.8, 1]
  );
  const titleY = useTransform(scrollYProgress, [0, 0.2, 0.3], [30, 10, 0]);

  // Entrance animation for the section
  const entranceVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Reveal animation for cards
  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.15,
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1], // Cubic bezier for a nice bounce effect
      },
    }),
  };

  return (
    <Box
      ref={ref}
      id="what-we-do"
      sx={{
        background: "transparent",
        py: { xs: 10, md: 12 },
        position: "relative",
        color: colors.text,
        overflow: "hidden",
      }}
    >
      {/* Connect particles effect */}
      <Box
        sx={{
          position: "absolute",
          top: "-50px", // Overlap with the hero section
          left: 0,
          right: 0,
          height: "200px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <ParticleEffect scrollYProgress={scrollYProgress} />
      </Box>

      {/* Transition gradient at the top */}
      <Box
        component={motion.div}
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
          y: useTransform(scrollYProgress, [0, 0.5], [0, -50]),
        }}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "150px",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Section Background */}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={entranceVariants}
          style={{
            opacity: titleOpacity,
            y: titleY,
          }}
        >
          <Typography
            variant="h2"
            fontWeight={600}
            textAlign="center"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              background: "linear-gradient(to right, #c9b49a, #e2c799)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.5px",
            }}
          >
            What We Do
          </Typography>

          <Divider
            component={motion.div}
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            sx={{
              mx: "auto",
              borderColor: "#c9b49a",
              borderWidth: 2,
              opacity: 0.8,
              marginY: isMobile ? 4 : 2,
            }}
          />

          <Typography
            variant="h6"
            textAlign="center"
            sx={{
              maxWidth: 700,
              mx: "auto",
              color: colors.subtext,
              mb: 6,
              lineHeight: 1.6,
              fontWeight: 400,
              fontSize: { xs: "1rem", md: "1.1rem" },
              letterSpacing: "0.15px",
            }}
          >
            We invest thematically in high-quality assets, focusing where we see
            outsized growth potential driven by global economic and demographic
            trends.
          </Typography>
        </motion.div>

        {/* Cards Section */}
        <Grid container spacing={3}>
          {sections.map((item, i) => (
            <Grid key={i} item xs={12} md={4}>
              <motion.div
                custom={i}
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <Box
                  sx={{
                    borderRadius: "20px",
                    p: 4,
                    background: "rgba(255, 255, 255, 0.04)", // ← More transparent and lighter
                    backdropFilter: "blur(20px) saturate(180%)", // ← Blur + Saturation boost for "glass" look
                    WebkitBackdropFilter: "blur(20px) saturate(180%)", // ← Safari support
                    boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.37)`, // ← A little stronger shadow
                    border: `1px solid rgba(255, 255, 255, 0.18)`, // ← Faint border
                    height: "330px",
                    transition:
                      "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    overflow: "hidden",
                    position: "relative",
                    "&:hover": {
                      boxShadow: `0 10px 40px rgba(0, 0, 0, 0.2), 0 0 20px ${colors.accent}22`,
                      "& .icon-wrapper": {
                        color: colors.accent,
                        transform: "translateY(-3px)",
                      },
                    },
                  }}
                >
                  {/* Apple-style Icon */}
                  <Box
                    className="icon-wrapper"
                    sx={{
                      mb: 3,
                      color: colors.text,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {AppleIcons[item.icon]}
                  </Box>

                  <Typography
                    variant="h5"
                    fontWeight={600}
                    gutterBottom
                    sx={{
                      mb: 2,
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: colors.subtext,
                      lineHeight: 1.7,
                      fontWeight: 400,
                      letterSpacing: "0.15px",
                    }}
                  >
                    {item.content}
                  </Typography>

                  {/* Apple-style subtle link */}
                  <Box
                    sx={{
                      mt: 3,
                      display: "flex",
                      alignItems: "center",
                      color: colors.accent,
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        gap: 1,
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                        fontSize: "0.95rem",
                      }}
                    >
                      Learn more
                    </Typography>
                    <Box
                      sx={{ ml: 0.5, display: "flex", alignItems: "center" }}
                    >
                      {AppleIcons["arrow.right"]}
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Final Section with Apple-style */}
        <Box sx={{ mt: 12, mb: 4, position: "relative" }}>
          {/* Apple-style glow element */}
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: [0, 0.5, 0.3],
              transition: {
                duration: 3,
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            viewport={{ once: false }}
            sx={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${colors.accent}22 0%, transparent 70%)`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              filter: "blur(50px)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ position: "relative", zIndex: 1 }}
          >
            <Typography
              variant="h3"
              fontWeight={600}
              textAlign="center"
              sx={{
                mb: 3,
                letterSpacing: "-0.5px",
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Our Strategies
            </Typography>

            <Typography
              variant="body1"
              textAlign="center"
              sx={{
                color: colors.subtext,
                fontWeight: 400,
                lineHeight: 1.7,
                maxWidth: "700px",
                mx: "auto",
                mb: 5,
                fontSize: { xs: "1rem", md: "1.1rem" },
                letterSpacing: "0.15px",
              }}
            >
              We have invested successfully through all market cycles and across
              the entire risk spectrum. Since we started investing in real
              estate in 1991, the growth of our business has expanded our
              ability to provide practical and diverse solutions.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Box
                  component="button"
                  sx={{
                    py: 1.5,
                    px: 4,
                    background: "linear-gradient(to right, #c9b49a, #e2c799)",
                    color: "#000000",
                    border: "none",
                    borderRadius: "25px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: `0 4px 20px ${colors.accent}44`,
                    letterSpacing: "-0.3px",
                    "&:hover": {
                      boxShadow: `0 6px 25px ${colors.accent}66`,
                    },
                  }}
                >
                  Learn More
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default WhatWeDo;
