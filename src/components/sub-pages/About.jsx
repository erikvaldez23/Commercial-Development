import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Avatar, 
  IconButton,
  Divider,
  Paper,
  Fade,
  useMediaQuery
} from '@mui/material';
import { 
  Business, 
  TrendingUp, 
  ShowChart, 
  Apartment,
  LinkedIn,
  Twitter,
  Mail,
  LocationOn,
  Phone,
  AccessTime 
} from '@mui/icons-material';
import CTA from "../subpage-components/CTA"
import AboutVideo from "../animations/AboutVideo"

// Company color
const primaryColor = "#c9b49a";
const darkBg = "#121212";
const darkPaper = "#1E1E1E";
const darkerGray = "#333333";

export default function AboutUs() {
  const [loaded, setLoaded] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Animation for elements appearing on scroll
  const [visible, setVisible] = useState({
    team: false,
    values: false,
    history: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const teamSection = document.getElementById('team-section');
      const valuesSection = document.getElementById('values-section');
      const historySection = document.getElementById('history-section');
      
      if (teamSection && window.scrollY > teamSection.offsetTop - 500) {
        setVisible(prev => ({ ...prev, team: true }));
      }
      
      if (valuesSection && window.scrollY > valuesSection.offsetTop - 500) {
        setVisible(prev => ({ ...prev, values: true }));
      }
      
      if (historySection && window.scrollY > historySection.offsetTop - 500) {
        setVisible(prev => ({ ...prev, history: true }));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: "Team Member",
      position: "Chief Executive Officer",
      image: "/api/placeholder/150/150",
      bio: "Bio",
    },
    {
      name: "Team Member",
      position: "Chief Investment Officer",
      image: "/api/placeholder/150/150",
      bio: "Bio",
    },
    {
      name: "Team Member",
      position: "Head of Operations",
      image: "/api/placeholder/150/150",
      bio: "Bio",
    },
    {
      name: "Team Member",
      position: "Director of Acquisitions",
      image: "/api/placeholder/150/150",
      bio: "Bio",
    }
  ];

  // Company values
  const values = [
    {
      icon: <TrendingUp style={{ fontSize: 48, color: primaryColor }} />,
      title: "Strategic Growth",
      description: "We pursue calculated expansion opportunities that deliver sustainable returns for our investors and partners."
    },
    {
      icon: <ShowChart style={{ fontSize: 48, color: primaryColor }} />,
      title: "Market Intelligence",
      description: "Our decisions are backed by comprehensive market research and deep industry knowledge."
    },
    {
      icon: <Business style={{ fontSize: 48, color: primaryColor }} />,
      title: "Integrity",
      description: "We uphold the highest standards of transparency and ethical practices in all our business dealings."
    },
    {
      icon: <Apartment style={{ fontSize: 48, color: primaryColor }} />,
      title: "Innovation",
      description: "We embrace forward-thinking approaches to property development and asset management."
    }
  ];

  return (
    <Box sx={{ 
      background: 'transparent', 
      color: 'white',
      minHeight: '100vh',
      pb: 10
    }}>
      {/* Hero Section */}
      <Fade in={loaded} timeout={1000}>
        <Box 
          sx={{ 
            height: isMobile ? '50vh' : '70vh', 
            position: 'relative',
            mb: 8,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <AboutVideo />
          <Container maxWidth="lg">
            <Box sx={{ maxWidth: isMobile ? '100%' : '60%' }}>
              <Typography 
                variant="overline" 
                sx={{ 
                  color: primaryColor, 
                  fontWeight: 600,
                  letterSpacing: 3
                }}
              >
                ABOUT US
              </Typography>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 2,
                  fontSize: isMobile ? '2.5rem' : '3.5rem'
                }}
              >
                Building Value Through Strategic Investments
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 300,
                  mb: 4,
                  opacity: 0.9
                }}
              >
                Premier commercial real estate investment company with a focus on high-value properties in emerging markets.
              </Typography>
              <Box 
                sx={{ 
                  width: '100px', 
                  height: '4px', 
                  bgcolor: primaryColor 
                }} 
              />
            </Box>
          </Container>
        </Box>
      </Fade>

      {/* Company Overview */}
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" sx={{ mb: 12 }}>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                fontWeight: 600,
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: 0,
                  width: '60px',
                  height: '3px',
                  bgcolor: primaryColor
                }
              }}
            >
              Our Vision
            </Typography>
            <Typography paragraph sx={{ mt: 4, fontSize: '1.1rem', lineHeight: 1.7 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis placeat, rerum fugit, eos excepturi quos sed rem quia provident sunt nam, laboriosam delectus repellat facere exercitationem sint fuga labore iste?
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus ipsa, quas voluptates, provident ea tempora dolorem totam reprehenderit eius nam odit enim asperiores maxime vel molestiae facilis necessitatibus. Non!
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni amet magnam eveniet mollitia blanditiis deleniti corporis vel impedit, illo, illum tenetur! Atque quaerat deserunt ipsa laudantium ratione? Maxime, quaerat?
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={0} 
              sx={{ 
                bgcolor: darkPaper,
                borderRadius: 2,
                overflow: 'hidden',
                position: 'relative',
                height: '400px'
              }}
            >
              <Box 
                component="img" 
                src="/city2.jpg" 
                alt="Modern office building" 
                sx={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <Box 
                sx={{ 
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  p: 3
                }}
              >
                <Typography variant="h6" fontWeight={600} color={primaryColor}>
                  Excellence in Every Investment
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Company Values */}
        <Box id="values-section" sx={{ mb: 12 }}>
          <Fade in={visible.values} timeout={1000}>
            <Box>
              <Typography 
                variant="h4" 
                align="center" 
                gutterBottom 
                sx={{ 
                  fontWeight: 600,
                  mb: 6,
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '3px',
                    bgcolor: primaryColor
                  }
                }}
              >
                Our Core Values
              </Typography>
              
              <Grid container spacing={4}>
                {values.map((value, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Paper 
                      elevation={0} 
                      sx={{ 
                        p: 4, 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        textAlign: 'center',
                        bgcolor: darkPaper,
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 12px 20px -10px rgba(201, 180, 154, 0.3)',
                        }
                      }}
                    >
                      {value.icon}
                      <Typography variant="h6" sx={{ my: 2, fontWeight: 600, color: primaryColor }}>
                        {value.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                        {value.description}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Fade>
        </Box>

        {/* Company History */}
        <Box id="history-section" sx={{ mb: 12 }}>
          <Fade in={visible.history} timeout={1000}>
            <Box>
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  fontWeight: 600,
                  mb: 6,
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: 0,
                    width: '60px',
                    height: '3px',
                    bgcolor: primaryColor
                  }
                }}
              >
                Our Journey
              </Typography>
              
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 4, 
                  bgcolor: darkPaper,
                  borderRadius: 2
                }}
              >
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ color: primaryColor, fontWeight: 600 }}>2008</Typography>
                      <Typography variant="body1" sx={{ mt: 1, color: "#fff" }}>
                        Founded as a boutique investment firm focused on distressed commercial properties in the wake of the financial crisis.
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ color: primaryColor, fontWeight: 600 }}>2012</Typography>
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        Expanded operations to include property development and asset management services, doubling our portfolio value.
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ color: primaryColor, fontWeight: 600 }}>2016</Typography>
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        Launched our first investment fund, raising $500 million in capital for strategic acquisitions in emerging urban markets.
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ color: primaryColor, fontWeight: 600 }}>2019</Typography>
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        Completed our landmark redevelopment project in downtown Atlanta, establishing our reputation for innovative urban renewal.
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ color: primaryColor, fontWeight: 600 }}>2021</Typography>
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        Expanded internationally with strategic partnerships in European and Asian markets, diversifying our global footprint.
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ color: primaryColor, fontWeight: 600 }}>Today</Typography>
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        Managing a diverse portfolio of premium commercial properties with a focus on sustainability and innovation in urban development.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Fade>
        </Box>

        {/* Team Section */}
        <Box id="team-section" sx={{ mb: 12 }}>
          <Fade in={visible.team} timeout={1000}>
            <Box>
              <Typography 
                variant="h4" 
                align="center" 
                gutterBottom 
                sx={{ 
                  fontWeight: 600,
                  mb: 6,
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '3px',
                    bgcolor: primaryColor
                  }
                }}
              >
                Leadership Team
              </Typography>
              
              <Grid container spacing={4}>
                {teamMembers.map((member, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card 
                      sx={{ 
                        bgcolor: darkPaper,
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 12px 20px -10px rgba(201, 180, 154, 0.3)',
                        }
                      }}
                    >
                      <Box sx={{ position: 'relative', pt: '100%' }}>
                        <Avatar 
                          src={member.image} 
                          alt={member.name}
                          sx={{ 
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: 0
                          }}
                        />
                      </Box>
                      <CardContent>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                          {member.name}
                        </Typography>
                        <Typography variant="subtitle1" color={primaryColor} gutterBottom>
                          {member.position}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
                          {member.bio}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                            <LinkedIn fontSize="small" />
                          </IconButton>
                          <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                            <Twitter fontSize="small" />
                          </IconButton>
                          <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                            <Mail fontSize="small" />
                          </IconButton>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Fade>
        </Box>
      </Container>
    </Box>
  );
}