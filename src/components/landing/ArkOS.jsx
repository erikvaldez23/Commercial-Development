import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
  Button,
  Stack,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Assessment as AssessmentIcon,
  Psychology as PsychologyIcon,
  ArrowForward as ArrowForwardIcon,
  PlayArrow as PlayArrowIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const ArkOSHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const handleStartClick = () => {
    navigate("/portfolio");
  };

  const features = [
    {
      icon: <DashboardIcon fontSize="large" />,
      text: "Real-time dashboards of every project",
    },
    {
      icon: <PeopleIcon fontSize="large" />,
      text: "Stakeholder collaboration portals",
    },
    {
      icon: <AssessmentIcon fontSize="large" />,
      text: "ESG tracking and permit intelligence",
    },
    {
      icon: <PsychologyIcon fontSize="large" />,
      text: "AI alerts for risks, delays, and optimization",
    },
  ];

  return (
    <Box
      ref={containerRef}
      sx={{
        background: "#000",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 30% 40%, rgba(226, 199, 153, 0.08) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          {/* Left side - Image */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "60%",
                    height: "60%",
                    background: "rgba(226, 199, 153, 0.1)",
                    filter: "blur(60px)",
                    zIndex: -1,
                    borderRadius: "50%",
                  },
                }}
              >
                <img
                  src="/blue-logo2.png"
                  alt="Ark OS Demo"
                  style={{
                    width: "60%",
                    height: "auto",
                    objectFit: "contain",
                    filter: "drop-shadow(0 0 40px rgba(226, 199, 153, 0.2)) saturate(0.8)",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          {/* Right side - Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: isMobile ? 0 : 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    color: "#e2c799",
                    fontWeight: 600,
                    mb: 2,
                    fontSize: { xs: "2.5rem", md: "4rem" },
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    textShadow: "0 0 40px rgba(226, 199, 153, 0.3)",
                  }}
                >
                  ARK OS
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    color: "#fff",
                    fontWeight: 500,
                    mb: 3,
                    fontSize: { xs: "1.2rem", md: "1.8rem" },
                    lineHeight: 1.3,
                    background: "-webkit-linear-gradient(45deg, #fff, #999)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Command the Future of Development
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: "rgba(255, 255, 255, 0.6)",
                    mb: 5,
                    lineHeight: 1.8,
                    fontWeight: 400,
                    fontSize: "1.05rem",
                    maxWidth: "600px",
                  }}
                >
                  ArkOS is the operational brain of every Green Ark project. From
                  dashboard overviews to ESG data, stakeholder approvals to
                  timeline risks — it's all managed in one AI-powered hub.
                </Typography>

                {/* Action Buttons */}
                <Stack direction="row" spacing={3} sx={{ mb: 6 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      backgroundColor: "#e2c799",
                      color: "#000",
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      borderRadius: "2px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontSize: "0.9rem",
                      boxShadow: "0 0 20px rgba(226, 199, 153, 0.3)",
                      "&:hover": {
                        backgroundColor: "#fff",
                        boxShadow: "0 0 30px rgba(226, 199, 153, 0.5)",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s cubic-bezier(0.23, 1, 0.320, 1)",
                    }}
                    onClick={handleStartClick}
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayArrowIcon />}
                    sx={{
                      borderColor: "rgba(226, 199, 153, 0.3)",
                      color: "#e2c799",
                      fontWeight: 600,
                      px: 3,
                      py: 1.5,
                      borderRadius: "2px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontSize: "0.9rem",
                      "&:hover": {
                        borderColor: "#e2c799",
                        backgroundColor: "rgba(226, 199, 153, 0.05)",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Watch Demo
                  </Button>
                </Stack>
              </motion.div>

              {/* Features Grid */}
              <Grid container spacing={3}>
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{ height: "100%" }}
                    >
                      <Box
                        sx={{
                          p: 3,
                          height: "100%",
                          background:
                            hoveredIndex === index
                              ? "linear-gradient(145deg, rgba(30,30,30,0.6) 0%, rgba(10,10,10,0.6) 100%)"
                              : "rgba(255, 255, 255, 0.02)",
                          border: "1px solid",
                          borderColor:
                            hoveredIndex === index
                              ? "rgba(226, 199, 153, 0.3)"
                              : "rgba(255, 255, 255, 0.05)",
                          borderRadius: "4px",
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          transition: "all 0.3s ease",
                          cursor: "default",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        {hoveredIndex === index && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              height: "1px",
                              background:
                                "linear-gradient(90deg, transparent, rgba(226, 199, 153, 0.8), transparent)",
                              animation: "shimmer 2s infinite",
                              "@keyframes shimmer": {
                                "0%": { transform: "translateX(-100%)" },
                                "100%": { transform: "translateX(100%)" },
                              },
                            }}
                          />
                        )}
                        <Box
                          sx={{
                            color:
                              hoveredIndex === index
                                ? "#e2c799"
                                : "rgba(255, 255, 255, 0.5)",
                            transition: "color 0.3s ease",
                            display: "flex",
                          }}
                        >
                          {feature.icon}
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{
                            color:
                              hoveredIndex === index
                                ? "#fff"
                                : "rgba(255, 255, 255, 0.7)",
                            fontWeight: 500,
                            lineHeight: 1.4,
                            fontSize: "0.95rem",
                            transition: "color 0.3s ease",
                          }}
                        >
                          {feature.text}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ArkOSHero;
