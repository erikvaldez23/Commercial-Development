import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
  IconButton,
} from "@mui/material";
import "./App.css";

// core components
import Topbar from "./components/key-components/Topbar";
import Footer from "./components/key-components/Footer";
import LottieLoader from "./components/animations/LottieLoader";

// landing & sub-pages
import Hero from "./components/hero/Hero";
import WhatWeDo from "./components/landing/WhatWeDo";
import WhyInvestWithUs from "./components/landing/WhyInvestWithUs";
import CallToAction from "./components/key-components/CallToAction";
import Contact from "./components/key-components/Contact";
import PrivacyPolicy from "./components/sub-pages/PrivacyPolicy";
import ArkCrypto from "./components/sub-pages/Crypto";
import About from "./components/sub-pages/About";
import ArkVision from "./components/sub-pages/Vision";
import Team from "./components/sub-pages/Team";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./components/portfolio-dashboard/portfolio-sub-pages/Proejcts";
import Stakeholders from "./components/portfolio-dashboard/portfolio-sub-pages/Stakeholders";

import ArkOSDashboard from "./components/portfolio-dashboard/ArkOSDashboard";
import ArkOS from "./components/landing/ArkOS";
import ProjectsPage from "./components/portfolio-dashboard/portfolio-sub-pages/Projects2";

// theme
const theme = createTheme({
  palette: {
    primary: { main: "#c9b49a" },
  },
});

// allow scrolling-to-anchor on navigation
const ScrollHandler = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const offset = 100;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);
  return null;
};

export default function App() {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  
  const isHome = location.pathname === "/"
  const loading = !(pageLoaded && animationDone);

  const handleOpenChatbot = () => setChatbotOpen(true);
  const handleCloseChatbot = () => setChatbotOpen(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setPageLoaded(true);
      return;
    }
    const onLoad = () => setPageLoaded(true);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    const minTime = 4000;
    const timer = setTimeout(() => setAnimationDone(true), minTime);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <ScrollHandler />

        {/* Background Video */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -999,
          }}
        >
          {/* <VideoBackground /> */}
        </Box>

        {( !isHome || !loading ) && <Topbar handleOpenChatbot={handleOpenChatbot} />}

        <>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {loading ? (
                    <LottieLoader />
                  ) : (
                    <>
                      {/* <Box
                        sx={{
                          position: "fixed",
                          top: 0,
                          left: 0,
                          width: "100vw",
                          height: "100vh",
                          zIndex: 1,
                        }}
                      > */}
                        <Hero loadingDone />
                      {/* </Box> */}

                      {/* <Box sx={{ height: "100vh" }} /> */}

                      {/* <SlideUpReveal zIndex={2}> */}
                        <WhatWeDo />
                      {/* </SlideUpReveal> */}

                      {/* <SlideUpReveal zIndex={3}> */}
                        <WhyInvestWithUs />
                      {/* </SlideUpReveal> */}

                      <ArkOS />

                      {/* <SlideUpReveal zIndex={4}> */}
                        <CallToAction />
                      {/* </SlideUpReveal> */}

                      {/* <SlideUpReveal zIndex={6}> */}
                        {/* <Contact /> */}
                      {/* </SlideUpReveal> */}
                    </>
                  )}
                </>
              }
            />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/ark-crypto" element={<ArkCrypto />} />
            <Route path="/about" element={<About />} />
            <Route path="/ark-vision" element={<ArkVision />} />
            <Route path="/portfolio" element={<ArkOSDashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />


            {/* DASHBOARD SUB-PAGES */}
            <Route path="/portfolio/overview" element={<NotFound />} />
            <Route path="/portfolio/analytics" element={<NotFound />} />
            <Route path="/portfolio/buildings" element={<Projects />} />
            <Route path="/portfolio/stakeholders" element={<Stakeholders />} />
            <Route path="/portfolio/projects" element={<ProjectsPage />} />
          </Routes>

          {/* <Chatbot open={chatbotOpen} onClose={handleCloseChatbot} />

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
                  "&:hover": { backgroundColor: "#000" },
                  width: 70,
                  height: 70,
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
                }}
              >
                <ChatIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
          )} */}

          {!loading && <Footer />}
        </>
      </Router>
    </ThemeProvider>
  );
}
