import React from "react";
import {
  Box,
  Typography,
  Container,
  IconButton,
  Divider,
  Link,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import logo from "/temp-logo.png"; // Ensure correct path
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const currentYear = new Date().getFullYear();

  // Click Handler for Logo
  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  // Footer links configuration
  const footerLinks = [
    { title: "About Us", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "Contact", path: "/contact" },
    { title: "Privacy Policy", path: "/privacy-policy" },
  ];

  // Social media links configuration
  const socialLinks = [
    { 
      icon: <FaFacebook size={isMobile ? 20 : 22} />, 
      url: "https://www.facebook.com/people/Tinttekplus/61561991193951/",
      color: "#1877F2" 
    },
    { 
      icon: <FaInstagram size={isMobile ? 20 : 22} />, 
      url: "https://www.instagram.com/tinttekplus/",
      color: "#E4405F" 
    },
    { 
      icon: <FaTiktok size={isMobile ? 20 : 22} />, 
      url: "https://www.tiktok.com/@tinttekplus",
      color: "#000000" 
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: "transparent",
        color: "#f5f5f5",
        pt: isMobile ? 6 : 8,
        pb: isMobile ? 4 : 5,
        position: "relative",
        overflow: "hidden",
        // "&::before": {
        //   content: '""',
        //   position: "absolute",
        //   top: 0,
        //   left: 0,
        //   right: 0,
        //   height: "4px",
        //   background: "linear-gradient(90deg, #2794d2, #34c759, #2794d2)",
        //   backgroundSize: "200% 100%",
        //   animation: "gradient-animation 6s linear infinite",
        // },
        // "@keyframes gradient-animation": {
        //   "0%": { backgroundPosition: "0% 0%" },
        //   "100%": { backgroundPosition: "200% 0%" },
        // },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Tagline Column */}
          <Grid item xs={12} md={4} sx={{ textAlign: isMobile ? "center" : "left" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "center" : "flex-start",
              }}
            >
              {/* Logo with click functionality */}
              <Box
                sx={{
                  mb: 2,
                  transition: "transform 0.3s ease",
                  "&:hover": { cursor: "pointer", transform: "scale(1.03)" },
                }}
                onClick={handleLogoClick}
              >
                <img
                  src={logo}
                  alt="Green Ark Investments Logo"
                  style={{
                    height: isMobile ? "50px" : "90px",
                    filter: "invert(1)",
                  }}
                />
              </Box>
              
              {/* Tagline */}
              <Typography 
                variant="body2" 
                sx={{ 
                  mb: 3, 
                  maxWidth: "300px",
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 300,
                  lineHeight: 1.5
                }}
              >
                Invest in Sustainable Real Estate
              </Typography>

              {/* Social Media Links */}
              <Box sx={{ display: "flex", gap: 1.5 }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    color="inherit"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.url.split('.com/')[1]} page`}
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      transition: "all 0.3s ease",
                      "&:hover": { 
                        backgroundColor: "rgba(255,255,255,0.15)",
                        color: social.color,
                        transform: "translateY(-3px)"
                      },
                      p: 1.2,
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Navigation Links Column */}
          <Grid item xs={12} md={4} sx={{ textAlign: isMobile ? "center" : "left" }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                mb: 2.5, 
                fontWeight: 600,
                fontSize: "1.1rem",
                letterSpacing: 0.5,
              }}
            >
              Quick Links
            </Typography>
            
            <Box 
              sx={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: 1.5 
              }}
            >
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    transition: "all 0.2s ease",
                    fontSize: "0.95rem",
                    display: "inline-block",
                    "&:hover": {
                      color: "#fff",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Information Column */}
          <Grid item xs={12} md={4} sx={{ textAlign: isMobile ? "center" : "left" }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                mb: 2.5, 
                fontWeight: 600,
                fontSize: "1.1rem",
                letterSpacing: 0.5,
              }}
            >
              Contact Us
            </Typography>
            
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                }}
              >
                Address<br />
                City, State Zip<br />
                Email<br />
                Phone Number
              </Typography>
              
              <Link
                href="https://greenarkinvestments.com"
                underline="none"
                sx={{
                  color: "#2794d2",
                  transition: "all 0.2s ease",
                  fontWeight: 500,
                  "&:hover": {
                    color: "#34c759",
                  },
                }}
              >
                www.greenarkinvestments.com
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mt: 5, mb: 3 }} />
        
        {/* Copyright Section */}
        <Box
          sx={{
            textAlign: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            © {currentYear} Green Ark Investments. All rights reserved.
          </Typography>
          
          {/* <Typography
            variant="body2"
            sx={{
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Designed with sustainability in mind
          </Typography> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;