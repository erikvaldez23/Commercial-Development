import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const GradientTypography = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(to right, #c9b49a, #e2c799)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

const HexagonCard = styled(motion.div)(({ theme, active }) => ({
  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  background: active
    ? "linear-gradient(135deg, rgba(201,180,154,0.15) 0%, rgba(201,180,154,0.25) 100%)"
    : "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(10px)",
  border: active
    ? "1px solid rgba(201,180,154,0.5)"
    : "1px solid rgba(255, 255, 255, 0.08)",
  height: 180,
  width: 190,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: theme.spacing(4),
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  position: "relative",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0 0 25px rgba(201,180,154,0.25)",
  },
}));

const IconHexagon = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  padding: theme.spacing(2),
}));

const PillarContent = styled(motion.div)(({ theme }) => ({
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(40px)",
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
  border: "1px solid rgba(255,255,255,0.08)",
  transition: "all 0.3s ease-in-out",
  position: "relative",
}));

const pillars = [
  { title: "Proven Track Record", description: "Over 30 years...", icon: "📈", detail: "Our historical returns..." },
  { title: "Global Expertise", description: "Our team spans...", icon: "🌐", detail: "With senior staff..." },
  { title: "Strategic Focus", description: "We invest thematically...", icon: "🔍", detail: "Our research-backed..." },
  { title: "Risk-Managed Growth", description: "Our disciplined approach...", icon: "🛡️", detail: "Each potential investment..." },
  { title: "Access to Premium Deals", description: "Our reputation...", icon: "🔑", detail: "Over 60% of our transactions..." },
  { title: "Sustainability-Centric", description: "We prioritize...", icon: "🌱", detail: "Our sustainability approach..." },
];

export default function WhyInvestWithUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedPillar, setSelectedPillar] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setSelectedPillar((prev) => (prev + 1) % pillars.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        color: "white",
        overflow: "hidden",
        bgcolor: "#111"
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
          <GradientTypography
            variant={isMobile ? "h3" : "h2"}
            fontWeight={700}
            sx={{ textTransform: "uppercase", letterSpacing: "0.05em" }}
          >
            Why Invest With Us
          </GradientTypography>

          <Divider
            sx={{
              mx: "auto",
              borderColor: "#c9b49a",
              borderWidth: 2,
              opacity: 0.8,
              width: "80px",
              my: 3,
            }}
          />

          <Typography
            variant="h6"
            sx={{
              color: "rgba(255,255,255,0.8)",
              maxWidth: 700,
              mx: "auto",
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Our holistic approach blends decades of experience, global reach, and sustainable vision to deliver long-term value and impact.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
              {pillars.map((pillar, index) => (
                <Box key={index} sx={{ m: 1 }}>
                  <HexagonCard
                    active={selectedPillar === index}
                    onClick={() => setSelectedPillar(index)}
                    whileHover={{ scale: 1.05 }}
                    animate={{
                      scale: selectedPillar === index ? 1.1 : 1,
                      y: selectedPillar === index ? -10 : 0,
                    }}
                  >
                    <IconHexagon>
                      <Typography sx={{ fontSize: "2rem", mb: 1 }}>{pillar.icon}</Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: selectedPillar === index ? "#c9b49a" : "rgba(255,255,255,0.7)",
                          fontWeight: 500,
                          textAlign: "center",
                        }}
                      >
                        {pillar.title}
                      </Typography>
                    </IconHexagon>
                  </HexagonCard>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <AnimatePresence mode="wait">
              <PillarContent
                key={selectedPillar}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h4" sx={{ color: "#c9b49a", mb: 2, fontWeight: 600 }}>
                  {pillars[selectedPillar].icon} {pillars[selectedPillar].title}
                </Typography>
                <Divider sx={{ mb: 3, background: "rgba(201,180,154,0.2)" }} />
                <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.9)", mb: 3, fontWeight: 500 }}>
                  {pillars[selectedPillar].description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.8,
                    borderLeft: "2px solid rgba(201,180,154,0.4)",
                    pl: 2,
                  }}
                >
                  {pillars[selectedPillar].detail}
                </Typography>
              </PillarContent>
            </AnimatePresence>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
