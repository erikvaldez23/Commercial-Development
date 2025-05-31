import React, { useState, useEffect } from "react";
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
  Tooltip,
  Button,
} from "@mui/material";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
  FaLeaf,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaChevronUp,
} from "react-icons/fa";
import logo from "/temp-logo.png"; // Ensure correct path
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [emailHovered, setEmailHovered] = useState(false);

  // Monitor scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click Handler for Logo
  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Footer links configuration with icons
  const footerLinks = [
    { title: "About Us", path: "/about", icon: <FaLeaf size={14} /> },
    { title: "Services", path: "/services", icon: <FaLeaf size={14} /> },
    { title: "Portfolio", path: "/portfolio", icon: <FaLeaf size={14} /> },
    { title: "Contact", path: "/contact", icon: <FaLeaf size={14} /> },
    { title: "Privacy Policy", path: "/privacy-policy", icon: <FaLeaf size={14} /> },
  ];

  // Social media links configuration
  const socialLinks = [
    { 
      icon: <FaFacebook size={isMobile ? 18 : 20} />, 
      url: "https://www.facebook.com/people/Tinttekplus/61561991193951/",
      color: "#1877F2",
      label: "Facebook"
    },
    { 
      icon: <FaInstagram size={isMobile ? 18 : 20} />, 
      url: "https://www.instagram.com/tinttekplus/",
      color: "#E4405F",
      label: "Instagram"
    },
    { 
      icon: <FaTiktok size={isMobile ? 18 : 20} />, 
      url: "https://www.tiktok.com/@tinttekplus",
      color: "#000000",
      label: "TikTok"
    },
  ];

  // Contact info with icons
  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt />,
      text: "Address,\nCity, State, Zip",
      color: "#34c759"
    },
    { 
      icon: <FaEnvelope />,
      text: "contact@greenarkinvestments.com",
      color: "#2794d2",
      isEmail: true
    },
    { 
      icon: <FaPhone />,
      text: "(555) 123-4567",
      color: "#34c759"
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: "#111",
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
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        },
        "@keyframes gradient-animation": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "200% 0%" },
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
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
              {/* Animated logo */}
              <Box
                sx={{
                  mb: 2,
                  position: "relative",
                  transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  "&:hover": { 
                    cursor: "pointer", 
                    transform: "scale(1.05)",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -10,
                    left: "25%",
                    width: "50%",
                    height: "3px",
                    background: "linear-gradient(90deg, transparent, #34c759, transparent)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  },
                  "&:hover::after": {
                    opacity: 1,
                  }
                }}
                onClick={handleLogoClick}
              >
                <img
                  src={logo}
                  alt="Green Ark Investments Logo"
                  style={{
                    height: isMobile ? "50px" : "90px",
                    filter: "invert(1) drop-shadow(0 0 3px rgba(52, 199, 89, 0.3))",
                  }}
                />
              </Box>
              
              {/* Animated tagline */}
              <Typography 
                variant="body2" 
                sx={{ 
                  mb: 3, 
                  maxWidth: "300px",
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 300,
                  lineHeight: 1.5,
                  borderLeft: "2px solid #2794d2",
                  pl: 2,
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: -1,
                    top: 0,
                    height: "0%",
                    width: "2px",
                    background: "#2794d2",
                    transition: "height 0.5s ease",
                  },
                  "&:hover::before": {
                    height: "100%",
                  }
                }}
              >
                <Box component="span" sx={{ 
                  color: "#2794d2",
                  fontWeight: 500,
                  mr: 0.5,
                }}>
                  Invest
                </Box> 
                in Sustainable Real Estate for a Greener Tomorrow
              </Typography>

              {/* Newsletter signup teaser */}
              {!isMobile && (
                <Box sx={{ 
                  mb: 3, 
                  p: 2, 
                  borderRadius: 1,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(5px)",
                  maxWidth: "90%",
                }}>
                  <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
                    Join Our Green Investment Community
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      background: "#2794d2",
                      color: "#fff",
                      "&:hover": {
                        background: "#2794d2",
                      },
                      textTransform: "none",
                      mt: 1,
                    }}
                    onClick={() => navigate("/newsletter")}
                  >
                    Subscribe to Newsletter
                  </Button>
                </Box>
              )}

              {/* Social Media Links with hover effects */}
              <Box sx={{ display: "flex", gap: 1.5 }}>
                {socialLinks.map((social, index) => (
                  <Tooltip key={index} title={social.label} arrow placement="top">
                    <IconButton
                      color="inherit"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${social.label} page`}
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.08)",
                        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        "&:hover": { 
                          backgroundColor: "rgba(255,255,255,0.15)",
                          color: social.color,
                          transform: "translateY(-5px) rotate(360deg)",
                          boxShadow: `0 5px 15px rgba(${social.color === "#1877F2" ? "24,119,242" : 
                                              social.color === "#E4405F" ? "228,64,95" : "0,0,0"}, 0.3)`,
                        },
                        p: 1.2,
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </Tooltip>
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
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -5,
                  left: 0,
                  width: isMobile ? "100%" : "40px",
                  height: "2px",
                  background: "#2794d2",
                }
              }}
            >
              Quick Links
            </Typography>
            
            <Box 
              sx={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: 1.2,
                mt: 3,
              }}
            >
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.75)",
                    transition: "all 0.25s ease",
                    fontSize: "0.95rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    "&:hover": {
                      color: "#fff",
                      transform: "translateX(8px)",
                    },
                    "&:hover .link-icon": {
                      color: "#34c759",
                      transform: "scale(1.2) rotate(360deg)",
                    }
                  }}
                >
                  <Box 
                    className="link-icon"
                    sx={{ 
                      transition: "all 0.3s ease",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {link.icon}
                  </Box>
                  {link.title}
                </Link>
              ))}
            </Box>

            {/* Certification badges */}
            {/* {!isMobile && (
              <Box sx={{ mt: 4, pt: 2, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)", mb: 1, display: "block" }}>
                  Our Certifications:
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                  {["LEED", "ENERGY STAR", "ESG"].map((cert, idx) => (
                    <Box 
                      key={idx}
                      sx={{ 
                        fontSize: "0.75rem",
                        py: 0.5,
                        px: 1.5,
                        borderRadius: 8,
                        backgroundColor: "rgba(52, 199, 89, 0.15)",
                        color: "#34c759",
                        border: "1px solid rgba(52, 199, 89, 0.3)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      <FaLeaf size={10} />
                      {cert}
                    </Box>
                  ))}
                </Box>
              </Box>
            )} */}
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
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -5,
                  left: 0,
                  width: isMobile ? "100%" : "40px",
                  height: "2px",
                  background: "#2794d2",
                }
              }}
            >
              Contact Us
            </Typography>
            
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, mt: 3 }}>
              {contactInfo.map((info, idx) => (
                <Box 
                  key={idx} 
                  sx={{ 
                    display: "flex", 
                    alignItems: info.text.includes("\n") ? "flex-start" : "center",
                    gap: 2,
                  }}
                >
                  <Box 
                    sx={{ 
                      color: "#fff",
                      background: "#2794d2",
                      p: 1,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: 36,
                      height: 36,
                    }}
                  >
                    {info.icon}
                  </Box>
                  {info.isEmail ? (
                    <Link
                      href={`mailto:${info.text}`}
                      underline="none"
                      onMouseEnter={() => setEmailHovered(true)}
                      onMouseLeave={() => setEmailHovered(false)}
                      sx={{
                        color: emailHovered ? "#2794d2" : "rgba(255,255,255,0.8)",
                        transition: "all 0.3s ease",
                        fontSize: "0.95rem",
                        fontWeight: 400,
                        textDecoration: emailHovered ? "underline" : "none",
                      }}
                    >
                      {info.text}
                    </Link>
                  ) : (
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {info.text}
                    </Typography>
                  )}
                </Box>
              ))}
              
              <Link
                href="https://greenarkinvestments.com"
                underline="none"
                sx={{
                  color: "#2794d2",
                  transition: "all 0.2s ease",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.8,
                  width: "fit-content",
                  ml: isMobile ? "auto" : 0,
                  mr: isMobile ? "auto" : 0,
                  mt: 1,
                  "&:hover": {
                    color: "#34c759",
                    gap: 1.2,
                  },
                }}
              >
                <FaGlobe size={16} />
                www.greenarkinvestments.com
              </Link>
            </Box>

            {/* Map preview */}
            {/* {!isMobile && !isMedium && (
              <Box 
                sx={{ 
                  mt: 3,
                  height: 100,
                  borderRadius: 1,
                  overflow: "hidden",
                  position: "relative",
                  "&:hover::after": {
                    opacity: 0,
                  },
                  "&::after": {
                    content: '"Click for directions"',
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,30,60,0.7)",
                    color: "#fff",
                    transition: "opacity 0.3s ease",
                    fontSize: "0.9rem",
                    opacity: 0.9,
                  }
                }}
              >
                <Box 
                  component="img"
                  src="/api/placeholder/400/100"
                  alt="Office location map preview"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            )} */}
          </Grid>
        </Grid>

        <Divider 
          sx={{ 
            my: 4, 
            borderColor: "rgba(255,255,255,0.08)",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: 80,
              height: 1,
              background: "linear-gradient(90deg, #2794d2, #34c759)",
            }
          }} 
        />
        
        {/* Copyright Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.5)",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            © {currentYear} Green Ark Investments. All rights reserved.
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.5)",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <FaLeaf size={12} style={{ color: "#34c759" }} />
            Action Quote
          </Typography>
        </Box>
      </Container>

      {/* Scroll to top button */}
      <IconButton
        onClick={scrollToTop}
        sx={{
          position: "absolute",
          right: 20,
          bottom: showScrollTop ? 20 : -60,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          borderRadius: "50%",
          color: "#c9b49a",
          transition: "all 0.3s ease",
          opacity: showScrollTop ? 1 : 0,
          "&:hover": {
            backgroundColor: "rgba(52, 199, 89, 0.2)",
            transform: "translateY(-5px)",
          }
        }}
      >
        <FaChevronUp />
      </IconButton>
    </Box>
  );
};

export default Footer;
