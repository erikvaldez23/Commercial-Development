import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import "./App.css";
import Topbar from "./components/key-components/Topbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/key-components/Footer";
import ServicesPage from "./components/ServicesPage";
import Chatbot from "./ChatBot";
import WhatWeDo from "./components/landing/WhatWeDo";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFound from "./components/NotFound";
import CallToAction from "./components/key-components/CallToAction";
import QuickLinks from "./components/key-components/QuickLinks";
import WhyInvestWithUs from "./components/landing/WhyInvestWithUs"
import Offer from "./components/sub-pages/Offer"
import About from "./components/sub-pages/About"
import How from "./components/sub-pages/How"
import Portfolio from "./components/sub-pages/Portfolio"
import Team from "./components/sub-pages/Team"

// Theme Config
const theme = createTheme({
  palette: {
    primary: {
      main: "#c9b49a",
    },
  },
});

// Scroll Handler
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
          const offset = 100;
          const targetPosition =
            targetSection.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return null;
};

function App() {
  // ✅ Chatbot state
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const handleOpenChatbot = () => setChatbotOpen(true);
  const handleCloseChatbot = () => setChatbotOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <ScrollHandler />

        {/* ✅ Pass handleOpenChatbot to Topbar */}
        <Topbar handleOpenChatbot={handleOpenChatbot} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <WhatWeDo />
                <WhyInvestWithUs />
                <CallToAction />
                <QuickLinks />
              </>
            }
          />
          <Route path="/services/:serviceId" element={<ServicesPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/what-we-offer" element={<Offer />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<How />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot open={chatbotOpen} onClose={handleCloseChatbot} />
        {!chatbotOpen && (
          <Box
            sx={{
              position: "fixed",
              bottom: 20,
              right: 20,
              zIndex: (theme) => theme.zIndex.modal + 5,
            }}
          >
            <IconButton
              onClick={handleOpenChatbot}
              sx={{
                backgroundColor: "#c9b49a",
                color: "white",
                "&:hover": {
                  backgroundColor: "#000",
                },
                width: 70,
                height: 70,
                boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
              }}
            >
              <ChatIcon sx={{fontSize: 40}}/>
            </IconButton>
          </Box>
        )}
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
