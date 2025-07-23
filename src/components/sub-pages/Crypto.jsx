import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  Tabs,
  Tab,
  useMediaQuery,
  Chip,
  Stack,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import BuildingIcon from "@mui/icons-material/Business";
import ChartIcon from "@mui/icons-material/BarChart";
import MoneyIcon from "@mui/icons-material/AccountBalance";
import GlobeIcon from "@mui/icons-material/Public";
import PortfolioIcon from "@mui/icons-material/Description";
import TrendingIcon from "@mui/icons-material/TrendingUp";
import ShieldIcon from "@mui/icons-material/Security";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ArrowRightIcon from "@mui/icons-material/ArrowForward";
import Matter from "../subpage-components/Matter";
import Services from "../subpage-components/Services";
import Offerings from "../subpage-components/Offerings";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CryptoContent from "../subpage-components/CryptoContent";
import CallToAction from "../key-components/CallToAction";
import { Call } from "@mui/icons-material";

const ModernButton = styled(Button)(({ theme, variant: buttonVariant }) => ({
  borderRadius: "50px",
  padding: theme.spacing(1.5, 3), // Reduced padding for mobile
  fontSize: { xs: "0.95rem", sm: "1.1rem" }, // Responsive font size
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

const FloatingParticles = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        height: "100vh",
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
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-100px", opacity: [0, 1, 0] }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </Box>
  );
};

// Custom styled components using MUI's styled API
const GoldText = styled(Typography)(({ theme }) => ({
  color: "#c9b49a",
}));

const DarkSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#0f0f0f",
  color: "white",
}));

const DarkerSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#080808",
  color: "white",
}));

const GoldButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#c9b49a",
  color: "#0f0f0f",
  "&:hover": {
    backgroundColor: "#b8a389",
  },
  padding: "12px 24px",
  borderRadius: "28px",
  fontWeight: 600,
}));

const OutlinedGoldButton = styled(Button)(({ theme }) => ({
  color: "#c9b49a",
  borderColor: "#c9b49a",
  "&:hover": {
    borderColor: "#b8a389",
    backgroundColor: "rgba(201,180,154,0.04)",
  },
  padding: "12px 24px",
  borderRadius: "28px",
  fontWeight: 600,
}));

const OfferingCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  border: "1px solid rgba(201,180,154,0.1)",
  transition: "all 0.3s ease",
  height: "100%",
  "&:hover": {
    borderColor: "rgba(201,180,154,0.3)",
    transform: "translateY(-4px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: "rgba(255,255,255,0.7)",
  "&.Mui-selected": {
    color: "#c9b49a",
  },
  minWidth: "unset",
  padding: "12px 18px",
}));

const StatsCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  border: "1px solid rgba(201,180,154,0.1)",
  padding: theme.spacing(4),
  textAlign: "center",
}));

const StyledTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#c9b49a",
  },
});

// Company color
const primaryColor = "#c9b49a";
const darkBg = "#121212";
const darkPaper = "#1E1E1E";
const darkerGray = "#333333";

export default function Offer() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleLearnMore = () => {
    const section = document.getElementById("section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSelectChange = (event) => {
    setActiveTab(event.target.value);
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box sx={{ bgcolor: "#000", color: "white" }}>
      <FloatingParticles />

      {/* Hero Section - Mobile Optimized */}
      <Box
        component={motion.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          minHeight: { xs: "100svh", md: "100vh" }, // Use svh for mobile Safari
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background:
            "radial-gradient(circle at 50% 50%, rgba(201, 180, 154, 0.1) 0%, transparent 70%)",
          pb: 20, 
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
            alignItems: "center", 
            py: { xs: 2, md: 4 },
            px: { xs: 2, sm: 3 } // Reduced horizontal padding on mobile
          }}
        >
          <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
            {/* Coin Image - Optimized for mobile */}
            <Grid
              item
              xs={12}
              lg={6}
              sx={{ 
                order: { xs: 1, lg: 2 },
                textAlign: "center"
              }}
            >
              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  mb: { xs: 2, lg: 0 }
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: { xs: -10, md: -20 }, // Reduced glow on mobile
                      background:
                        "conic-gradient(from 0deg, rgba(201, 180, 154, 0.3), transparent, rgba(201, 180, 154, 0.3))",
                      borderRadius: "50%",
                      filter: "blur(20px)",
                      animation: "spin 10s linear infinite",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/coin2.png"
                    alt="Coin Image"
                    sx={{
                      width: { 
                        xs: isSmallMobile ? "280px" : "280px", 
                        sm: "280px", 
                        md: "320px",
                        lg: "400px" 
                      },
                      height: { 
                        xs: isSmallMobile ? "200px" : "240px", 
                        sm: "280px", 
                        md: "320px",
                        lg: "400px" 
                      },
                      objectFit: "contain",
                      filter: "drop-shadow(0 0 40px rgba(201, 180, 154, 0.4))",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            {/* Text Content - Mobile optimized */}
            <Grid
              item
              xs={12}
              lg={6}
              sx={{ 
                order: { xs: 2, lg: 1 },
                textAlign: { xs: "center", lg: "left" }
              }}
            >
              <Box
                component={motion.div}
                initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Chip
                  label="ARK CRYPTO"
                  sx={{
                    background:
                      "linear-gradient(45deg, rgba(201, 180, 154, 0.2), rgba(244, 228, 188, 0.2))",
                    border: "1px solid rgba(201, 180, 154, 0.3)",
                    color: primaryColor,
                    fontWeight: 600,
                    letterSpacing: { xs: 1, sm: 2 },
                    mb: { xs: 2, md: 1 },
                    mt: { xs: 0, md: 5 },
                    fontSize: { xs: "0.7rem", sm: "0.8rem" }
                  }}
                />

                <Typography
                  component={motion.h1}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  variant="h1"
                  sx={{
                    fontSize: { 
                      xs: "1.8rem", 
                      sm: "2.2rem", 
                      md: "2.8rem", 
                      lg: "3.5rem",
                      xl: "4rem" 
                    },
                    fontWeight: 700,
                    lineHeight: { xs: 1.2, md: 1.1 },
                    mb: { xs: 2, md: 3 },
                    wordBreak: "break-word",
                    hyphens: "auto"
                  }}
                >
                  <Box component="span" sx={{ color: "white" }}>
                    FROM DIGITAL ASSET
                  </Box>
                  <br />
                  <Box component="span" sx={{ color: "white" }}>
                    TO PHYSICAL IMPACT
                  </Box>
                </Typography>

                <Typography
                  component={motion.p}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  variant="body1"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontWeight: 300,
                    lineHeight: 1.6,
                    mb: { xs: 3, md: 4 },
                    maxWidth: "600px",
                    fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.25rem" },
                    mx: { xs: "auto", lg: 0 }
                  }}
                >
                  Ark is the utility token powering access, governance, and
                  ownership within the Green Ark ecosystem. Use it to access
                  developments early, vote on ESG impact, and earn rewards
                  through sustainable action.
                </Typography>

                <Stack
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ 
                    mb: { xs: 2, md: 4 },
                    alignItems: "center",
                    justifyContent: { xs: "center", lg: "flex-start" }
                  }}
                >
                  <ModernButton
                    variant="gradient"
                    size={isMobile ? "medium" : "large"}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      width: { xs: "100%", sm: "auto" },
                      maxWidth: { xs: "280px", sm: "none" }
                    }}
                  >
                    Get Started Now
                  </ModernButton>
                  <ModernButton
                    variant="outlined"
                    size={isMobile ? "medium" : "large"}
                    onClick={handleLearnMore}
                    sx={{
                      width: { xs: "100%", sm: "auto" },
                      maxWidth: { xs: "280px", sm: "none" }
                    }}
                  >
                    Learn More
                  </ModernButton>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <CryptoContent />
      <CallToAction />
    </Box>
  );
}