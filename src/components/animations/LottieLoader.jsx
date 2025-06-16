import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Box } from "@mui/material";

import animationData from "../../assets/Rizz.json";

const LottieLoader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "800px", width: "800px" }}
      />
    </Box>
  );
};

export default LottieLoader;
