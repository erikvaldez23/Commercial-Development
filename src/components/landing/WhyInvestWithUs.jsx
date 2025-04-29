import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
  Container,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import StarryBackground from "../reusable-components/StarryBackground";

// Styled components
const GradientTypography = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(to right, #c9b49a, #e2c799)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
}));

const PillarCard = styled(Paper)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.04)",
  backdropFilter: "blur(20px) saturate(180%)", 
  WebkitBackdropFilter: "blur(20px) saturate(180%)", 
  boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.37)`, 
  border: `1px solid rgba(255, 255, 255, 0.18)`, 
  borderRadius: "20px",
  padding: theme.spacing(3),
  height: "100%",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 15px 30px rgba(0,0,0,0.2), 0 0 20px rgba(201,180,154,0.1)",
    borderColor: "rgba(201,180,154,0.3)",
  },
}));

const IconAvatar = styled(Avatar)(({ theme }) => ({
  background:
    "linear-gradient(45deg, rgba(201,180,154,0.2) 0%, rgba(201,180,154,0.1) 100%)",
  width: theme.spacing(7),
  height: theme.spacing(7),
  marginBottom: theme.spacing(2),
  fontSize: theme.spacing(3),
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  border: "1px solid rgba(201,180,154,0.2)",
}));

const pillars = [
  {
    title: "Proven Track Record",
    description:
      "Over 30 years of real estate investment experience, delivering consistent returns across economic cycles.",
    icon: "📈",
  },
  {
    title: "Global Expertise",
    description:
      "Our team spans 12 international offices, giving us unmatched insight and access to global opportunities.",
    icon: "🌐",
  },
  {
    title: "Strategic Focus",
    description:
      "We invest thematically in regions and sectors where we see outsized growth potential and long-term trends.",
    icon: "🔍",
  },
  {
    title: "Risk-Managed Growth",
    description:
      "Our disciplined approach allows us to optimize return while minimizing exposure through rigorous due diligence.",
    icon: "🛡️",
  },
  {
    title: "Access to Premium Deals",
    description:
      "Our reputation and scale give us exclusive access to off-market deals and large-scale investment opportunities.",
    icon: "🔑",
  },
  {
    title: "Sustainability-Centric",
    description:
      "We prioritize environmental responsibility and community value in every development and acquisition.",
    icon: "🌱",
  },
];

const WhyInvestWithUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isMedium = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      sx={{
        position: "relative",
        background: "transparent",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      {/* <StarryBackground /> */}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header section */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
          <GradientTypography
            variant={isMobile ? "h3" : "h2"}
            fontWeight={700}
            mb={2}
          >
            Why Invest With Us
          </GradientTypography>

          <Box
            sx={{
              mx: "auto",
              width: 60,
              height: 3,
              mb: 3,
              background:
                "linear-gradient(to right, rgba(201,180,154,0.8), rgba(201,180,154,0.2))",
              borderRadius: 2,
            }}
          />

          <Typography
            variant="h6"
            sx={{
              color: "rgba(255,255,255,0.8)",
              maxWidth: 800,
              mx: "auto",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Our holistic approach blends decades of experience, global reach,
            and sustainable vision to deliver long-term value and impact.
          </Typography>
        </Box>

        {/* Pillars grid */}
        <Grid container spacing={4} justifyContent="center">
          {pillars.map((pillar, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <PillarCard elevation={0}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: isMedium ? "row" : "column",
                      alignItems: isMedium ? "flex-start" : "center",
                    }}
                  >
                    <IconAvatar sx={{ mr: isMedium ? 2 : 0 }}>
                      {pillar.icon}
                    </IconAvatar>

                    <Box sx={{ textAlign: isMedium ? "left" : "center" }}>
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        sx={{
                          color: "#c9b49a",
                          mb: 1.5,
                          letterSpacing: 0.5,
                          fontSize: { xs: "1.1rem", md: "1.25rem" },
                        }}
                      >
                        {pillar.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.7)",
                          lineHeight: 1.7,
                          fontSize: { xs: "0.95rem", md: "1rem" },
                        }}
                      >
                        {pillar.description}
                      </Typography>
                    </Box>
                  </Box>
                </PillarCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyInvestWithUs;
