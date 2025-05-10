import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function CallToAction() {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        bgcolor: "#000",
        color: "#fff",
        px: { xs: 4, md: 10 },
        py: 10,
        backgroundImage: "url('/Commercial-Development/cta-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Headline */}
      <Box sx={{ maxWidth: 800 }}>
        <Typography variant="h1" sx={{ fontWeight: "bold", mb: 2 }}>
          GET STARTED WITH CODEX IN 5 MINUTES, FOR FREE
        </Typography>
        <Typography variant="h4" sx={{ color: "#ccc", mb: 4 }}>
          Sign-up and immediately get free access to real-time and historical
          pricing, charts, and aggregates for tokens and NFTs.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#D5FF3F",
            color: "#000",
            fontWeight: 600,
            borderRadius: 2,
            px: 3,
            py: 1,
            "&:hover": {
              backgroundColor: "#dfff5f",
            },
          }}
          startIcon={<AddIcon />}
        >
          GET STARTED FREE
        </Button>
      </Box>

      {/* Footer CTA */}
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.05)", // translucent white/gray
          backdropFilter: "blur(10px)", // enables the blur effect
          WebkitBackdropFilter: "blur(10px)", // Safari support
          borderRadius: 4,
          mt: 10,
          p: 4,
          minHeight: "30vh",
          display: "flex",
          alignItems: "center",
          border: "1px solid rgba(255, 255, 255, 0.1)", // optional subtle border
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle2" sx={{ mb: 2 }}>
              STAY UP TO DATE
            </Typography>
            <Box display="flex" gap={1}>
              <TextField
                placeholder="Email address"
                variant="filled"
                fullWidth
                sx={{
                  bgcolor: "#000",
                  input: { color: "#fff" },
                  borderRadius: 1,
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#D5FF3F",
                  color: "#000",
                  fontWeight: 600,
                  px: 3,
                  "&:hover": {
                    backgroundColor: "#dfff5f",
                  },
                }}
              >
                SIGN UP
              </Button>
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Product
            </Typography>
            <Typography variant="body2" sx={{ color: "#aaa" }}>
              Pricing
              <br />
              Customers
              <br />
              Documentation
            </Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              About
            </Typography>
            <Typography variant="body2" sx={{ color: "#aaa" }}>
              Blog
              <br />
              Press Kit
              <br />
              FAQ
            </Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Twitter (X)
            </Typography>
            <Typography variant="body2" sx={{ color: "#aaa" }}>
              Discord
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
