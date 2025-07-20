import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "/greenark-logo1.png";
import { useNavigate } from "react-router-dom";

export default function HeroSection({ loadingDone }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [showContent, setShowContent] = useState(false); // <-- animation trigger delay
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleExploreClick = () => {
    navigate("/portfolio");
  };

  useEffect(() => {
    if (loadingDone) {
      const timer = setTimeout(() => {
        setShowTransition(true);
        setShowContent(true); // <-- 1s delay before showing animated content
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [loadingDone]);

  const learnMoreScroll = () => {
    document.getElementById("what-we-do")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.8 } },
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        backgroundImage: `url(/city.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ✅ Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={`/sunset.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Gradient Overlay Top */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
          zIndex: 1,
        }}
      />

      {/* ✅ Gradient Overlay Bottom */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "300px",
          background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            py: { xs: 6, md: 8 },
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {/* Blurred Glow */}
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={
              loadingDone ? { opacity: [0.4, 0.7, 0.4] } : { opacity: 0 }
            }
            transition={{
              delay: 0.5,
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            sx={{
              position: "absolute",
              top: "-5%",
              left: "50%",
              transform: "translateX(-50%)",
              width: { xs: "200px", md: "300px" },
              height: { xs: "200px", md: "300px" },
              background:
                "radial-gradient(circle, rgba(201,180,154,0.15) 0%, rgba(0,0,0,0) 70%)",
              borderRadius: "50%",
              filter: "blur(40px)",
              zIndex: -1,
            }}
          />

          {/* Static Centered Logo */}
          <Box
            component="img"
            src={logo}
            alt="Company Logo"
            sx={{
              position: "absolute",
              top: isMobile ? "-8%" : "-6%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "auto",
              zIndex: 2,
              pointerEvents: "none",
              filter: "drop-shadow(0 2px 6px rgba(0, 0, 0, 1))",
            }}
          />

          {/* Animated Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={showContent ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            style={{
              height: "3px",
              width: "120px",
              background:
                "linear-gradient(90deg, rgba(201,180,154,0) 0%, rgba(201,180,154,1) 50%, rgba(201,180,154,0) 100%)",
              transformOrigin: "center",
              margin: "1rem auto",
            }}
          />

          {/* Heading */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={showContent ? "visible" : "hidden"}
          >
            <Typography
              component="h1"
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "3.5rem", sm: "2rem", md: "4rem" },
                mb: 2,
                background: "linear-gradient(90deg, #ffffff 0%, #c9b49a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 30px rgba(201,180,154,0.3)",
                letterSpacing: "0.5px",
                filter: "drop-shadow(0 2px 6px rgba(0, 0, 0, 1))",
              }}
            >
              TOMORROWS <br /> SUSTAINABILITY TODAY
            </Typography>
          </motion.div>

          {/* Subheading */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={showContent ? "visible" : "hidden"}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.5rem" },
                fontWeight: 300,
                color: "rgba(255,255,255,0.85)",
                maxWidth: "700px",
                margin: "0 auto",
                mb: 2,
                lineHeight: 1.7,
                filter: "drop-shadow(0 2px 6px rgba(0, 0, 0, 1))",
              }}
            >
              Real estate engineered for intelligence, designed for resilience,
              and built for the world.
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate={showContent ? "visible" : "hidden"}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(90deg, #c9b49a 0%, #bca486 100%)",
                  color: "#0a0f14",
                  borderRadius: "30px",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontWeight: 600,
                  py: 2,
                  px: 4,
                  width: "200px",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, rgba(201,180,154,0.9) 0%, rgba(188,164,134,0.9) 100%)",
                    boxShadow: "0 0 20px rgba(201,180,154,0.4)",
                  },
                  transition: "all 0.3s ease",
                }}
                onClick={handleExploreClick}
              >
                Explore Projects
              </Button>

              <Button
                sx={{
                  border: "3px solid #c9b49a",
                  color: "#c9b49a",
                  borderRadius: "30px",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontWeight: 600,
                  py: 2,
                  px: 4,
                  width: "200px",
                  "&:hover": {
                    borderColor: "#c9b49a",
                    background: "rgba(201,180,154,0.4)",
                    boxShadow: "0 0 15px rgba(201,180,154,0.2)",
                  },
                  transition: "all 0.3s ease",
                }}
                onClick={learnMoreScroll}
              >
                Learn More
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>

      {/* Dialog Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent sx={{ position: "relative", padding: 0 }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: "white",
              "&:hover": { backgroundColor: "lightgray" },
            }}
          >
            <FaTimes />
          </IconButton>
          <iframe
            src=""
            width="100%"
            height="800px"
            style={{ border: "none" }}
            title="Fast Quote"
            loading="lazy"
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
