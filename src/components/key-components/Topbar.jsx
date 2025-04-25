import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  useMediaQuery,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/greenark-logo1.png";

const navItems = [
  { label: "What We Offer", path: "/what-we-offer" },
  { label: "How it Works", path: "/how-it-works" },
  { label: "About Us", path: "/about" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "contact", isAnchor: true },
];

const NavButton = styled(motion.div)({
  position: "relative",
  cursor: "pointer",
});

const Topbar = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [activeItem, setActiveItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      // Already on homepage — scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to homepage
      navigate("/");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: isScrolled ? "rgba(0, 0, 0, 0.85)" : "transparent",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
        padding: isScrolled ? "0.25rem 2rem" : "0.5rem 2rem",
        // borderBottom: isScrolled
        //   ? "1px solid rgba(201,180,154, 0.1)"
        //   : "1px solid rgba(255, 255, 255, 0.05)",
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar disableGutters sx={{ height: "100px" }}>
        <Box
          sx={{
            width: "100%",
            maxWidth: "1300px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: 2,
            m: "0 auto",
          }}
        >
          {/* Logo + Glow */}
          <Box
            onClick={handleLogoClick}
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
              y: [0, -10, 0], // Moves up then down (bounce)
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
            transition={{ duration: 0.6 }}
            display="flex"
            alignItems="center"
            position="relative"
            sx={{ cursor: "pointer" }}
          >
            <Box
              component={motion.div}
              animate={{ opacity: [0.4, 0.6, 0.4] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              sx={{
                position: "absolute",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                filter: "blur(10px)",
              }}
            />
            <img
              src={logo}
              alt="Green Ark Logo"
              style={{
                height: "200px",
                objectFit: "contain",
                filter: "drop-shadow(0 0 8px rgba(201,180,154, 0.2))",
              }}
            />
          </Box>

          {/* Desktop Nav + CTA */}
          {!isMobile && (
            <>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  gap: { xs: 1, md: 3 },
                }}
              >
                {navItems.map((item, index) => (
                  <Box
                    key={item.label}
                    component="div"
                    onClick={() => {
                      if (item.isAnchor) {
                        if (location.pathname === "/") {
                          // Scroll to contact section
                          document
                            .getElementById("contact")
                            ?.scrollIntoView({ behavior: "smooth" });
                        } else {
                          // Go to homepage and let useEffect handle the scroll
                          navigate("/", { state: { scrollTo: "contact" } });
                        }
                      } else {
                        navigate(item.path);
                      }
                    }}
                    sx={{ textDecoration: "none", cursor: "pointer" }}
                  >
                    <NavButton
                      onHoverStart={() => setActiveItem(item.label)}
                      onHoverEnd={() => setActiveItem(null)}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index + 0.3 }}
                    >
                      <Typography
                        sx={{
                          color:
                            activeItem === item.label ? "#c9b49a" : "#ffffff",
                          fontWeight: 500,
                          fontSize: { xs: "0.9rem", md: "1.4rem" },
                          letterSpacing: "0.5px",
                          padding: "0.5rem 0.75rem",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {item.label}
                      </Typography>
                      <AnimatePresence>
                        {activeItem === item.label && (
                          <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "100%", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            style={{
                              height: "2px",
                              background:
                                "linear-gradient(90deg, rgba(201,180,154,0) 0%, rgba(201,180,154,1) 50%, rgba(201,180,154,0) 100%)",
                              position: "absolute",
                              bottom: "0",
                              left: "0",
                            }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </AnimatePresence>
                    </NavButton>
                  </Box>
                ))}
              </Box>

              <Box sx={{ ml: 4 }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    sx={{
                      background:
                        "linear-gradient(90deg, #c9b49a 0%, #bca486 100%)",
                      color: "#0a0f14",
                      fontWeight: 600,
                      fontSize: { xs: "0.9rem", md: "1.4rem" },
                      padding: "0.5rem 1.5rem",
                      borderRadius: "30px",
                      textTransform: "none",
                      "&:hover": {
                        boxShadow: "0 0 15px rgba(201,180,154,0.4)",
                      },
                    }}
                    onClick={handleOpen}
                  >
                    Get Started
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
                </motion.div>
              </Box>
            </>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <Box>
              <Button
                sx={{
                  color: "#c9b49a",
                  borderRadius: "50%",
                  minWidth: "auto",
                  width: "40px",
                  height: "40px",
                  padding: 0,
                  border: "1px solid rgba(201,180,154,0.3)",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect y="5" width="24" height="2" rx="1" fill="#c9b49a" />
                  <rect y="11" width="24" height="2" rx="1" fill="#c9b49a" />
                  <rect y="17" width="24" height="2" rx="1" fill="#c9b49a" />
                </svg>
              </Button>
            </Box>
          )}
        </Box>
      </Toolbar>

      {/* Decorative line */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "1px",
          background:
            "linear-gradient(90deg, rgba(201,180,154,0) 0%, rgba(201,180,154,0.5) 50%, rgba(201,180,154,0) 100%)",
        }}
      />
    </AppBar>
  );
};

export default Topbar;
