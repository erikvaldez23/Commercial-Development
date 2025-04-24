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
import BuildingIcon from "@mui/icons-material/Business";
import ChartIcon from "@mui/icons-material/BarChart";
import MoneyIcon from "@mui/icons-material/AccountBalance";
import GlobeIcon from "@mui/icons-material/Public";
import PortfolioIcon from "@mui/icons-material/Description";
import TrendingIcon from "@mui/icons-material/TrendingUp";
import ShieldIcon from "@mui/icons-material/Security";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ArrowRightIcon from "@mui/icons-material/ArrowForward";
import Matter from "../subpage-components/Matter"
import Services from "../subpage-components/Services"
import Offerings from "../subpage-components/Offerings"

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
            <GoldText variant="h4" fontStyle="italic" gutterBottom>
              "Our vision is grounded in experience, driven by data, and inspired by opportunity."
            </GoldText>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', fontSize: "1.5rem" }}>
              — CEO
            </Typography>
          </Container>
        </Box>
      </Box>

      <Matter />

      <Offerings />

      <Services />

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