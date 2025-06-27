import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Paper,
  useMediaQuery,
  alpha,
} from "@mui/material";
import {
  Business,
  TrendingUp,
  ShowChart,
  Apartment,
  LinkedIn,
  Twitter,
  Mail,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import CallToAction from "../key-components/CallToAction";

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
            delay: Math.random() * 5,
          }}
        />
      ))}
    </Box>
  );
};

const primaryColor = "#c9b49a";
const darkPaper = "#1E1E1E";
const accentColor = "#7928ca";

export default function AboutUs() {
  const isMobile = useMediaQuery("(max-width:600px)");

  const teamMembers = [
    {
      name: "Team Member",
      position: "Chief Executive Officer",
      image: "/api/placeholder/150/150",
      bio: "Bio",
    },
    {
      name: "Team Member",
      position: "Chief Investment Officer",
      image: "/api/placeholder/150/150",
      bio: "Bio",
    },
    {
      name: "Team Member",
      position: "Head of Operations",
      image: "/api/placeholder/150/150",
      bio: "Bio",
    },
    {
      name: "Team Member",
      position: "Director of Acquisitions",
      image: "/api/placeholder/150/150",
      bio: "Bio",
    },
  ];

  const values = [
    {
      icon: <TrendingUp style={{ fontSize: 48, color: primaryColor }} />,
      title: "Strategic Growth",
      description:
        "We pursue calculated expansion opportunities that deliver sustainable returns for our investors and partners.",
    },
    {
      icon: <ShowChart style={{ fontSize: 48, color: primaryColor }} />,
      title: "Market Intelligence",
      description:
        "Our decisions are backed by comprehensive market research and deep industry knowledge.",
    },
    {
      icon: <Business style={{ fontSize: 48, color: primaryColor }} />,
      title: "Integrity",
      description:
        "We uphold the highest standards of transparency and ethical practices in all our business dealings.",
    },
    {
      icon: <Apartment style={{ fontSize: 48, color: primaryColor }} />,
      title: "Innovation",
      description:
        "We embrace forward-thinking approaches to property development and asset management.",
    },
  ];

  return (
    <Box sx={{ background: "#000", color: "white", minHeight: "100vh", pb: 10 }}>
      <FloatingParticles />

      {/* Hero Section */}
      <Box
        sx={{
          height: isMobile ? "50vh" : "70vh",
          position: "relative",
          mb: 8,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: isMobile ? "100%" : "60%" }}>
            <Typography
              variant="overline"
              sx={{
                color: primaryColor,
                fontWeight: 600,
                letterSpacing: 3,
              }}
            >
              ABOUT US
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: isMobile ? "2.5rem" : "3.5rem",
                textTransform: "uppercase",
              }}
            >
              We’re not just developers. We’re system designers for the next century.
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: 300, mb: 4, opacity: 0.9 }}
            >
              Premier commercial real estate investment company with a focus
              on high-value properties in emerging markets.
            </Typography>
            <Box sx={{ width: "100px", height: "4px", bgcolor: primaryColor }} />
          </Box>
        </Container>
      </Box>

      {/* Vision Section */}
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" sx={{ mb: 12 }}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: primaryColor,
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  mb: 1,
                  display: "block",
                }}
              >
                THE FUTURE IS NOW
              </Typography>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2rem", md: "4rem" },
                  background: `linear-gradient(135deg, #fff, ${primaryColor})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 4,
                }}
              >
                OUR MISSION
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 3,
                    background: `linear-gradient(to right, ${primaryColor}, ${accentColor})`,
                    borderRadius: 3,
                    mr: 2,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: alpha(primaryColor, 0.8), fontWeight: 500 }}
                >
                  PIONEERING THE NEXT WAVE
                </Typography>
              </Box>
              <Typography
                paragraph
                sx={{ fontSize: "1.5rem", lineHeight: 1.7, color: alpha("#fff", 0.87) }}
              >
                To create high-impact, intelligent, and globally connected developments that are sustainable, data-driven, and community-first.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={10}
              sx={{
                bgcolor: darkPaper,
                borderRadius: 3,
                overflow: "hidden",
                position: "relative",
                height: "450px",
              }}
            >
              <Box
                component="img"
                src="/Commercial-Development/city.jpg"
                alt="Modern office building"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "contrast(1.1) brightness(0.9)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  background: `linear-gradient(transparent, ${alpha(darkPaper, 0.9)})`,
                  p: 3,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={600}
                  color={primaryColor}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "&::before": {
                      content: '""',
                      display: "inline-block",
                      width: "15px",
                      height: "2px",
                      bgcolor: primaryColor,
                      mr: 2,
                    },
                  }}
                >
                  Excellence in Every Investment
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: alpha("#fff", 0.7), mt: 1 }}
                >
                  Pioneering sustainable solutions for tomorrow's challenges
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Core Values */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 6,
              position: "relative",
              "&:after": {
                content: '""',
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "60px",
                height: "3px",
                bgcolor: primaryColor,
              },
            }}
          >
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    bgcolor: darkPaper,
                    borderRadius: 2,
                  }}
                >
                  {value.icon}
                  <Typography
                    variant="h6"
                    sx={{ my: 2, fontWeight: 600, color: primaryColor }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Leadership Team */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 6,
              position: "relative",
              "&:after": {
                content: '""',
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "60px",
                height: "3px",
                bgcolor: primaryColor,
              },
            }}
          >
            Leadership Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    bgcolor: darkPaper,
                    height: "100%",
                  }}
                >
                  <Box sx={{ position: "relative", pt: "100%" }}>
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: 0,
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color={primaryColor}
                      gutterBottom
                    >
                      {member.position}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255,255,255,0.7)", mb: 2 }}
                    >
                      {member.bio}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <IconButton
                        size="small"
                        sx={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        <LinkedIn fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        sx={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        <Twitter fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        sx={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        <Mail fontSize="small" />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <CallToAction />
    </Box>
  );
}
