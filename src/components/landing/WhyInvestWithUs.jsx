import React from "react";
import { Box, Typography } from "@mui/material";

const cities = [
  { name: "New York", top: "38%", left: "22%" },
  { name: "Lagos", top: "52%", left: "62%" },
  { name: "Dubai", top: "48%", left: "58%" },
  { name: "Vancouver", top: "32%", left: "18%" },
];

const StewardsOfSpace = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: "url('/Commercial-Development/map.jpg')", // Use your image path
        backgroundSize: "contain",
        backgroundPosition: "center",
        minHeight: "600px",
        color: "#e2c799",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        px: { xs: 3, md: 10 },
      }}
    >
      <Box sx={{ maxWidth: 500, zIndex: 2 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom sx={{ color: "#e2c799" }}>
          WE’RE NOT DEVELOPERS.<br />
          WE’RE STEWARDS OF SPACE.
        </Typography>
        <Typography variant="body1" sx={{ color: "#ccc", mt: 2, fontSize: "1.1rem" }}>
          At Green Ark, we develop with reverence, code with intention, and invest in the long-term
          vitality of people and planet.
        </Typography>
      </Box>

      {/* City markers */}
      {cities.map((city, idx) => (
        <Box
          key={idx}
          sx={{
            position: "absolute",
            top: city.top,
            left: city.left,
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
            fontSize: "0.85rem",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#e2c799",
              boxShadow: "0 0 6px #e2c799",
            }}
          />
          {city.name}
        </Box>
      ))}
    </Box>
  );
};

export default StewardsOfSpace;
