import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
  Container,
  Avatar,
  IconButton,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import StarryBackground from "../reusable-components/StarryBackground";

// Styled components
const GradientTypography = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(to right, #c9b49a, #e2c799)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
}));

const HexagonCard = styled(motion.div)(({ theme, active }) => ({
  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  background: active
    ? "linear-gradient(135deg, rgba(201,180,154,0.15) 0%, rgba(201,180,154,0.25) 100%)"
    : "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
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
  overflow: "hidden",
  cursor: "pointer",
  "&:before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background:
      "radial-gradient(circle, rgba(201,180,154,0.1) 0%, transparent 60%)",
    opacity: active ? 1 : 0,
    transition: "opacity 0.5s ease",
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
  background: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(30px)",
  WebkitBackdropFilter: "blur(30px)",
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  border: "1px solid rgba(201,180,154,0.2)",
  marginTop: theme.spacing(2),
  position: "relative",
  overflow: "hidden",
  "&:after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    background:
      "linear-gradient(90deg, transparent, rgba(201,180,154,0.8), transparent)",
  },
}));

const ShineEffect = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
  transformOrigin: "0% 0%",
  animation: "shine 3s infinite",
  "@keyframes shine": {
    "0%": { transform: "translateX(-100%) translateY(-100%) rotate(45deg)" },
    "100%": { transform: "translateX(100%) translateY(100%) rotate(45deg)" },
  },
});

const pillars = [
  {
    title: "Proven Track Record",
    description:
      "Over 30 years of real estate investment experience, delivering consistent returns across economic cycles.",
    icon: "📈",
    detail:
      "Our historical returns have outperformed market benchmarks by an average of 2.7% annually since inception. We've successfully navigated through multiple market downturns while preserving capital and generating steady income for our investors.",
  },
  {
    title: "Global Expertise",
    description:
      "Our team spans 12 international offices, giving us unmatched insight and access to global opportunities.",
    icon: "🌐",
    detail:
      "With senior staff in key markets across North America, Europe, and Asia, we leverage local knowledge and global perspective. Our diverse team speaks over 15 languages and brings cultural understanding that translates to better deals and partnerships.",
  },
  {
    title: "Strategic Focus",
    description:
      "We invest thematically in regions and sectors where we see outsized growth potential and long-term trends.",
    icon: "🔍",
    detail:
      "Our research-backed approach identifies demographic shifts, technological disruptions, and economic patterns that drive our investment decisions. We focus on sectors with structural tailwinds like healthcare, logistics, and sustainable infrastructure.",
  },
  {
    title: "Risk-Managed Growth",
    description:
      "Our disciplined approach allows us to optimize return while minimizing exposure through rigorous due diligence.",
    icon: "🛡️",
    detail:
      "Each potential investment undergoes a 327-point verification process examining financial, operational, legal, and ESG factors. Our risk models stress-test assumptions against multiple scenarios, ensuring resilience in various market conditions.",
  },
  {
    title: "Access to Premium Deals",
    description:
      "Our reputation and scale give us exclusive access to off-market deals and large-scale investment opportunities.",
    icon: "🔑",
    detail:
      "Over 60% of our transactions originate from proprietary deal flow and relationships cultivated over decades. Our strong capital base allows us to move quickly on opportunities and secure favorable terms unavailable to smaller investors.",
  },
  {
    title: "Sustainability-Centric",
    description:
      "We prioritize environmental responsibility and community value in every development and acquisition.",
    icon: "🌱",
    detail:
      "Our sustainability approach goes beyond certifications to create lasting positive impact. Our properties average 37% lower energy consumption than industry standards, and our community engagement programs have supported over 200 local initiatives worldwide.",
  },
];

const WhyInvestWithUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isMedium = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const [selectedPillar, setSelectedPillar] = useState(0);

  // Auto-rotate through pillars
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedPillar((prev) => (prev + 1) % pillars.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        background: "transparent",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        color: "white",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header section with enhanced styling */}
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GradientTypography
              variant={isMobile ? "h3" : "h2"}
              fontWeight={700}
              sx={{
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                position: "relative",
                display: "inline-block",
              }}
            >
              Why Invest With Us
            </GradientTypography>

            <Divider
              component={motion.div}
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              sx={{
                mx: "auto",
                borderColor: "#c9b49a",
                borderWidth: 2,
                opacity: 0.8,
                marginY: isMobile ? 3 : 2, 
              }}
            />

            <Typography
              variant="h6"
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              sx={{
                color: "rgba(255,255,255,0.8)",
                maxWidth: 700,
                mx: "auto",
                fontWeight: 300,
                lineHeight: 1.8,
                position: "relative",
                padding: "0 30px",
              }}
            >
              Our holistic approach blends decades of experience, global reach,
              and sustainable vision to deliver long-term value and impact.
            </Typography>
          </Box>
        </Box>

        {/* Interactive hexagon pillars layout */}
        <Box sx={{ mb: 8 }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {!isSmall ? (
              <Grid item xs={12} md={5} sx={{ pr: { md: 4 } }}>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    {/* Background hexagon pattern */}
                    <Box
                      component={motion.div}
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        background: `
                          repeating-linear-gradient(
                            0deg, 
                            rgba(201,180,154,0.03) 0px, 
                            rgba(201,180,154,0.03) 1px, 
                            transparent 1px, 
                            transparent 20px
                          ),
                          repeating-linear-gradient(
                            90deg, 
                            rgba(201,180,154,0.03) 0px, 
                            rgba(201,180,154,0.03) 1px, 
                            transparent 1px, 
                            transparent 20px
                          )
                        `,
                        zIndex: 0,
                      }}
                    />

                    {pillars.map((pillar, index) => (
                      <Box
                        key={index}
                        sx={{
                          m: 1,
                          transform: `translateY(${
                            index % 2 === 0 ? "20px" : "0"
                          })`,
                        }}
                      >
                        <HexagonCard
                          active={selectedPillar === index}
                          onClick={() => setSelectedPillar(index)}
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(201,180,154,0.3)",
                          }}
                          animate={{
                            scale: selectedPillar === index ? 1.1 : 1,
                            y: selectedPillar === index ? -10 : 0,
                          }}
                        >
                          <IconHexagon>
                            <Typography
                              sx={{
                                fontSize: "2rem",
                                mb: 1,
                                filter:
                                  selectedPillar === index
                                    ? "drop-shadow(0 0 8px rgba(201,180,154,0.8))"
                                    : "none",
                              }}
                            >
                              {pillar.icon}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color:
                                  selectedPillar === index
                                    ? "#c9b49a"
                                    : "rgba(255,255,255,0.7)",
                                fontWeight: 500,
                                textAlign: "center",
                                transition: "color 0.3s ease",
                                fontSize: "0.85rem",
                              }}
                            >
                              {pillar.title}
                            </Typography>
                          </IconHexagon>
                          {selectedPillar === index && <ShineEffect />}
                        </HexagonCard>
                      </Box>
                    ))}
                  </Box>
                </motion.div>
              </Grid>
            ) : (
              // Mobile horizontal scroll for pillars
              <Grid item xs={12} sx={{ mb: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    overflowX: "auto",
                    pb: 2,
                    px: 1,
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                    "& > *": { mr: 2, flexShrink: 0 },
                  }}
                >
                  {pillars.map((pillar, index) => (
                    <HexagonCard
                      key={index}
                      active={selectedPillar === index}
                      onClick={() => setSelectedPillar(index)}
                      sx={{ width: 120, height: 120 }}
                      whileHover={{ scale: 1.05 }}
                      animate={{
                        scale: selectedPillar === index ? 1.1 : 1,
                      }}
                    >
                      <IconHexagon>
                        <Typography sx={{ fontSize: "1.8rem", mb: 1 }}>
                          {pillar.icon}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color:
                              selectedPillar === index
                                ? "#c9b49a"
                                : "rgba(255,255,255,0.7)",
                            fontWeight: 500,
                            textAlign: "center",
                            transition: "color 0.3s ease",
                            fontSize: "0.7rem",
                          }}
                        >
                          {pillar.title}
                        </Typography>
                      </IconHexagon>
                    </HexagonCard>
                  ))}
                </Box>
              </Grid>
            )}

            <Grid item xs={12} md={7}>
              <PillarContent
                key={selectedPillar}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "#c9b49a",
                    mb: 2,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "rgba(201,180,154,0.15)",
                      mr: 2,
                      fontSize: "1.5rem",
                    }}
                  >
                    {pillars[selectedPillar].icon}
                  </Box>
                  {pillars[selectedPillar].title}
                </Typography>

                <Divider
                  sx={{
                    mb: 3,
                    background: "rgba(201,180,154,0.2)",
                    "&::after": {
                      content: '""',
                      display: "block",
                      width: "60px",
                      height: "3px",
                      background: "#c9b49a",
                      mt: "-2px",
                    },
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255,255,255,0.9)",
                    mb: 3,
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    lineHeight: 1.6,
                  }}
                >
                  {pillars[selectedPillar].description}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.8,
                    position: "relative",
                    pl: 3,
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: "2px",
                      background: "rgba(201,180,154,0.4)",
                    },
                  }}
                >
                  {pillars[selectedPillar].detail}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 4,
                    pt: 2,
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "rgba(255,255,255,0.5)",
                      fontStyle: "italic",
                    }}
                  >
                    {`${selectedPillar + 1} of ${pillars.length}`}
                  </Typography>

                  <Box sx={{ display: "flex" }}>
                    {pillars.map((_, index) => (
                      <Box
                        key={index}
                        component={motion.div}
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          mx: 0.5,
                          background:
                            selectedPillar === index
                              ? "#c9b49a"
                              : "rgba(255,255,255,0.2)",
                          cursor: "pointer",
                        }}
                        onClick={() => setSelectedPillar(index)}
                        whileHover={{ scale: 1.5 }}
                      />
                    ))}
                  </Box>
                </Box>
              </PillarContent>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyInvestWithUs;
