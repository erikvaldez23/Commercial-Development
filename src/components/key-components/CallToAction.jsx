import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Dialog,
  IconButton,
  Container,
  Paper,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CallToAction = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { serviceId } = useParams();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // Content mapping based on serviceId
  const contentMap = {
    "commercial-window-tinting": {
      headline: "Professional Investment Solutions for Maximum Returns",
      paragraph: "Our expert team specializes in premium commercial real estate opportunities with proven track records of sustainable growth and above-market returns.",
      backgroundImage: "/images/commercial-real-estate.jpg",
      ctaText: "Explore Opportunities"
    },
    "windshield-protection-film": {
      headline: "Secure Your Financial Future Today",
      paragraph: "Build wealth through our carefully selected portfolio of diversified real estate investments, designed to provide both capital appreciation and passive income.",
      backgroundImage: "/images/financial-growth.jpg",
      ctaText: "Start Investing"
    },
    "headlight-services": {
      headline: "Illuminate Your Investment Portfolio",
      paragraph: "Discover how strategic real estate investments can enhance your portfolio's performance with stable returns and inflation-protected growth.",
      backgroundImage: "/images/modern-city.jpg",
      ctaText: "Get Financial Analysis"
    },
    "vehicle-paint-protection": {
      headline: "Shield Your Wealth Through Real Estate",
      paragraph: "Protect and grow your capital with our premium real estate investment vehicles, designed for sophisticated investors seeking long-term appreciation.",
      backgroundImage: "/images/luxury-property.jpg",
      ctaText: "Protect Your Assets"
    },
    "ceramic-coating": {
      headline: "Premium Investment Solutions",
      paragraph: "Access exclusive real estate opportunities with our institutional-grade investment platform, featuring properties in high-growth markets across the nation.",
      backgroundImage: "/images/premium-property.jpg",
      ctaText: "Request Portfolio"
    },
    "vehicle-paint-correction": {
      headline: "Restore Your Investment Potential",
      paragraph: "Revitalize your financial strategy with carefully selected real estate assets that deliver consistent returns in fluctuating market conditions.",
      backgroundImage: "/images/skyline.jpg",
      ctaText: "Schedule Consultation"
    },
    default: {
      headline: "Elevate Your Investment Strategy",
      paragraph: "Gain exclusive access to institutional-quality real estate opportunities with our carefully curated investment platform designed for discerning investors.",
      backgroundImage: "/images/real-estate-bg.jpg",
      ctaText: "Get Investment Analysis"
    }
  };

  // Get content based on serviceId or use default
  const content = contentMap[serviceId] || contentMap.default;

  return (
    <Box sx={{ position: "relative", py: { xs: 8, md: 12 } }}>
      {/* Background with gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(to right, rgba(14, 23, 36, 0.95), rgba(14, 23, 36, 0.8)), url('${content.backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={4} 
          alignItems="center"
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Left content section */}
          <Grid item xs={12} md={7}>
            <Box>
              <Typography
                component={motion.h2}
                variant={isMobile ? "h3" : "h2"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "0.5px",
                  mb: 3,
                  position: "relative",
                  display: "inline-block",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    bottom: -10,
                    left: 0,
                    width: "80px",
                    height: "4px",
                    background: "linear-gradient(to right, #c9b49a, #d4c4aa)",
                  }
                }}
              >
                {content.headline}
              </Typography>

              <Typography
                component={motion.p}
                variant="body1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  lineHeight: 1.8,
                  color: "rgba(255, 255, 255, 0.85)",
                  mb: 4,
                  maxWidth: "90%"
                }}
              >
                {content.paragraph}
              </Typography>

              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <Button
                  variant="contained"
                  onClick={handleOpenModal}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    background: "linear-gradient(to right, #c9b49a, #b09778)",
                    color: "#0d0d0d",
                    fontWeight: 600,
                    py: 1.5,
                    px: 4,
                    borderRadius: "4px",
                    textTransform: "none",
                    fontSize: "1.1rem",
                    boxShadow: "0 4px 20px rgba(201, 180, 154, 0.3)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(to right, #d6c2a8, #a88f6b)",
                      boxShadow: "0 6px 25px rgba(201, 180, 154, 0.5)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {content.ctaText}
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right feature section */}
          <Grid item xs={12} md={5} component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
            <Paper 
              elevation={16}
              sx={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                p: 4,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ color: "#c9b49a", fontWeight: 700, mb: 1 }}>
                  Investment Highlights
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                  Our premium offerings include:
                </Typography>
              </Box>
              
              {/* Investment features */}
              {[
                { title: "High-Yield Properties", desc: "8-12% annual returns" },
                { title: "Tax Advantages", desc: "Optimize your investment strategy" },
                { title: "Professional Management", desc: "Hands-off passive income" },
                { title: "Portfolio Diversification", desc: "Across multiple markets" }
              ].map((feature, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    mb: 2,
                    pb: 2,
                    borderBottom: index < 3 ? "1px solid rgba(255,255,255,0.1)" : "none"
                  }}
                >
                  <Box 
                    sx={{ 
                      width: 40, 
                      height: 40, 
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, rgba(201,180,154,0.2), rgba(201,180,154,0.05))",
                      mr: 2,
                      color: "#c9b49a",
                      fontWeight: "bold",
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ color: "white", fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                      {feature.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Modal */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        fullWidth
        maxWidth="lg"
        PaperProps={{
          sx: {
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
          }
        }}
      >
        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "#fff",
              backgroundColor: "rgba(0,0,0,0.6)",
              zIndex: 1,
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.8)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <iframe
            src=""
            width="100%"
            height="800px"
            style={{ border: "none" }}
            title="Investment Inquiry"
          />
        </Box>
      </Dialog>
    </Box>
  );
};

export default CallToAction;