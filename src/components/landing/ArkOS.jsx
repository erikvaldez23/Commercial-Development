import React from 'react';
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
  useMediaQuery
} from '@mui/material';
import { 
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Assessment as AssessmentIcon,
  Psychology as PsychologyIcon
} from '@mui/icons-material';

const ArkOSHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      icon: <DashboardIcon />,
      text: "Real-time dashboards of every project"
    },
    {
      icon: <PeopleIcon />,
      text: "Stakeholder collaboration portals"
    },
    {
      icon: <AssessmentIcon />,
      text: "ESG tracking and permit intelligence"
    },
    {
      icon: <PsychologyIcon />,
      text: "AI alerts for risks, delays, and optimization"
    }
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#000',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 4
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          {/* Left side - Image */}
          <Grid item xs={12} md={6}>
          <Box
  sx={{
    width: '90%',
    height: 800,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundImage: 'url(/Commercial-Development/coin2.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: "drop-shadow(0 0 40px rgba(201, 180, 154, 0.4))",
  }}
/>

          </Grid>
          {/* Right side - Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: isMobile ? 0 : 4 }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  color: 'white',
                  fontWeight: 900,
                  mb: 4,
                  fontSize: { xs: '2.5rem', md: '5rem' },
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em'
                }}
              >
                ARK OS<br />
                <Box component="span" sx={{ color: '#c9b49a', fontSize: "4rem" }}>
                COMMAND THE FUTURE OF DEVELOPMENT
                </Box>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: '#b0b0b0',
                  mb: 4,
                  lineHeight: 1.6,
                  fontWeight: 400
                }}
              >
                ArkOS is the operational brain of every Green Ark project. From dashboard overviews to ESG data, stakeholder approvals to timeline risks — it's all managed in one AI-powered hub.
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  mb: 2
                }}
              >
                Key Features:
              </Typography>

              <List sx={{ p: 0 }}>
                {features.map((feature, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      px: 0,
                      py: 1,
                      '&:hover': {
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        borderRadius: 2,
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: '#ff5722',
                        minWidth: 40
                      }}
                    >
                      {feature.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={feature.text}
                      primaryTypographyProps={{
                        color: '#e0e0e0',
                        fontWeight: 600,
                        fontSize: '1.1rem'
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ArkOSHero;