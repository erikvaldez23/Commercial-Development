import React, { useEffect, useRef } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { motion } from "framer-motion";

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(window.innerHeight * 0.7, 500);
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    const particlesArray = [];
    const numberOfParticles = 200;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(201,180,154, ${Math.random() * 0.3})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const connect = () => {
      const maxDistance = 100;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(201,180,154, ${opacity * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Box
      sx={{
        background: "#000",
        color: "white",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, pb: 5 }}>
        <Box sx={{ py: { xs: 6, md: 8 }, textAlign: "center", justifyContent: "center" }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
            sx={{
              position: "absolute",
              top: "-5%",
              left: "50%",
              transform: "translateX(-50%)",
              width: { xs: "200px", md: "300px" },
              height: { xs: "200px", md: "300px" },
              background:
                "radial-gradient(circle, rgba(201,180,154,0.15) 0%, rgba(0,0,0,0) 70%)",
              borderRadius: "50%",
              filter: "blur(40px)",
              zIndex: -1,
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              component={motion.div}
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 0.3, duration: 1 }}
              sx={{
                height: "3px",
                background:
                  "linear-gradient(90deg, rgba(201,180,154,0) 0%, rgba(201,180,154,1) 50%, rgba(201,180,154,0) 100%)",
                mx: "auto",
                mb: 4,
              }}
            />

            <Typography
              component={motion.h1}
              variant="h1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                mb: 2,
                background: "linear-gradient(90deg, #ffffff 0%, #c9b49a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 30px rgba(201,180,154,0.3)",
                letterSpacing: "0.5px",
              }}
            >
              Invest in Sustainable <br /> Real Estate
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  color: "#c9b49a",
                  WebkitTextFillColor: "#c9b49a",
                }}
              >
                .
              </Box>
            </Typography>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.4rem" },
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.85)",
                  maxWidth: "700px",
                  margin: "0 auto",
                  mb: 5,
                  lineHeight: 1.7,
                }}
              >
                Green Ark is redefining real estate investments — blending
                modern innovation with lasting impact for a sustainable future.
              </Typography>
            </motion.div>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                flexWrap: "wrap", // optional for mobile
              }}
            >
              <Button
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(90deg, #c9b49a 0%, #bca486 100%)",
                  color: "#0a0f14",
                  borderRadius: "30px",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontWeight: 600,
                  py: 1.5,
                  px: 4,
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, rgba(201,180,154,0.9) 0%, rgba(188,164,134,0.9) 100%)",
                    boxShadow: "0 0 20px rgba(201,180,154,0.4)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Start Investing
              </Button>

              <Button
                variant="outlined"
                sx={{
                  borderColor: "rgba(201,180,154,0.7)",
                  color: "#c9b49a",
                  borderRadius: "30px",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontWeight: 600,
                  py: 1.5,
                  px: 4,
                  "&:hover": {
                    borderColor: "#c9b49a",
                    background: "rgba(201,180,154,0.08)",
                    boxShadow: "0 0 15px rgba(201,180,154,0.2)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Learn More
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
