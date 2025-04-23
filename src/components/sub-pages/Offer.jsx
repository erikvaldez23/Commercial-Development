import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Button, 
  Card, 
  CardContent, 
  Tabs, 
  Tab, 
  useMediaQuery, 
  MenuItem, 
  Select, 
  FormControl, 
  IconButton, 
  Paper,
  Fade
} from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import { motion } from "framer-motion";

// Import icons from Material UI icons or other compatible icon libraries
// You would need to install @mui/icons-material package
import BuildingIcon from "@mui/icons-material/Business";
import ChartIcon from "@mui/icons-material/BarChart";
import MoneyIcon from "@mui/icons-material/AccountBalance";
import GlobeIcon from "@mui/icons-material/Public";
import PortfolioIcon from "@mui/icons-material/Description";
import TrendingIcon from "@mui/icons-material/TrendingUp";
import ShieldIcon from "@mui/icons-material/Security";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ArrowRightIcon from "@mui/icons-material/ArrowForward";

const offerings = [
  {
    title: "Institutional Real Estate Investment",
    description:
      "We structure and manage high-performance real estate portfolios across residential, industrial, commercial, and mixed-use properties.",
    icon: <BuildingIcon fontSize="large" />
  },
  {
    title: "Research-Driven Strategy",
    description:
      "Our investment approach is grounded in deep economic analysis and global trends, enabling proactive and informed decision-making.",
    icon: <ChartIcon fontSize="large" />
  },
  {
    title: "Discretionary Capital Deployment",
    description:
      "Access to significant capital allows us to swiftly pursue large-scale, high-value opportunities with confidence.",
    icon: <MoneyIcon fontSize="large" />
  },
  {
    title: "Global Reach, Local Expertise",
    description:
      "With offices in key cities, we combine global insights with local market knowledge to identify unique investment opportunities.",
    icon: <GlobeIcon fontSize="large" />
  },
  {
    title: "Customized Portfolio Management",
    description:
      "Tailored solutions for sovereign funds, pensions, and private investors that match goals, risk tolerance, and liquidity preferences.",
    icon: <PortfolioIcon fontSize="large" />
  },
  {
    title: "Development & Value-Add Strategies",
    description:
      "From ground-up development to repositioning, we enhance asset value and maximize returns.",
    icon: <TrendingIcon fontSize="large" />
  },
  {
    title: "Risk Management & Governance",
    description:
      "We apply rigorous oversight and ESG principles to mitigate risks and promote long-term sustainability.",
    icon: <ShieldIcon fontSize="large" />
  },
  {
    title: "Client Alignment",
    description:
      "With a performance-based structure and co-investment approach, your success is our success.",
    icon: <HandshakeIcon fontSize="large" />
  }
];


// Custom styled components using MUI's styled API
const GoldText = styled(Typography)(({ theme }) => ({
  color: '#c9b49a',
}));

const DarkSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#0f0f0f',
  color: 'white',
}));

const DarkerSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#080808',
  color: 'white',
}));

const GoldButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#c9b49a',
  color: '#0f0f0f',
  '&:hover': {
    backgroundColor: '#b8a389',
  },
  padding: '12px 24px',
  borderRadius: '28px',
  fontWeight: 600,
}));

const OutlinedGoldButton = styled(Button)(({ theme }) => ({
  color: '#c9b49a',
  borderColor: '#c9b49a',
  '&:hover': {
    borderColor: '#b8a389',
    backgroundColor: 'rgba(201,180,154,0.04)',
  },
  padding: '12px 24px',
  borderRadius: '28px',
  fontWeight: 600,
}));

const OfferingCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.03)',
  borderRadius: '16px',
  border: '1px solid rgba(201,180,154,0.1)',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    borderColor: 'rgba(201,180,154,0.3)',
    transform: 'translateY(-4px)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: 'rgba(255,255,255,0.7)',
  '&.Mui-selected': {
    color: '#c9b49a',
  },
  minWidth: 'unset',
  padding: '12px 18px',
}));

const StatsCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.03)',
  borderRadius: '16px',
  border: '1px solid rgba(201,180,154,0.1)',
  padding: theme.spacing(4),
  textAlign: 'center',
}));

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: '#c9b49a',
  },
});

export default function Offer() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSelectChange = (event) => {
    setActiveTab(event.target.value);
  };

  return (
    <Box sx={{ bgcolor: '#0f0f0f', color: 'white' }}>
      {/* Hero Section with 3D-like elements */}
      <Box
        sx={{
          position: 'relative',
          height: '70vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Background elements */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #121212 0%, #000000 100%)',
            zIndex: 0,
          }}
        >
          {/* Decorative blurred elements */}
          <Box 
            sx={{ 
              position: 'absolute', 
              width: '400px', 
              height: '400px', 
              borderRadius: '50%', 
              background: 'radial-gradient(circle, rgba(201,180,154,0.1) 0%, rgba(0,0,0,0) 70%)',
              filter: 'blur(60px)',
              top: '-100px',
              left: '-100px',
            }} 
          />
          <Box 
            sx={{ 
              position: 'absolute', 
              width: '500px', 
              height: '500px', 
              borderRadius: '50%', 
              background: 'radial-gradient(circle, rgba(201,180,154,0.08) 0%, rgba(0,0,0,0) 70%)',
              filter: 'blur(80px)',
              bottom: '-100px',
              right: '-100px',
            }} 
          />
        </Box>

        {/* Hero Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GoldText variant="h2" component="h1" fontWeight={700} gutterBottom>
              Strategic Investments
            </GoldText>
            <Typography variant="h3" fontWeight={700} gutterBottom sx={{ mb: 3 }}>
              for Exceptional Returns
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 800, mx: 'auto', mb: 6 }}>
              Unlocking opportunity through strategic, data-driven real estate investments tailored to deliver value and long-term performance.
            </Typography>
            
            <GoldButton 
              endIcon={<ArrowRightIcon />}
              sx={{ mt: 4 }}
            >
              Explore Our Offerings
            </GoldButton>
          </motion.div>
        </Container>

        {/* Bottom quote */}
        <Box sx={{ position: 'absolute', bottom: 80, width: '100%', textAlign: 'center', zIndex: 2 }}>
          <Container>
            <GoldText variant="h6" fontStyle="italic" gutterBottom>
              "Our vision is grounded in experience, driven by data, and inspired by opportunity."
            </GoldText>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)' }}>
              — CEO, [Company Name]
            </Typography>
          </Container>
        </Box>
      </Box>

      {/* Why Our Services Section */}
      <DarkerSection sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <GoldText variant="h3" fontWeight={700} gutterBottom>
                Why Our Services Matter
              </GoldText>
              <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 800, mx: 'auto' }}>
                In today's volatile markets, finding stable, high-return investments can be challenging. Our real estate strategies offer tangible value, long-term appreciation, and diversification across global markets—meeting the growing demand for trusted investment solutions.
              </Typography>
            </Box>
          </motion.div>

          {/* Stats Cards */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <StatsCard>
                  <GoldText variant="h3" fontWeight={700}>$25B+</GoldText>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    Assets Under Management
                  </Typography>
                </StatsCard>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <StatsCard>
                  <GoldText variant="h3" fontWeight={700}>15.7%</GoldText>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    Average Annual Return
                  </Typography>
                </StatsCard>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <StatsCard>
                  <GoldText variant="h3" fontWeight={700}>37</GoldText>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    Global Markets
                  </Typography>
                </StatsCard>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </DarkerSection>

      {/* Interactive Offerings Section with tabs */}
      <DarkSection sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <GoldText variant="h3" fontWeight={700} gutterBottom>
                Our Offerings
              </GoldText>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 700, mx: 'auto' }}>
                Comprehensive solutions designed for institutional investors seeking superior returns
              </Typography>
            </motion.div>
          </Box>

          {/* Tabs or Select based on screen size */}
          <Box sx={{ width: '100%', mb: 4 }}>
            {isMobile ? (
              <FormControl fullWidth variant="outlined" sx={{ 
                mb: 4,
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'rgba(201,180,154,0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#c9b49a',
                  },
                }
              }}>
                <Select
                  value={activeTab}
                  onChange={handleSelectChange}
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.03)',
                    '& .MuiSelect-icon': { color: '#c9b49a' }
                  }}
                >
                  {offerings.map((offering, index) => (
                    <MenuItem key={index} value={index}>{offering.title}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <Box sx={{ borderBottom: 1, borderColor: 'rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'center' }}>
                <StyledTabs 
                  value={activeTab} 
                  onChange={handleChange} 
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="offering tabs"
                >
                  {offerings.map((offering, index) => (
                    <StyledTab key={index} label={offering.title} />
                  ))}
                </StyledTabs>
              </Box>
            )}
          </Box>

          {/* Active tab content */}
          <Fade in={true} timeout={600}>
            <Paper sx={{ 
              bgcolor: 'rgba(255,255,255,0.03)', 
              borderRadius: 4,
              border: '1px solid rgba(201,180,154,0.2)',
              p: 4
            }}>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    bgcolor: 'rgba(201,180,154,0.1)',
                    color: '#c9b49a',
                    mx: 'auto'
                  }}>
                    {offerings[activeTab].icon}
                  </Box>
                </Grid>
                <Grid item xs={12} md={9}>
                  <GoldText variant="h4" fontWeight={600} gutterBottom>
                    {offerings[activeTab].title}
                  </GoldText>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3 }}>
                    {offerings[activeTab].description}
                  </Typography>
                  <Button 
                    endIcon={<ArrowRightIcon />} 
                    sx={{ 
                      color: '#c9b49a', 
                      '&:hover': { 
                        bgcolor: 'transparent', 
                        '& .MuiSvgIcon-root': { transform: 'translateX(4px)' } 
                      },
                      '& .MuiSvgIcon-root': { transition: 'transform 0.3s' }
                    }}
                  >
                    Learn more
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Fade>
        </Container>
      </DarkSection>

      {/* Card Grid Layout for All Offerings */}
      <DarkerSection sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <GoldText variant="h3" fontWeight={700} gutterBottom>
                Our Full Suite of Services
              </GoldText>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 700, mx: 'auto' }}>
                Explore our comprehensive range of investment solutions
              </Typography>
            </motion.div>
          </Box>
          
          <Grid container spacing={3}>
            {offerings.map((offering, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <OfferingCard>
                    <CardContent>
                      <Box sx={{ color: '#c9b49a', mb: 2 }}>
                        {offering.icon}
                      </Box>
                      <GoldText variant="h6" fontWeight={600} gutterBottom>
                        {offering.title}
                      </GoldText>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                        {offering.description}
                      </Typography>
                    </CardContent>
                  </OfferingCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </DarkerSection>

      {/* CTA Section */}
      <Box sx={{ 
        position: 'relative',
        py: 12,
        overflow: 'hidden'
      }}>
        {/* Background gradient and blur elements */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #0f0f0f 0%, #000000 100%)',
            zIndex: 0,
          }}
        >
          <Box 
            sx={{ 
              position: 'absolute', 
              width: '600px', 
              height: '600px', 
              borderRadius: '50%', 
              background: 'radial-gradient(circle, rgba(201,180,154,0.1) 0%, rgba(0,0,0,0) 70%)',
              filter: 'blur(100px)',
              top: '-200px',
              right: '-100px',
            }} 
          />
        </Box>

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <GoldText variant="h3" fontWeight={700} gutterBottom>
                Ready to Transform Your Investment Strategy?
              </GoldText>
              <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', mb: 6, maxWidth: 800, mx: 'auto' }}>
                Partner with us to unlock value in real estate. Let's build something lasting together.
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
                <GoldButton>
                  Schedule a Consultation
                </GoldButton>
                <OutlinedGoldButton variant="outlined">
                  View Case Studies
                </OutlinedGoldButton>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}