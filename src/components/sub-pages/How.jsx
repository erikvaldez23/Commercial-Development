import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import coinAnimation from "../../assets/coin-animation.json";
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
  MenuItem,
  Select,
  FormControl,
  IconButton,
  Paper,
  Fade,
} from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro"; // Buy ARK
import ApartmentIcon from "@mui/icons-material/Apartment"; // Access to Projects
import InventoryIcon from "@mui/icons-material/Inventory"; // Staking Rewards
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Vote

import { styled, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

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

export default function How() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
    <Box sx={{ color: "white" }}>
      {/* Hero Section with 3D-like elements */}
      <Fade in={loaded} timeout={1000}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // pushes bottom strip to the bottom
            backgroundColor: "#000",
            backgroundSize: "cover",
            backgroundPosition: "center",
            overflow: "hidden",
            px: 2,
            pt: isMobile ? 8 : 12,
            pb: 0, // we'll handle bottom padding in strip
          }}
        >
          {/* Top: Hero Content */}
          <Container maxWidth="lg" sx={{ pt: 8 }}>
            <Grid container alignItems="center" spacing={4}>
              {/* Left Column: Text */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="overline"
                  sx={{
                    color: primaryColor,
                    fontWeight: 600,
                    letterSpacing: 3,
                  }}
                >
                  HOW IT WORKS
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: isMobile ? "2.5rem" : "3.5rem",
                  }}
                >
                  THE DIGITAL TOKEN FOR REAL<br />ESTATE IN THE NEXT ECONOMY
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 300,
                    mb: 4,
                    opacity: 0.9,
                  }}
                >
                  Our investment process is designed to be transparent,
                  efficient, and investor‑friendly — from the first meeting to
                  ongoing performance reporting.
                </Typography>
                <Box
                  sx={{
                    width: "100px",
                    height: "4px",
                    bgcolor: primaryColor,
                  }}
                />
              </Grid>

              {/* Right Column: Coin Animation */}
              <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    width: isMobile ? "60%" : 300,
                    mx: "auto",
                    perspective: "800px",
                  }}
                >
                  <Lottie
                    animationData={coinAnimation}
                    loop
                    autoplay
                    style={{
                      width: "100%",
                      transformOrigin: "bottom center",
                      filter: "drop-shadow(0 0 20px rgba(201, 180, 154, 0.3))",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>

          {/* Bottom: Access | Ownership | Rewards */}
          <Box
            sx={{
              mt: 6,
              backgroundColor: "#000",
              py: 2,
              px: 2,
            }}
          >
            <Container maxWidth="md">
              <Grid container spacing={4} justifyContent="center">
                {[
                  { icon: "🔑", label: "Access" },
                  { icon: "📊", label: "Ownership" },
                  { icon: "🏆", label: "Rewards" },
                ].map((item, i) => (
                  <Grid item xs={4} key={i}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      gap={1}
                    >
                      <Box
                        component="span"
                        sx={{ color: primaryColor, fontSize: 24 }}
                      >
                        {item.icon}
                      </Box>
                      <Typography sx={{ color: "white", fontWeight: 500 }}>
                        {item.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </Box>
      </Fade>

      <Box sx={{ backgroundColor: "#0f0f0f", py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              color: "#fff",
              mb: 4,
              textAlign: "center",
            }}
          >
            HOW IT WORKS
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                icon: <EuroIcon sx={{ fontSize: 40, color: primaryColor }} />,
                label: "Buy ARK",
              },
              {
                icon: (
                  <ApartmentIcon sx={{ fontSize: 40, color: primaryColor }} />
                ),
                label: "Get Access to Projects",
              },
              {
                icon: (
                  <InventoryIcon sx={{ fontSize: 40, color: primaryColor }} />
                ),
                label: "Earn Staking Rewards",
              },
              {
                icon: (
                  <CheckCircleIcon sx={{ fontSize: 40, color: primaryColor }} />
                ),
                label: "Vote on the Future",
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    borderRadius: 4,
                    border: "1px solid rgba(201,180,154,0.2)",
                    textAlign: "center",
                    py: 5,
                    px: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "rgba(201,180,154,0.4)",
                      boxShadow: `0 0 20px rgba(201,180,154,0.15)`,
                    },
                  }}
                >
                  <Box mb={2}>{item.icon}</Box>
                  <Typography sx={{ color: "#fff", fontWeight: 500 }}>
                    {item.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          position: "relative",
          py: 12,
          overflow: "hidden",
        }}
      >
        {/* Background gradient and blur elements */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "#000",
            zIndex: 0,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              filter: "blur(100px)",
              top: "-200px",
              right: "-100px",
            }}
          />
        </Box>

        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: "center" }}>
              <GoldText variant="h3" fontWeight={700} gutterBottom>
                Ready to Transform Your Investment Strategy?
              </GoldText>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  mb: 6,
                  maxWidth: 800,
                  mx: "auto",
                }}
              >
                Partner with us to unlock value in real estate. Let's build
                something lasting together.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  justifyContent: "center",
                }}
              >
                <GoldButton>Schedule a Consultation</GoldButton>
                <OutlinedGoldButton variant="outlined">
                  View Case Studies
                </OutlinedGoldButton>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
