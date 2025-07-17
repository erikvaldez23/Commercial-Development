import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Container,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

export default function CallToAction() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
  };

  const handleGetStartedClick = () => {
    navigate("/contact")
  }

  return (
    <Box 
      sx={{ 
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background blur elements for depth */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: { xs: 200, md: 400 },
          height: { xs: 200, md: 400 },
          background: 'radial-gradient(circle, rgba(201, 180, 154, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            py: { xs: 6, md: 10 },
            gap: { xs: 8, md: 3 },
          }}
        >
          {/* Hero Section */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, maxWidth: { md: '60%' } }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                fontWeight: 700,
                color: '#ffffff',
                mb: 3,
                letterSpacing: '-0.02em',
                lineHeight: { xs: 1.2, md: 1.1 },
                background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              GET STARTED WITH <br />
              <Box component="span" sx={{ color: '#c9b49a' }}>
                GREEN ARK
              </Box>
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mb: 4,
                fontSize: { xs: '1.1rem', md: '1.4rem' },
                fontWeight: 400,
                lineHeight: 1.6,
                maxWidth: { md: '80%' },
              }}
            >
              Experience the future of sustainable technology with our innovative 
              platform designed to make a difference.
            </Typography>
            
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: 'linear-gradient(135deg, #c9b49a 0%, #b8a082 100%)',
                color: '#000',
                fontWeight: 600,
                fontSize: { xs: '1rem', md: '1.1rem' },
                borderRadius: { xs: 3, md: 4 },
                px: { xs: 4, md: 6 },
                py: { xs: 1.5, md: 2 },
                textTransform: 'none',
                boxShadow: '0 8px 32px rgba(201, 180, 154, 0.3)',
                border: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #b8a082 0%, #a6906e 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 40px rgba(201, 180, 154, 0.4)',
                },
                '&:active': {
                  transform: 'translateY(0)',
                },
              }}
              onClick={handleGetStartedClick}

            >
              Get Started
            </Button>
          </Box>

          {/* Newsletter & Footer Section */}
          <Box
            sx={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: { xs: 3, md: 4 },
              p: { xs: 4, md: 6 },
              mt: 2,
            }}
          >
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
              {/* Newsletter Section */}
              <Grid item xs={12} md={5}>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#ffffff',
                    fontWeight: 600,
                    mb: 3,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    letterSpacing: '-0.01em',
                  }}
                >
                  STAY UPDATED
                </Typography>
                
                <Box
                  component="form"
                  onSubmit={handleEmailSubmit}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                  }}
                >
                  <TextField
                    placeholder="Enter your email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: 2,
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        '&:hover': {
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                        },
                        '&.Mui-focused': {
                          borderColor: '#c9b49a',
                          boxShadow: '0 0 0 2px rgba(201, 180, 154, 0.1)',
                        },
                      },
                      '& .MuiOutlinedInput-input': {
                        padding: '12px 16px',
                        letterSpacing: "1px",
                        '&::placeholder': {
                          color: 'rgba(255, 255, 255, 0.5)',
                        },
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                      },
                    }}
                  />
                  
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(135deg, #c9b49a 0%, #b8a082 100%)',
                      color: '#000',
                      fontWeight: 600,
                      borderRadius: 2,
                      px: { xs: 4, sm: 3 },
                      py: 1.5,
                      minWidth: { xs: 'auto', sm: 120 },
                      textTransform: 'none',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 16px rgba(201, 180, 154, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #b8a082 0%, #a6906e 100%)',
                        transform: 'translateY(-1px)',
                        boxShadow: '0 6px 20px rgba(201, 180, 154, 0.4)',
                      },
                    }}
                  >
                    Sign Up
                  </Button>
                </Box>
              </Grid>

              {/* Links Section */}
              <Grid item xs={12} md={7}>
                <Grid container spacing={{ xs: 3, md: 4 }}>
                  {[
                    {
                      title: 'Company',
                      links: [
                        { label: 'About Us', path: '/about' },
                        // { label: 'Careers', path: '/careers' },
                      ],
                    },
                    {
                      title: 'Support',
                      links: [
                        // { label: 'Help Center', path: '/support' },
                        { label: 'Contact', path: '/contact' },
                      ],
                    },
                    {
                      title: 'Legal',
                      links: [
                        { label: 'Privacy Policy', path: '/privacy-policy' },
                        // { label: 'Terms of Use', path: '/terms' },
                      ],
                    },
                  ].map((section, index) => (
                    <Grid item xs={6} sm={4} key={index}>
                      <Stack spacing={2}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: '#ffffff',
                            fontWeight: 600,
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            mb: 1,
                          }}
                        >
                          {section.title}
                        </Typography>
                        
                        {section.links.map((link, linkIndex) => (
                          <Typography
                            key={linkIndex}
                            variant="body2"
                            sx={{
                              color: 'rgba(255, 255, 255, 0.7)',
                              cursor: 'pointer',
                              fontSize: { xs: '0.9rem', md: '1rem' },
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                color: '#c9b49a',
                                transform: 'translateX(4px)',
                              },
                            }}
                            onClick={() => navigate(link.path)}
                          >
                            {link.label}
                          </Typography>
                        ))}
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}