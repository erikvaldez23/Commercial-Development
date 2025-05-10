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
        background: "#000",
      }}
    >
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
          borderRadius: 10,
        }}
      >
        {/* Headline */}
        <Box sx={{ maxWidth: 800 }}>
          <Typography variant="h1" sx={{ fontWeight: "bold", mb: 2 }}>
            GET STARTED WITH GREEN ARK
          </Typography>
          <Typography variant="h4" sx={{ color: "#ccc", mb: 4 }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            quas ex, ipsum itaque qui doloribus illo officia neque quia tenetur
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#c9b49a",
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
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
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
                    borderRadius: 5,
                  }}
                />
                <Button
                  sx={{
                    backgroundColor: "#c9b49a",
                    color: "#000",
                    fontWeight: 600,
                    px: 6,
                    borderRadius: 5,
                    "&:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
                    },
                  }}
                >
                  SIGN UP
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              container
              spacing={40}
              justifyContent="flex-end"
              marginLeft="-120px"
            >
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: "left" }}>
                  <Typography variant="h2" fontWeight={600}>
                    Company
                  </Typography>
                  <Typography variant="h4">About Us</Typography>
                  <Typography variant="h4">Careers</Typography>
                </Box>
              </Grid>

              {/* Column 2 */}
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: "left" }}>
                  <Typography variant="h2" fontWeight={600}>
                    Support
                  </Typography>
                  <Typography variant="h4">Help Center</Typography>
                  <Typography variant="h4">Contact</Typography>
                </Box>
              </Grid>

              {/* Column 3 */}
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: "left" }}>
                  <Typography variant="h2" fontWeight={600}>
                    Legal
                  </Typography>
                  <Typography variant="h4">Privacy Policy</Typography>
                  <Typography variant="h4">Terms of Use</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
