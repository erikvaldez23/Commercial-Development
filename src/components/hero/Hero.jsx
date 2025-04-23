import React, { useEffect, useRef } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { motion } from "framer-motion";

const HeroSection = () => {
  const canvasRef = useRef(null);

  const learnMoreScroll = () => {
    document.getElementById("what-we-do")?.scrollIntoView({
      behavior: "smooth",
      block: "start", // Aligns the element to the top of the viewport
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let shootingStars = [];
    let mouseX = 0;
    let mouseY = 0;
    let lastTime = 0;

    // Track mouse position for interactive effects
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Set canvas size with device pixel ratio for crisp rendering
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = window.innerWidth;
      const displayHeight = Math.max(window.innerHeight * 1, 500);

      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;

      ctx.scale(dpr, dpr);
      canvasWidth = displayWidth;
      canvasHeight = displayHeight;
    };

    let canvasWidth, canvasHeight;
    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Create layers for parallax effect
    const starLayers = [
      {
        count: 100,
        speed: 0.05,
        size: { min: 0.2, max: 0.8 },
        brightness: { min: 0.3, max: 0.5 },
      },
      {
        count: 70,
        speed: 0.1,
        size: { min: 0.5, max: 1.2 },
        brightness: { min: 0.4, max: 0.7 },
      },
      {
        count: 30,
        speed: 0.2,
        size: { min: 0.8, max: 1.5 },
        brightness: { min: 0.5, max: 0.9 },
      },
    ];

    const stars = [];

    class Star {
      constructor(layer) {
        this.layer = layer;
        this.speed = layer.speed;
        this.reset();
        this.flickerSpeed = Math.random() * 0.02 + 0.005;
        this.flickerPhase = Math.random() * Math.PI * 2; // Random starting phase
      }

      reset() {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.radius =
          Math.random() * (this.layer.size.max - this.layer.size.min) +
          this.layer.size.min;
        this.baseAlpha =
          Math.random() *
            (this.layer.brightness.max - this.layer.brightness.min) +
          this.layer.brightness.min;
        this.alpha = this.baseAlpha;
        // Random color tint for more realistic night sky
        this.hue = Math.random() > 0.9 ? Math.random() * 60 + 180 : 0; // Occasionally blue, mostly white
        this.saturation = this.hue ? Math.random() * 30 + 10 : 0;
      }

      update(deltaTime, mouseX, mouseY) {
        // Subtle flicker effect
        this.alpha =
          this.baseAlpha +
          Math.sin(Date.now() * this.flickerSpeed + this.flickerPhase) * 0.2;

        // Subtle mouse interaction - stars slightly move away from cursor
        if (mouseX && mouseY) {
          const dx = this.x - mouseX;
          const dy = this.y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            const pushFactor = (1 - distance / 100) * 0.5 * this.layer.speed;
            this.x += (dx / distance) * pushFactor;
            this.y += (dy / distance) * pushFactor;
          }
        }
      }

      draw() {
        // Create a subtle glow effect
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius * 2
        );

        const color = this.hue
          ? `hsla(${this.hue}, ${this.saturation}%, 90%, ${this.alpha})`
          : `rgba(255, 255, 255, ${this.alpha})`;

        const glowColor = this.hue
          ? `hsla(${this.hue}, ${this.saturation}%, 90%, 0)`
          : `rgba(255, 255, 255, 0)`;

        gradient.addColorStop(0, color);
        gradient.addColorStop(1, glowColor);

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Bright center
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = this.hue
          ? `hsla(${this.hue}, ${this.saturation / 2}%, 98%, ${Math.min(
              1,
              this.alpha * 2
            )})`
          : `rgba(255, 255, 255, ${Math.min(1, this.alpha * 2)})`;
        ctx.fill();
      }
    }

    class ShootingStar {
      constructor() {
        this.reset();
      }

      reset() {
        // Starting position varies across the entire top of the canvas
        this.x = Math.random() * canvasWidth * 1.5 - canvasWidth * 0.25;
        this.y = Math.random() * canvasHeight * 0.3; // Top third
        this.length = Math.random() * 100 + 120;
        this.speed = Math.random() * 2.5 + 1.5;
        this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2;
        this.life = 0;
        this.maxLife = 120 + Math.random() * 60;

        // Trail particles
        this.particles = [];
        this.particleCount = Math.floor(Math.random() * 10) + 15;

        // Color variation
        this.hue = Math.random() > 0.8 ? Math.random() * 60 + 200 : 0; // Occasionally blue, mostly white
        this.saturation = this.hue ? Math.random() * 50 + 30 : 0;
      }

      update(deltaTime) {
        const speedFactor = deltaTime / 16.667; // Normalize for 60fps

        this.x += Math.cos(this.angle) * this.speed * speedFactor;
        this.y += Math.sin(this.angle) * this.speed * speedFactor;
        this.life += speedFactor;

        // Add particles along the trail
        if (this.life < this.maxLife * 0.8 && Math.random() > 0.7) {
          this.particles.push({
            x: this.x - Math.cos(this.angle) * (Math.random() * 20),
            y: this.y - Math.sin(this.angle) * (Math.random() * 20),
            size: Math.random() * 1.5 + 0.5,
            life: 0,
            maxLife: Math.random() * 50 + 30,
          });
        }

        // Update particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
          const p = this.particles[i];
          p.life += speedFactor;
          if (p.life >= p.maxLife) {
            this.particles.splice(i, 1);
          }
        }
      }

      draw() {
        // Draw particles first so they appear behind the main trail
        for (const p of this.particles) {
          const alpha = 1 - p.life / p.maxLife;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = this.hue
            ? `hsla(${this.hue}, ${this.saturation}%, 90%, ${alpha * 0.5})`
            : `rgba(255, 255, 255, ${alpha * 0.5})`;
          ctx.fill();
        }

        // Calculate fade based on life
        let alpha = 1;
        if (this.life < this.maxLife * 0.2) {
          // Fade in
          alpha = this.life / (this.maxLife * 0.2);
        } else if (this.life > this.maxLife * 0.8) {
          // Fade out
          alpha = 1 - (this.life - this.maxLife * 0.8) / (this.maxLife * 0.2);
        }

        // Draw main trail
        const endX = this.x - Math.cos(this.angle) * this.length;
        const endY = this.y - Math.sin(this.angle) * this.length;

        // Create gradient for the shooting star trail
        const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);

        const headColor = this.hue
          ? `hsla(${this.hue}, ${this.saturation}%, 95%, ${alpha})`
          : `rgba(255, 255, 255, ${alpha})`;

        const tailColor = this.hue
          ? `hsla(${this.hue}, ${this.saturation - 20}%, 80%, 0)`
          : `rgba(255, 255, 255, 0)`;

        gradient.addColorStop(0, headColor);
        gradient.addColorStop(1, tailColor);

        // Draw glow effect first
        ctx.lineWidth = 4;
        ctx.strokeStyle = this.hue
          ? `hsla(${this.hue}, ${this.saturation - 20}%, 90%, ${alpha * 0.3})`
          : `rgba(255, 255, 255, ${alpha * 0.3})`;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Draw main trail
        ctx.lineWidth = 2;
        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Draw bright head
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = headColor;
        ctx.fill();
      }
    }

    // Initialize stars in layers
    starLayers.forEach((layer) => {
      for (let i = 0; i < layer.count; i++) {
        stars.push(new Star(layer));
      }
    });

    // Track last shooting star time
    let lastShootingStarTime = Date.now() - 5000;

    const animate = (timestamp) => {
      const deltaTime = timestamp - lastTime || 16.67;
      lastTime = timestamp;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Add subtle background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
      gradient.addColorStop(0, "rgba(0, 0, 0, 1)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Update and draw stars
      stars.forEach((star) => {
        star.update(deltaTime, mouseX, mouseY);
        star.draw();
      });

      // Update and draw shooting stars
      shootingStars.forEach((star) => {
        if (star.life <= star.maxLife) {
          star.update(deltaTime);
          star.draw();
        }
      });

      // Filter out old shooting stars
      shootingStars = shootingStars.filter((s) => s.life <= s.maxLife);

      // Add new shooting stars with improved timing
      const now = Date.now();
      const timeSinceLastStar = now - lastShootingStarTime;
      const chanceMultiplier = Math.min(timeSinceLastStar / 8000, 5); // Increases chance over time

      if (
        Math.random() < 0.001 * chanceMultiplier &&
        shootingStars.length < 3
      ) {
        shootingStars.push(new ShootingStar());
        lastShootingStarTime = now;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate(0);

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("mousemove", handleMouseMove);
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
        <Box
          sx={{
            py: { xs: 6, md: 8 },
            textAlign: "center",
            justifyContent: "center",
          }}
        >
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
              {/* <Box
                component="span"
                sx={{
                  display: "inline-block",
                  color: "#c9b49a",
                  WebkitTextFillColor: "#c9b49a",
                }}
              >
                .
              </Box> */}
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
                sx={{
                  border: "3px solid #c9b49a",
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
                onClick={learnMoreScroll}
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
