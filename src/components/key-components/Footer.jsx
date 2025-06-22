import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  Container,
  Divider,
  Stack,
  useTheme,
  alpha,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Apple-inspired styled components
const StyledFooterBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(180deg, 
    rgba(0, 0, 0, 0.95) 0%, 
    rgba(10, 10, 10, 0.98) 100%)`,
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: `linear-gradient(90deg, 
      transparent 0%, 
      ${alpha("#ffffff", 0.1)} 50%, 
      transparent 100%)`,
  },
}));

const StyledBrandText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(180deg, 
    #ffffff 0%, 
    rgba(255, 255, 255, 0.8) 100%)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
  fontWeight: 700,
  letterSpacing: "-0.05em",
  position: "relative",
  transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  "&:hover": {
    transform: "scale(1.02)",
    filter: "brightness(1.1)",
  },
}));

const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.9)",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
  fontWeight: 600,
  fontSize: "1.5rem",
  letterSpacing: "0.3px",
  textTransform: "none",
  marginBottom: theme.spacing(2),
  position: "relative",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.7)",
  textDecoration: "none",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: 1.6,
  transition: "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  position: "relative",
  cursor: "pointer",
  "&:hover": {
    color: "rgba(255, 255, 255, 1)",
    textDecoration: "none",
    transform: "translateY(-1px)",
  },
  "&:active": {
    transform: "translateY(0px)",
    transition: "all 0.1s ease",
  },
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.08)",
  height: "1px",
  border: "none",
  margin: theme.spacing(4, 0, 3, 0),
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.5)",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
  fontSize: "11px",
  fontWeight: 400,
  letterSpacing: "0.2px",
  lineHeight: 1.5,
}));

const footerLinks = [
  {
    title: "Products",
    links: [
      { text: "Green Solutions", href: "#" },
      { text: "Sustainability Tools", href: "#" },
      { text: "Carbon Tracking", href: "#" },
      { text: "Eco Analytics", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { text: "Consulting", href: "#" },
      { text: "Implementation", href: "#" },
      { text: "Support", href: "#" },
      { text: "Training", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Press", href: "#" },
      { text: "Contact", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { text: "Twitter", href: "#" },
      { text: "LinkedIn", href: "#" },
      { text: "Instagram", href: "#" },
      { text: "Newsletter", href: "#" },
    ],
  },
];

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledFooterBox
      sx={{
        py: { xs: 6, md: 8 },
        minHeight: { xs: "auto", md: "70vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        {/* Brand Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <StyledBrandText
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", sm: "4rem", md: "6rem", lg: "8rem" },
              mb: 2,
            }}
          >
            GREEN ARK
          </StyledBrandText>
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: { xs: "14px", md: "16px" },
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 300,
              letterSpacing: "0.3px",
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Pioneering sustainable solutions for a better tomorrow
          </Typography>
        </Box>

        {/* Links Grid */}
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          justifyContent="center"
          sx={{ mb: { xs: 4, md: 6 } }}
        >
          {footerLinks.map((section, idx) => (
            <Grid
              item
              xs={6}
              sm={3}
              key={idx}
              sx={{
                display: "flex",
                justifyContent: "center",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${
                  idx * 0.1
                }s`,
              }}
            >
              <Box sx={{ textAlign: "left" }}>
                <StyledSectionTitle>{section.title}</StyledSectionTitle>
                <Stack spacing={1.5}>
                  {section.links.map(({ text, href }, index) => (
                    <StyledLink
                      key={index}
                      href={href}
                      sx={{ fontSize: "1rem" }}
                    >
                      {text}
                    </StyledLink>
                  ))}
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>

        <StyledDivider />

        {/* Copyright */}
        <Box sx={{ textAlign: "center" }}>
          <CopyrightText>
            Copyright © 2025 Green Ark Inc. All rights reserved.
          </CopyrightText>
          <Box sx={{ mt: 1 }}>
            <StyledLink href="#" sx={{ mr: 3 }}>
              Privacy Policy
            </StyledLink>
            <StyledLink href="#" sx={{ mr: 3 }}>
              Terms of Service
            </StyledLink>
            <StyledLink href="#">Legal</StyledLink>
          </Box>
        </Box>
      </Container>
    </StyledFooterBox>
  );
};

export default Footer;
