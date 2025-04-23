import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useMediaQuery,
} from "@mui/material";
import Contact from "./key-components/Contact";
import Topbar from "./key-components/Topbar";
import Footer from "./key-components/Footer";
import HowItWorks from "./HowItWorks";
import CallToAction from "./key-components/CallToAction";
import QuickLinks from "./key-components/QuickLinks";
import ImageCTA from "./ImageCTA";
import VideoCTA from "./VideoCTA";
import ImageCarousel from "./ImageCarousel"

// Define service details for each page
const serviceDetails = {
  "vehicle-window-tinting": {
    title: "Vehicle Window Tinting",
    description:
      "Enhance privacy, reduce glare, and protect your vehicle’s interior.",
    },

  "tesla-window-tinting": {
    title: "Tesla Window Tinting",
    description:
      "Specialized tinting for Tesla models, ensuring perfect heat rejection and premium clarity.",
  },

  "commercial-window-tinting": {
    title: "Commercial Window Tinting",
    description:
      "Protect your building's windows from UV rays, reduce glare, and improve energy efficiency.",
  },

  "residential-window-tinting": {
    title: "Residential Window Tinting",
    description:
      "Long-lasting protection for your home’s windows against dirt, heat, and UV rays.",
  },

  "vehicle-paint-correction": {
    title: "Vehicle Paint Correction",
    description:
      "Restore your vehicle’s original shine and remove imperfections with our professional paint correction services.",
  },

  "vehicle-paint-protection": {
    title: "Vehicle Paint Protection",
    description:
      "Customize and protect your vehicle’s paint with high-quality Paint Protection Film.",
  },

  "headlight-services": {
    title: "Headlight & Taillight Services",
    description:
      "Customize and protect your vehicle’s paint with high-quality wraps and protective coatings.",
  },

  "windshield-protection-film": {
    title: "Windshield Protection Film",
    description:
      "Customize and protect your vehicle’s paint with high-quality wraps and protective coatings.",
  },

  "ceramic-coating": {
    title: "Ceramic Coating",
    description:
      "Elevate Your Vehicle's Protection With Unrivaled Ceramic Coating",
  },
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];
  const isMobile = useMediaQuery("(max-width: 768px)"); // Detect mobile screens

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Handle "Service Not Found" with Full Layout
  if (!service) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Topbar notFound={true} /> {/* Topbar stays on the page */}
        {/* Main 404 Section with Max Width */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Centers the content horizontally
            alignItems: "center",
            flexGrow: 1,
            backgroundColor: "#b6c0c2",
            padding: { xs: 4, md: 8 },
            mt: { xs: "56px", md: "64px" }, // Offset for Topbar
          }}
        >
          {/* Content Container with Max Width */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "1200px", // Limit the width to 1200px
              mx: "auto", // Center the container
            }}
          >
            {/* Text Section */}
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: "center", md: "left" },
                mb: { xs: 4, md: 0 },
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "#FF6F61", fontWeight: "bold", mb: 1 }}
              >
                404
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
                Oops! I may have chewed up the power cord.
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: "#555" }}>
                Go back to our main page to continue your visit.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "25px",
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
                href="/"
              >
                Back to main page
              </Button>
            </Box>

            {/* Image Section */}
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <img
                src="/dog.jpeg" // Replace with your desired image
                alt="Dog"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Box>
        <CallToAction />
        {/* Contact Section */}
        <Box sx={{ backgroundColor: "#f9f9f9", width: "100vw" }}>
          <Contact /> {/* Keep the contact section */}
        </Box>
        {/* Footer */}
        <Footer /> {/* Keep the footer */}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* ✅ Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          paddingTop: 5,
          height: { xs: "40vh", md: "40vh" },
          backgroundColor: "#000",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
          px: { xs: 1, sm: 2, md: 2 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem", lg: "3.5rem" },
          }}
        >
          {service.title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
            fontSize: { xs: "1rem", sm: "1rem", md: "1.3rem", lg: "1.5rem" },
          }}
        >
          {service.description}
        </Typography>
      </Box>

      {(serviceId === "commercial-window-tinting" ||
      serviceId === "ceramic-coating" ||
      serviceId === "headlight-services" ||
      serviceId === "windshield-protection-film")
        && <VideoCTA />}

    {(serviceId === "vehicle-window-tinting" ||
      serviceId === "residential-window-tinting" || 
      serviceId === "vehicle-paint-protection" || 
      serviceId === "vehicle-paint-correction") && <ImageCTA />}
  
      
      {serviceId !== "vehicle-paint-correction" &&
      serviceId !== "ceramic-coating" && (
        <ServicesOffered serviceId={serviceId} />
      )}

      {serviceId === "commercial-window-tinting" ||
      serviceId === "tesla-window-tinting" && <ImageCarousel/>}

      {serviceId !== "commercial-window-tinting" &&
        serviceId !== "residential-window-tinting" && (
          <HowItWorks serviceId={serviceId} />
        )}

      <CallToAction />

      {/* ✅ Contact Section */}
      <Box sx={{ backgroundColor: "#f9f9f9", width: "100vw" }}>
        <Contact />
      </Box>

      <QuickLinks />

      {/* ✅ Footer */}
      <Footer />
    </Box>
  );
};

export default ServicePage;
