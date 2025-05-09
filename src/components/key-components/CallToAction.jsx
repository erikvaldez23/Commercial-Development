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

  // Content mapping based on serviceId or purpose
  const contentMap = {
    // You can add specific content variations here
    default: {
      headline: "Ready to Work on the Biggest Problem of all Time?",
      paragraph:
        "We are freaked out about climate change — but we are optimists. With the right people, building the right solutions, we can get to net zero in time. Reshape entire industries. And cool the planet.",
      secondaryText:
        "This decade is the inflection point. What are you waiting for?",
      ctaText: "APPLY NOW",
    },
  };

  // Get content based on serviceId or use default
  const content = contentMap[serviceId] || contentMap.default;

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
        background: "url(/Commercial-Development/tem-cta-bg3.jpg)",
       backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background with gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "#000",
          zIndex: -1,
        }}
      />

      {/* Wavy overlay effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.4,
          background: "url('/path-to-wavy-texture.png')",
          backgroundSize: "cover",
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
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
          {/* Left content section - Now takes up more space */}
          <Grid item xs={12} md={7} lg={8}>
            <Box>
              <Typography
                component={motion.h1}
                variant={isMobile ? "h2" : "h1"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                sx={{
                  fontFamily: "'Inter', 'Roboto', sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "8.5rem" },
                  color: "white",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  mb: 6,
                  maxWidth: "100%",
                }}
              >
                {content.headline}
              </Typography>
            </Box>
          </Grid>

          {/* Right section - empty for this style */}
          <Grid item xs={12} md={5} lg={4}>
            {/* Intentionally left empty to match the screenshot layout */}
            <Typography
              component={motion.p}
              variant="body1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.8rem" },
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, 0.9)",
                mb: 4,
                maxWidth: { xs: "100%", md: "80%" },
                marginTop: 80,
              }}
            >
              {content.paragraph}
            </Typography>
            <Typography
              component={motion.p}
              variant="body1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.6rem" },
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, 0.9)",
                mb: 4,
                fontWeight: 500,
                maxWidth: { xs: "100%", md: "80%" },
              }}
            >
              {content.secondaryText}
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
                  backgroundColor: "white",
                  color: "#3a1c71",
                  fontWeight: 600,
                  py: 1.5,
                  px: 4,
                  borderRadius: "2rem",
                  textTransform: "uppercase",
                  fontSize: "0.875rem",
                  letterSpacing: "0.05em",
                  boxShadow: "0 4px 20px rgba(255, 255, 255, 0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    boxShadow: "0 6px 25px rgba(255, 255, 255, 0.5)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {content.ctaText}
              </Button>
            </Box>
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
          },
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
            title="Application Form"
          />
        </Box>
      </Dialog>
    </Box>
  );
};

export default CallToAction;
