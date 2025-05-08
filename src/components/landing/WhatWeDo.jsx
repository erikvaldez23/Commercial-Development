import React from "react";
import { Box, Typography, Grid, Container, Divider } from "@mui/material";

const items = [
  {
    title: "Smart Cities",
    description: "Designed with AI, powered by purpose.",
    icon: "/Commercial-Development/icons/smart.png",
  },
  {
    title: "Mixed-Use Towers",
    description: "Modular, efficient, connected.",
    icon: "/Commercial-Development/icons/towers.png",
  },
  {
    title: "Eco Communities",
    description: "Off-grid carbon aware. Future ready.",
    icon: "/Commercial-Development/icons/communities.png",
  },
  {
    title: "Regenerative Projects",
    description: "Built to give back more than they take.",
    icon: "/Commercial-Development/icons/projects.png",
  },
];



const WhatWeDo = () => {
  return (
    <Box sx={{ backgroundColor: "#0a0a0a", py: 10, color: "#e2c799" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            letterSpacing: 1,
            color: "#d6b88a",
            mb: 6,
            fontWeight: 500,
          }}
        >
          WHAT WE BUILD
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    mb: 2,
                    color: "#e2c799",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img src={item.icon} alt={item.title} style={{ width: 100, height: 100 }} />

                </Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, mb: 1, color: "#fff" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#ccc", maxWidth: "220px", mx: "auto" }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{
          mt: 5,
          mb: 5,
          background: "#c9b49a",
          width: "100%", 
          mx: 'auto'
        }}/>

          
        <Typography
          variant="h4"
          align="center"
          sx={{
            color: "#bfae90",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          The future is vertical, smart, and rooted in purpose.
        </Typography>
      </Container>
    </Box>
  );
};

export default WhatWeDo;
