import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

export default function OceanLoader() {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#0b0c10", // deep ocean black-blue
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          border: "4px solid rgba(216, 194, 169, 0.4)", // matches your theme
          background: "radial-gradient(circle, rgba(216,194,169,0.25), transparent)",
        }}
      />
    </Box>
  );
}
