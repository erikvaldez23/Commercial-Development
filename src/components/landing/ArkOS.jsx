import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Container,
  Fade,
  Grow,
  createTheme,
  ThemeProvider,
  keyframes,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

// Enhanced theme with Apple-inspired design
const arkosTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
      light: '#f5f5f7',
    },
    secondary: {
      main: '#007AFF',
      light: '#40e0d0',
    },
    background: {
      default: '#000000',
      paper: 'rgba(255, 255, 255, 0.02)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.6)',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
    h1: {
      fontSize: { xs: '4rem', md: '7rem' },
      fontWeight: 100,
      letterSpacing: '-0.05em',
      lineHeight: 0.9,
    },
    h2: {
      fontSize: { xs: '1.25rem', md: '1.5rem' },
      fontWeight: 300,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontSize: '0.9rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 24,
  },
});

// Animated background with floating elements
const pulseAnimation = keyframes`
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(1.1); }
`;

const BackgroundContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: '#000000',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 25% 25%, rgba(0, 122, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(64, 224, 208, 0.05) 0%, transparent 50%)',
    zIndex: 0,
  },
}));

const FloatingElement = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  filter: 'blur(40px)',
  animation: `${pulseAnimation} 4s ease-in-out infinite`,
  zIndex: 1,
}));

// Glass morphism card with enhanced hover effects
const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.02)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '0 20px 40px rgba(0, 122, 255, 0.1)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
}));

// Apple-style button with subtle animations
const AppleButton = styled(Button)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: 50,
  padding: '16px 32px',
  fontSize: '1rem',
  fontWeight: 500,
  letterSpacing: '0.01em',
  color: '#ffffff',
  textTransform: 'none',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 30px rgba(0, 122, 255, 0.2)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
    transition: 'left 0.5s',
  },
  '&:hover::before': {
    left: '100%',
  },
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 50%, rgba(64, 224, 208, 0.8) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontSize: "6rem"
}));

const IconContainer = styled(Box)(({ theme }) => ({
  fontSize: '2.5rem',
  marginBottom: theme.spacing(3),
  transition: 'transform 0.3s ease',
  '.MuiCard-root:hover &': {
    transform: 'scale(1.1)',
  },
}));

const ArkosLandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate()


  const handleRoute = () => {
    navigate("/portfolio")
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      title: 'Real-Time Overview',
      desc: 'Monitor permitting, design, and ROI for every development in your portfolio.',
      icon: '📊',
      delay: 200,
    },
    {
      title: 'Simulation Tools',
      desc: 'Activate generative AI scenarios, density projections, and ESG performance metrics.',
      icon: '🎯',
      delay: 400,
    },
    {
      title: 'Collaborative Workflow',
      desc: 'Approve layouts, provide feedback, and track milestones with stakeholders.',
      icon: '🤝',
      delay: 600,
    },
  ];

  return (
    <ThemeProvider theme={arkosTheme}>
      <BackgroundContainer>
        {/* Floating background elements */}
        <FloatingElement
          sx={{
            top: '20%',
            left: '15%',
            width: 300,
            height: 300,
            background: 'rgba(0, 122, 255, 0.1)',
            animationDelay: '0s',
          }}
        />
        <FloatingElement
          sx={{
            bottom: '20%',
            right: '15%',
            width: 400,
            height: 400,
            background: 'rgba(64, 224, 208, 0.08)',
            animationDelay: '2s',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
          <Box sx={{ textAlign: 'center' }}>
            
            {/* Hero Title */}
            <Fade in={isLoaded} timeout={800}>
              <Box sx={{ mb: 6 }}>
                <GradientText variant="h1" gutterBottom>
                  ARKOS
                </GradientText>
                <Box
                  sx={{
                    width: 100,
                    height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                    mx: 'auto',
                    mt: 3,
                  }}
                />
              </Box>
            </Fade>

            {/* Subtitle */}
            <Fade in={isLoaded} timeout={1000} style={{ transitionDelay: '200ms' }}>
              <Typography 
                variant="h2" 
                color="text.secondary" 
                sx={{ 
                  mb: 8,
                  maxWidth: 800,
                  mx: 'auto',
                  px: 2,
                }}
              >
                The operational command center for intelligent real estate projects
              </Typography>
            </Fade>

            {/* Feature Cards */}
            <Grid container spacing={4} sx={{ mb: 8 }}>
              {features.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Grow
                    in={isLoaded}
                    timeout={800}
                    style={{ transitionDelay: `${feature.delay}ms` }}
                  >
                    <GlassCard
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <CardContent sx={{ p: 0 }}>
                        <IconContainer>
                          {feature.icon}
                        </IconContainer>
                        <Typography variant="h3" gutterBottom color="primary">
                          {feature.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {feature.desc}
                        </Typography>
                      </CardContent>
                    </GlassCard>
                  </Grow>
                </Grid>
              ))}
            </Grid>

            {/* CTA Button */}
            <Fade in={isLoaded} timeout={1000} style={{ transitionDelay: '800ms' }}>
              <AppleButton
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={handleRoute}
              >
                Launch ARKOS Demo
              </AppleButton>
            </Fade>

          </Box>
        </Container>

        {/* Bottom accent line */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
          }}
        />
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default ArkosLandingPage;