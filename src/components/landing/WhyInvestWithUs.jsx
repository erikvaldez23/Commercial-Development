import React, { useState } from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

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

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #111111 0%, #1a1a1a 100%)",
        py: 12,
        px: { xs: 2, md: 6, lg: 10 },
        color: "white",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ color: "#c9b49a", mb: 2, letterSpacing: 1 }}
        >
          Why Invest With Us
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "rgba(255,255,255,0.8)", maxWidth: 800, mx: "auto" }}
        >
          Our holistic approach blends decades of experience, global reach, and sustainable vision to deliver long-term value and impact.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {pillars.map((pillar, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(201,180,154,0.2)",
                  borderRadius: "16px",
                  padding: 4,
                  textAlign: "center",
                  height: "100%",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 0 20px rgba(201,180,154,0.08)",
                }}
              >
                <Box
                  sx={{
                    fontSize: "2.5rem",
                    mb: 2,
                    color: "#c9b49a",
                  }}
                >
                  {pillar.icon}
                </Box>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{ color: "#c9b49a", mb: 1 }}
                >
                  {pillar.title}
                </Typography>
                <Typography
                  sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}
                >
                  {pillar.description}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyInvestWithUs;