import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
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
  Fade,
  Chip,
  Stack,
  Divider,
  Avatar,
  IconButton,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import EuroIcon from "@mui/icons-material/Euro";
import ApartmentIcon from "@mui/icons-material/Apartment";
import InventoryIcon from "@mui/icons-material/Inventory";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SecurityIcon from "@mui/icons-material/Security";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import PublicIcon from "@mui/icons-material/Public";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Simulated Lottie component
const Lottie = ({ animationData, loop, autoplay, style }) => (
  <Box
    sx={{
      ...style,
      backgroundColor: "rgba(201, 180, 154, 0.1)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "4rem",
      border: "2px solid rgba(201, 180, 154, 0.3)",
    }}
  >
    🪙
  </Box>
);

const coinAnimation = {};
const primaryColor = "#c9b49a";

// Styled Components
const GradientText = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(45deg, #c9b49a 30%, #f4e4bc 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}));

const GlassCard = styled(Card)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(201, 180, 154, 0.1)",
  borderRadius: "20px",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(201, 180, 154, 0.3)",
    transform: "translateY(-8px)",
    boxShadow: "0 20px 40px rgba(201, 180, 154, 0.1)",
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
        background: "linear-gradient(45deg, #c9b49a 30%, #f4e4bc 90%)",
        color: "#000",
        "&:hover": {
          background: "linear-gradient(45deg, #b8a389 30%, #e6d4a8 90%)",
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

const StatsCard = styled(Paper)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.4)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "16px",
  padding: theme.spacing(3),
  textAlign: "center",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    border: "1px solid rgba(201, 180, 154, 0.3)",
  },
}));

const ProcessCard = styled(GlassCard)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    right: "-20px",
    width: "40px",
    height: "2px",
    background: "linear-gradient(90deg, #c9b49a, transparent)",
    transform: "translateY(-50%)",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  "&:last-child::after": {
    display: "none",
  },
}));

// Floating particles component
const FloatingParticles = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {[...Array(15)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          sx={{
            position: "absolute",
            width: "4px",
            height: "4px",
            background:
              "linear-gradient(45deg, rgba(201, 180, 154, 0.6), rgba(244, 228, 188, 0.4))",
            borderRadius: "50%",
            left: `${Math.random() * 100}%`,
          }}
          initial={{
            y: "100vh",
            opacity: 0,
          }}
          animate={{
            y: "-100px",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </Box>
  );
};

// Counter component
const CounterNumber = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
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
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function ModernizedHow() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [loaded, setLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const processSteps = [
    {
      icon: <EuroIcon sx={{ fontSize: 48, color: primaryColor }} />,
      title: "Buy ARK",
      description:
        "Purchase ARK tokens through our secure platform with multiple payment options and instant verification.",
      color: "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)",
    },
    {
      icon: <ApartmentIcon sx={{ fontSize: 48, color: primaryColor }} />,
      title: "Access Projects",
      description:
        "Unlock exclusive real estate investment opportunities and curated project portfolios worldwide.",
      color: "linear-gradient(135deg, #4fc3f7 0%, #29b6f6 100%)",
    },
    {
      icon: <InventoryIcon sx={{ fontSize: 48, color: primaryColor }} />,
      title: "Earn Rewards",
      description:
        "Stake your tokens and earn passive income through our automated reward distribution system.",
      color: "linear-gradient(135deg, #81c784 0%, #66bb6a 100%)",
    },
    {
      icon: <CheckCircleIcon sx={{ fontSize: 48, color: primaryColor }} />,
      title: "Vote & Govern",
      description:
        "Participate in governance decisions and shape the future direction of the platform and investments.",
      color: "linear-gradient(135deg, #ba68c8 0%, #ab47bc 100%)",
    },
  ];

  const stats = [
    { number: 150, suffix: "M+", label: "Total Value Locked" },
    { number: 25, suffix: "K+", label: "Active Investors" },
    { number: 98, suffix: "%", label: "Satisfaction Rate" },
    { number: 12, suffix: "+", label: "Countries Served" },
  ];

  const trustIndicators = [
    { icon: <SecurityIcon />, label: "Bank-level Security", color: "#4caf50" },
    { icon: <FlashOnIcon />, label: "Instant Access", color: "#2196f3" },
    { icon: <PublicIcon />, label: "Global Platform", color: "#9c27b0" },
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

      {/* Hero Section */}
      <Box
        component={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          height: "75vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background:
            "radial-gradient(circle at 50% 50%, rgba(201, 180, 154, 0.1) 0%, transparent 70%)",
          mt: 10,
        }}
      >
        {/* Background gradients */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, #000 0%, #1a1a1a 50%, #000 100%)",
            zIndex: -1,
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            py: 8,
          }}
        >
          <Box>
            {/* Logo Icon */}
            <Box
              component="img"
              src="/Commercial-Development/arkvision-logo.png" // Replace with your icon path
              alt="ARKVISION Logo"
              sx={{
                width: "64px",
                height: "64px",
                mb: 2,
                mx: "auto",
              }}
            />

            {/* Title */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
                letterSpacing: "1px",
                color: "white",
                mb: 1,
              }}
            >
              ARKVISION™
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h6"
              sx={{
                color: "#29b6f6",
                fontWeight: 400,
                fontSize: { xs: "1rem", sm: "1.2rem" },
                letterSpacing: "0.5px",
              }}
            >
              AI Urban Planning Layer
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
