import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  useTheme,
  alpha,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled components
const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: "90vh",
background: "linear-gradient(145deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",  
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 80,
  height: 80,
  borderRadius: "50%",
  background: `linear-gradient(135deg, #00d4ff, #0066cc)`,
  marginBottom: theme.spacing(3),
  position: "relative",
  boxShadow: "0 8px 32px rgba(0, 212, 255, 0.3)",
  "&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "70%",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
  },
}));

const GlobeContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: 600,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& .globe-wrapper": {
    position: "relative",
    width: 600,
    height: 600,
    borderRadius: "50%",
    overflow: "hidden",
    boxShadow: `
      0 0 50px ${alpha("#00d4ff", 0.3)},
      inset 0 0 30px ${alpha("#00d4ff", 0.1)}
    `,
  },
  "& .globe-image": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
}));

const OrbitRing = styled(Box)(({ theme, size, duration, delay = 0 }) => ({
  position: "absolute",
  width: size,
  height: size,
  border: `1px solid ${alpha("#00d4ff", 0.3)}`,
  borderRadius: "50%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  animation: `rotate ${duration}s linear infinite`,
  animationDelay: `${delay}s`,
  "&::before": {
    content: '""',
    position: "absolute",
    top: -3,
    left: "50%",
    transform: "translateX(-50%)",
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#00d4ff",
    boxShadow: `0 0 10px #00d4ff`,
  },
  "@keyframes rotate": {
    "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
    "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
  },
}));

const AnimatedBackground = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `
    radial-gradient(circle at 20% 80%, ${alpha(
      "#00d4ff",
      0.05
    )} 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, ${alpha(
      "#0066cc",
      0.05
    )} 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, ${alpha(
      "#00d4ff",
      0.03
    )} 0%, transparent 50%)
  `,
  animation: "float 8s ease-in-out infinite",
  "@keyframes float": {
    "0%, 100%": { transform: "translateY(0px) scale(1)" },
    "50%": { transform: "translateY(-10px) scale(1.02)" },
  },
}));

const GlowingText = styled(Typography)(() => ({
  background: "linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  filter: "drop-shadow(0 0 20px rgba(0, 212, 255, 0.3))",
}));

const ArkOSComponent = () => {
  const theme = useTheme();

  return (
    <StyledContainer maxWidth={false} disableGutters>
      <AnimatedBackground />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: 8 }}>
        <Grid container spacing={6} alignItems="center" minHeight="90vh">
          {/* Left side - Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              {/* Logo */}
               <Box
                 component="img"
                 src="/Commercial-Development/greenark-logo1.png"
                 alt="Green Ark"
                 sx={{ 
                   height: "100%",
                   width: "auto",
                   maxHeight: "100%",
                   objectFit: "contain",
                   cursor: "pointer",
                   position: 'relative',
                   zIndex: 2,
                   filter: 'drop-shadow(0 0 5px rgba(201,180,154,0.3))',
                 }}
               />

              {/* Main Title */}
              <GlowingText
                variant="h1"
                sx={{
                  fontSize: { xs: "3rem", md: "4rem", lg: "5rem" },
                  fontWeight: 700,
                  mb: 2,
                  letterSpacing: "-0.02em",
                  textShadow: "0 4px 8px rgba(0,0,0,0.5)",
                }}
              >
                ARK OS
              </GlowingText>

              {/* Subtitle */}
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  color: alpha("#ffffff", 0.9),
                  fontWeight: 300,
                  lineHeight: 1.4,
                  maxWidth: { xs: "100%", md: "400px" },
                  mx: { xs: "auto", md: 0 },
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                The generative brain behind every Green Ark development.
              </Typography>

              {/* Feature highlights */}
              <Box
                sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    background: alpha("#ffffff", 0.05),
                    backdropFilter: "blur(20px)",
                    border: `1px solid ${alpha("#00d4ff", 0.3)}`,
                    borderRadius: 2,
                    p: 2,
                    display: "inline-block",
                    boxShadow: `0 8px 32px ${alpha("#00d4ff", 0.1)}`,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: alpha("#ffffff", 0.9),
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#00d4ff",
                        boxShadow: "0 0 10px #00d4ff",
                      }}
                    />
                    Powered by Advanced AI Technology
                  </Typography>
                </Paper>
              </Box>
            </Box>
          </Grid>

          {/* Right side - Globe */}
          <Grid item xs={12} md={6}>
            <GlobeContainer>
              <Box className="globe-wrapper">
                <img
                  src="/Commercial-Development/globe.avif"
                  alt="Globe"
                  className="globe-image"
                />
              </Box>
            </GlobeContainer>
          </Grid>
        </Grid>
      </Container>
    </StyledContainer>
  );
};

export default ArkOSComponent;
