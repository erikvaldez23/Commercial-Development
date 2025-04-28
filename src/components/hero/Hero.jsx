import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "/greenark-logo1.png";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const learnMoreScroll = () => {
    document.getElementById("what-we-do")?.scrollIntoView({
      behavior: "smooth",
      block: "start", // Aligns the element to the top of the viewport
    });
  };

  return (
    <Box
      sx={{
        background: "transparent",
        color: "white",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, pb: 5 }}>
        <Box
          sx={{
            py: { xs: 6, md: 8 },
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
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
          <Box
            component="img"
            src={logo}
            alt="Company Logo"
            sx={{
              position: "absolute",
              top: "-25%", // Adjust this if you want it closer or farther
              left: "50%",
              transform: "translateX(-50%)",
              width: { xs: "100px", md: "300px" }, // Responsive sizing
              height: "auto",
              zIndex: 2,
              pointerEvents: "none", // so it doesn't block button clicks
              opacity: 0.9, // slight transparency if you want
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              component={motion.div}
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 0.3, duration: 1 }}
              sx={{
                height: "3px",
                background:
                  "linear-gradient(90deg, rgba(201,180,154,0) 0%, rgba(201,180,154,1) 50%, rgba(201,180,154,0) 100%)",
                mx: "auto",
                mb: 4,
              }}
            />

            <Typography
              component={motion.h1}
              variant="h1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              sx={{
                fontWeight: 900,
                fontSize: { xs: "3.5rem", sm: "3.5rem", md: "7.5rem" },
                mb: 2,
                background: "linear-gradient(90deg, #ffffff 0%, #c9b49a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 30px rgba(201,180,154,0.3)",
                letterSpacing: "0.5px",
              }}
            >
              INVEST IN SUSTAINABLE <br /> REAL ESTATE
              {/* <Box
                component="span"
                sx={{
                  display: "inline-block",
                  color: "#c9b49a",
                  WebkitTextFillColor: "#c9b49a",
                }}
              >
                .
              </Box> */}
            </Typography>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.1rem", md: "2rem" },
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.85)",
                  maxWidth: "700px",
                  margin: "0 auto",
                  mb: 5,
                  lineHeight: 1.7,
                }}
              >
                Green Ark is redefining real estate investments — blending
                modern innovation with lasting impact for a sustainable future.
              </Typography>
            </motion.div>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                flexWrap: "wrap", // optional for mobile
              }}
            >
              <Button
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(90deg, #c9b49a 0%, #bca486 100%)",
                  color: "#0a0f14",
                  borderRadius: "30px",
                  fontSize: { xs: "0.9rem", md: "1.5rem" },
                  fontWeight: 600,
                  py: 1.5,
                  px: 4,
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, rgba(201,180,154,0.9) 0%, rgba(188,164,134,0.9) 100%)",
                    boxShadow: "0 0 20px rgba(201,180,154,0.4)",
                  },
                  transition: "all 0.3s ease",
                }}
                onClick={handleOpen}
              >
                Start Investing
              </Button>

              <Button
                sx={{
                  border: "3px solid #c9b49a",
                  color: "#c9b49a",
                  borderRadius: "30px",
                  fontSize: { xs: "0.9rem", md: "1.5rem" },
                  fontWeight: 600,
                  py: 1.5,
                  px: 4,
                  "&:hover": {
                    borderColor: "#c9b49a",
                    background: "rgba(201,180,154,0.08)",
                    boxShadow: "0 0 15px rgba(201,180,154,0.2)",
                  },
                  transition: "all 0.3s ease",
                }}
                onClick={learnMoreScroll}
              >
                Learn More
              </Button>
              {open && (
                <Dialog
                  open={open}
                  onClose={handleClose}
                  maxWidth="md"
                  fullWidth
                >
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
              )}
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
