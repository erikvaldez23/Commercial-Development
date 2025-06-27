import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  useMediaQuery,
  Paper,
  Chip,
  Stack,
  Avatar,
  IconButton,
  Fade,
  Grow,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import {
  Visibility,
  Timeline,
  Architecture,
  Speed,
  LocationCity,
  WbSunny,
  Air,
  Traffic,
  Assessment,
  CloudDownload,
  PlayArrow,
  AutoAwesome,
  Engineering,
  TrendingUp,
} from "@mui/icons-material";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import CallToAction from "../key-components/CallToAction";

// Styled Components
const GradientText = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(45deg, #c9b49a 30%, #c9b49a 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  fontWeight: 700,
}));

const GlassCard = styled(Card)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(201, 180, 154, 0.1)",
  borderRadius: "24px",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(201, 180, 154, 0.3)",
    transform: "translateY(-8px)",
    boxShadow: "0 20px 40px rgba(201, 180, 154, 0.15)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(135deg, rgba(201, 180, 154, 0.1) 0%, transparent 50%)",
    opacity: 0,
    transition: "opacity 0.4s ease",
  },
  "&:hover::before": {
    opacity: 1,
  },
}));

const FeatureCard = styled(GlassCard)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  "&:hover .feature-icon": {
    transform: "scale(1.1) rotate(5deg)",
    color: "#c9b49a",
  },
}));

const ModernButton = styled(Button)(({ theme, variant: buttonVariant }) => ({
  borderRadius: "50px",
  padding: "16px 32px",
  fontSize: "1.1rem",
  fontWeight: 600,
  textTransform: "none",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  ...(buttonVariant === "gradient"
    ? {
        background: "linear-gradient(45deg, #c9b49a 30%, #c9b49a 90%)",
        color: "#000",
        "&:hover": {
          background: "linear-gradient(45deg, #c9b49a 30%, #c9b49a 90%)",
          transform: "scale(1.05)",
          boxShadow: "0 10px 30px rgba(201, 180, 154, 0.3)",
        },
      }
    : {
        border: "2px solid #c9b49a",
        color: "#c9b49a",
        "&:hover": {
          background: "rgba(201, 180, 154, 0.1)",
          transform: "scale(1.05)",
        },
      }),
}));

const FloatingParticles = () => (
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      pointerEvents: "none",
    }}
  >
    {[...Array(20)].map((_, i) => (
      <Box
        key={i}
        sx={{
          position: "absolute",
          width: `${Math.random() * 6 + 2}px`,
          height: `${Math.random() * 6 + 2}px`,
          background:
            i % 3 === 0
              ? "linear-gradient(45deg, rgba(201,180,154,0.6), rgba(201,180,154,0.4))"
              : "rgba(201,180,154,0.3)",
          borderRadius: "50%",
          left: `${Math.random() * 100}%`,
          animation: `float ${Math.random() * 10 + 8}s infinite linear`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
    <style jsx>{`
      @keyframes float {
        from {
          transform: translateY(100vh) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        to {
          transform: translateY(-100px) rotate(360deg);
          opacity: 0;
        }
      }
    `}</style>
  </Box>
);

const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration * 60);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function ModernArkVision() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [loaded, setLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const keyFeatures = [
    {
      icon: (
        <Architecture
          className="feature-icon"
          sx={{ fontSize: 48, transition: "all 0.3s ease" }}
        />
      ),
      title: "AI-Generated Site Planning",
      description:
        "Advanced algorithms analyze zoning data and terrain to create optimal site layouts automatically.",
      color: "#c9b49a",
      gradient: "linear-gradient(135deg, #c9b49a 0%, #c9b49a 100%)",
    },
    {
      icon: (
        <WbSunny
          className="feature-icon"
          sx={{ fontSize: 48, transition: "all 0.3s ease" }}
        />
      ),
      title: "Environmental Simulation",
      description:
        "Real-time sunlight, wind patterns, and traffic flow analysis for optimal building placement.",
      color: "#ff9800", // leave non-blue tones
      gradient: "linear-gradient(135deg, #ff9800 0%, #f57c00 100%)",
    },
    {
      icon: (
        <Assessment
          className="feature-icon"
          sx={{ fontSize: 48, transition: "all 0.3s ease" }}
        />
      ),
      title: "ESG Optimization",
      description:
        "Built-in ESG scoring system that refines designs for maximum sustainability impact.",
      color: "#4caf50",
      gradient: "linear-gradient(135deg, #4caf50 0%, #388e3c 100%)",
    },
    {
      icon: (
        <CloudDownload
          className="feature-icon"
          sx={{ fontSize: 48, transition: "all 0.3s ease" }}
        />
      ),
      title: "ArkOS Integration",
      description:
        "Seamlessly export designs directly to ArkOS for live build tracking and project management.",
      color: "#9c27b0",
      gradient: "linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%)",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#000",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <FloatingParticles />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Hero */}
        <Fade in={loaded} timeout={1000}>
          <Box sx={{ textAlign: "center", py: { xs: 8, md: 18 } }}>
            <Avatar
              sx={{
                width: 120,
                height: 120,
                background: "linear-gradient(45deg, #c9b49a 30%, #c9b49a 90%)",
                fontSize: "3rem",
                mx: "auto",
                mb: 2,
                boxShadow: "0 0 40px rgba(201,180,154,0.3)",
                animation: "pulse 2s infinite",
              }}
            >
              <AutoAwesome sx={{ fontSize: "3rem" }} />
            </Avatar>
            <GradientText
              variant="h1"
              sx={{ fontSize: { xs: "3rem", sm: "4rem", md: "5rem" } }}
            >
              ARKVISION™
            </GradientText>
            <Typography
              variant="h4"
              sx={{ color: "rgba(255,255,255,0.8)", mb: 3, fontWeight: 300 }}
            >
              AI Urban Planning Layer
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.7)",
                mb: 6,
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              The generative brain behind every Green Ark development. Our
              proprietary AI design platform simulates, optimizes, and generates
              entire developments before a single shovel hits the ground.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              justifyContent="center"
            >
              <ModernButton
                variant="gradient"
                size="large"
                startIcon={<PlayArrow />}
                sx={{ minWidth: 200 }}
              >
                See Demo
              </ModernButton>
              <ModernButton
                variant="outlined"
                size="large"
                startIcon={<Engineering />}
                sx={{ minWidth: 200 }}
              >
                Learn More
              </ModernButton>
            </Stack>
          </Box>
        </Fade>

        {/* Features */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", mb: 2, fontWeight: 700 }}
          >
            Key Features
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "rgba(255,255,255,0.7)",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Cutting-edge AI technology that revolutionizes urban development
            planning
          </Typography>
          <Grid container spacing={4}>
            {keyFeatures.map((f, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Grow in={loaded} timeout={1000 + idx * 200}>
                  <FeatureCard
                    onMouseEnter={() => setActiveFeature(idx)}
                    onMouseLeave={() => setActiveFeature(null)}
                  >
                    <CardContent sx={{ p: 4, height: "100%" }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: "20px",
                          background: f.gradient,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 3,
                          color: "white",
                        }}
                      >
                        {f.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          color: activeFeature === idx ? "#c9b49a" : "white",
                        }}
                      >
                        {f.title}
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                        {f.description}
                      </Typography>
                    </CardContent>
                  </FeatureCard>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <CallToAction />
    </Box>
  );
}
