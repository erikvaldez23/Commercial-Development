import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  Chip,
  Button,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Assessment as AssessmentIcon,
  Psychology as PsychologyIcon,
  ArrowForward as ArrowForwardIcon,
  PlayArrow as PlayArrowIcon,
} from "@mui/icons-material";

const ArkOSHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const features = [
    {
      icon: <DashboardIcon />,
      text: "Real-time dashboards of every project",
      color: "#ff6b6b",
    },
    {
      icon: <PeopleIcon />,
      text: "Stakeholder collaboration portals",
      color: "#4ecdc4",
    },
    {
      icon: <AssessmentIcon />,
      text: "ESG tracking and permit intelligence",
      color: "#45b7d1",
    },
    {
      icon: <PsychologyIcon />,
      text: "AI alerts for risks, delays, and optimization",
      color: "#96ceb4",
    },
  ];

  return (
    <Box
      sx={{
        background:
          // "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
          "#000",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: 6,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 30% 40%, rgba(201, 180, 154, 0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left side - Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/Commercial-Development/coin2.png"
                alt="Ark OS Demo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "24px",
                  filter: "drop-shadow(0 0 40px rgba(201, 180, 154, 0.4))",
                }}
              />
            </Box>
          </Grid>

          {/* Right side - Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: isMobile ? 0 : 4 }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  color: "white",
                  fontWeight: 900,
                  mb: 1,
                  fontSize: { xs: "2.5rem", md: "5rem" },
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #c9b49a 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ARK OS
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  color: "#c9b49a",
                  fontWeight: 700,
                  mb: 1,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  lineHeight: 1.2,
                }}
              >
                Command the Future of Development
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#b8b8b8",
                  mb: 4,
                  lineHeight: 1.7,
                  fontWeight: 400,
                  fontSize: "1.5rem",
                }}
              >
                ArkOS is the operational brain of every Green Ark project. From
                dashboard overviews to ESG data, stakeholder approvals to
                timeline risks — it's all managed in one AI-powered hub.
              </Typography>

              {/* Action Buttons */}
              <Stack direction="row" spacing={2} sx={{ mb: 5 }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    backgroundColor: "#c9b49a",
                    color: "black",
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    textTransform: "none",
                    fontSize: "1rem",
                    boxShadow: "0 8px 25px rgba(201, 180, 154, 0.3)",
                    "&:hover": {
                      backgroundColor: "#b8a389",
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 35px rgba(201, 180, 154, 0.4)",
                    },
                    transition: "all 0.3s cubic-bezier(0.23, 1, 0.320, 1)",
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PlayArrowIcon />}
                  sx={{
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "white",
                    fontWeight: 600,
                    px: 3,
                    py: 1.5,
                    borderRadius: 3,
                    textTransform: "none",
                    fontSize: "1rem",
                    "&:hover": {
                      borderColor: "#c9b49a",
                      backgroundColor: "rgba(201, 180, 154, 0.1)",
                      transform: "translateY(-1px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Watch Demo
                </Button>
              </Stack>

              {/* Features Grid */}
              <Grid container spacing={2}>
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Card
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.03)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 20,
                        transition: "all 0.4s cubic-bezier(0.23, 1, 0.320, 1)",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.08)",
                          border: `1px solid ${feature.color}40`,
                          transform: "translateY(-4px)",
                          boxShadow: `0 12px 25px ${feature.color}20`,
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                          }}
                        >
                          <Box
                            sx={{
                              backgroundColor: `${feature.color}20`,
                              borderRadius: 2,
                              p: 1,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              minWidth: 48,
                              height: 48,
                            }}
                          >
                            <Box
                              sx={{ color: feature.color, fontSize: "1.5rem" }}
                            >
                              {feature.icon}
                            </Box>
                          </Box>
                          <Typography
                            variant="body1"
                            sx={{
                              color: "#e8e8e8",
                              fontWeight: 600,
                              lineHeight: 1.4,
                              fontSize: "0.95rem",
                            }}
                          >
                            {feature.text}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ArkOSHero;
