import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Conviction",
    content:
      "Our vast portfolio provides us with proprietary information across every major real estate asset class in virtually every major market around the world, allowing us to identify themes and invest capital with conviction.",
  },
  {
    title: "Connectivity",
    content:
      "Our people are our advantage. Our team of nearly 900 real estate professionals across 12 offices operates as one globally integrated business, allowing us to identify the opportunities and limits of each potential transaction through one investment review process.",
  },
  {
    title: "Scale",
    content:
      "Scale is one of our greatest strengths. The breadth of our existing portfolio gives us differentiated perspectives across sectors and geographies, while our significant discretionary capital base enables us to execute large and complex transactions.",
  },
];

const WhatWeDo = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #0f0f0f, #1a1a1a)",
        py: 12,
        px: { xs: 3, md: 10 },
        color: "white",
      }}
    >
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          textAlign="center"
          color="#00ffb4"
          sx={{ mb: 2 }}
        >
          WHAT WE DO
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          sx={{ maxWidth: 800, mx: "auto", color: "rgba(255,255,255,0.8)", mb: 6 }}
        >
          We invest thematically in high-quality assets, focusing where we see outsized growth
          potential driven by global economic and demographic trends.
        </Typography>
      </motion.div>

      {/* Animated 3-Column Section */}
      <Grid container spacing={6}>
        {sections.map((item, i) => (
          <Grid key={i} item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              style={{
                border: "1px solid rgba(0,255,180,0.2)",
                borderRadius: "16px",
                padding: "2rem",
                background: "rgba(255,255,255,0.02)",
                boxShadow: "0 0 24px rgba(0,255,180,0.1)",
                height: "100%",
              }}
            >
              <Typography
                variant="h5"
                fontWeight={600}
                color="#00ffb4"
                gutterBottom
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
                {item.content}
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Divider */}
      <Divider
        sx={{
          borderColor: "rgba(255,255,255,0.1)",
          my: 8,
          width: "60%",
          mx: "auto",
        }}
      />

      {/* Final Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}
      >
        <Typography variant="h4" fontWeight={700} color="#00ffb4" gutterBottom>
          OUR STRATEGIES
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "rgba(255,255,255,0.8)",
            fontWeight: 400,
            lineHeight: 1.7,
            fontSize: { xs: "1rem", md: "1.2rem" },
          }}
        >
          We have invested successfully through all market cycles and across the entire risk
          spectrum. Since we started investing in real estate in 1991, the growth of our business
          across both products and geographies has expanded our ability to provide practical and
          diverse solutions to our limited partners.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default WhatWeDo;
