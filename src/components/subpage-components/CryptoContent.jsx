import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { TrendingUp, HowToVote, Insights } from '@mui/icons-material';

const CryptoContent = () => {
  const features = [
    {
      title: "Fractional Ownership",
      description: "Own a piece of every Green Ark asset you believe in.",
      icon: <TrendingUp sx={{ fontSize: 48 }} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      title: "Governance Voting",
      description: "Shape the future of Ark through community decisions.",
      icon: <HowToVote sx={{ fontSize: 48 }} />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      title: "ESG Rewards + ArkOS Insights",
      description: "Earn sustainability rewards & gain exclusive insights.",
      icon: <Insights sx={{ fontSize: 48 }} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)',
        minHeight: '100vh',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              background: 'linear-gradient(45deg, #fff, #a8edea)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Unlock the Future
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Experience next-generation features designed for sustainable investing
          </Typography>
        </Box>

        {/* Features Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
            mt: 6,
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                p: 4,
                borderRadius: 3,
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                color: '#fff',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: feature.gradient,
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                },
                '&:hover': {
                  transform: 'translateY(-8px)',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: `
                    0 20px 40px rgba(0, 0, 0, 0.4),
                    0 10px 20px rgba(0, 0, 0, 0.2)
                  `,
                  '&::before': {
                    transform: 'scaleX(1)',
                  },
                  '& .feature-icon': {
                    transform: 'scale(1.1) rotate(5deg)',
                  },
                  '& .feature-title': {
                    background: feature.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }
                },
              }}
            >
              {/* Icon */}
              <Box
                className="feature-icon"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 3,
                  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '& svg': {
                    background: feature.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                  }
                }}
              >
                {feature.icon}
              </Box>

              {/* Title */}
              <Typography
                className="feature-title"
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                }}
              >
                {feature.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.6,
                  fontSize: '1.1rem',
                }}
              >
                {feature.description}
              </Typography>

              {/* Subtle glow effect */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -2,
                  right: -2,
                  width: 60,
                  height: 60,
                  background: feature.gradient,
                  borderRadius: '50%',
                  opacity: 0.1,
                  filter: 'blur(20px)',
                  transition: 'opacity 0.4s ease',
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Bottom CTA Section */}
        <Box
          sx={{
            textAlign: 'center',
            mt: 8,
            p: 4,
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 2,
            }}
          >
            Ready to join the Green Revolution?
          </Typography>
          <Box
            sx={{
              display: 'inline-block',
              px: 4,
              py: 2,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: 2,
              color: 'white',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 20px rgba(102, 126, 234, 0.4)',
              }
            }}
          >
            Get Started Today
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CryptoContent;