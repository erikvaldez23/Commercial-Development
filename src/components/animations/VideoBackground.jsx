import React from "react";
import { Box } from "@mui/material";

export default function VideoBackground() {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
        }}
      >
        <source src="/output.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
}
