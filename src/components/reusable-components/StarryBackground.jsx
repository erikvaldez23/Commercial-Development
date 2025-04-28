import React, { useEffect, useRef } from "react";

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let shootingStars = [];
    let mouseX = 0;
    let mouseY = 0;
    let lastTime = 0;
    let canvasWidth, canvasHeight;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

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

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", setCanvasDimensions);
    setCanvasDimensions();

    // Layer configs
    const starLayers = [
      { count: 100, speed: 0.05, size: { min: 0.2, max: 0.8 }, brightness: { min: 0.3, max: 0.5 } },
      { count: 70, speed: 0.1, size: { min: 0.5, max: 1.2 }, brightness: { min: 0.4, max: 0.7 } },
      { count: 30, speed: 0.2, size: { min: 0.8, max: 1.5 }, brightness: { min: 0.5, max: 0.9 } },
    ];
    
    const stars = [];

    class Star {
      constructor(layer) {
        this.layer = layer;
        this.speed = layer.speed;
        this.reset();
        this.flickerSpeed = Math.random() * 0.02 + 0.005;
        this.flickerPhase = Math.random() * Math.PI * 2;
      }

      reset() {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.radius = Math.random() * (this.layer.size.max - this.layer.size.min) + this.layer.size.min;
        this.baseAlpha = Math.random() * (this.layer.brightness.max - this.layer.brightness.min) + this.layer.brightness.min;
        this.alpha = this.baseAlpha;
        this.hue = Math.random() > 0.9 ? Math.random() * 60 + 180 : 0;
        this.saturation = this.hue ? Math.random() * 30 + 10 : 0;
      }

      update(deltaTime) {
        this.alpha = this.baseAlpha + Math.sin(Date.now() * this.flickerSpeed + this.flickerPhase) * 0.2;
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
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 2);
        const color = this.hue
          ? `hsla(${this.hue}, ${this.saturation}%, 90%, ${this.alpha})`
          : `rgba(255, 255, 255, ${this.alpha})`;
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, "rgba(255,255,255,0)");

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = this.hue
          ? `hsla(${this.hue}, ${this.saturation / 2}%, 98%, ${Math.min(1, this.alpha * 2)})`
          : `rgba(255, 255, 255, ${Math.min(1, this.alpha * 2)})`;
        ctx.fill();
      }
    }

    class ShootingStar {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvasWidth * 1.5 - canvasWidth * 0.25;
        this.y = Math.random() * canvasHeight * 0.3;
        this.length = Math.random() * 100 + 120;
        this.speed = Math.random() * 2.5 + 1.5;
        this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2;
        this.life = 0;
        this.maxLife = 120 + Math.random() * 60;
        this.particles = [];
        this.hue = Math.random() > 0.8 ? Math.random() * 60 + 200 : 0;
        this.saturation = this.hue ? Math.random() * 50 + 30 : 0;
      }

      update(deltaTime) {
        const speedFactor = deltaTime / 16.667;
        this.x += Math.cos(this.angle) * this.speed * speedFactor;
        this.y += Math.sin(this.angle) * this.speed * speedFactor;
        this.life += speedFactor;

        if (this.life < this.maxLife * 0.8 && Math.random() > 0.7) {
          this.particles.push({
            x: this.x - Math.cos(this.angle) * (Math.random() * 20),
            y: this.y - Math.sin(this.angle) * (Math.random() * 20),
            size: Math.random() * 1.5 + 0.5,
            life: 0,
            maxLife: Math.random() * 50 + 30,
          });
        }

        this.particles = this.particles.filter((p) => p.life < p.maxLife);
        this.particles.forEach((p) => (p.life += speedFactor));
      }

      draw() {
        for (const p of this.particles) {
          const alpha = 1 - p.life / p.maxLife;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = this.hue
            ? `hsla(${this.hue}, ${this.saturation}%, 90%, ${alpha * 0.5})`
            : `rgba(255, 255, 255, ${alpha * 0.5})`;
          ctx.fill();
        }

        let alpha = 1;
        if (this.life < this.maxLife * 0.2) {
          alpha = this.life / (this.maxLife * 0.2);
        } else if (this.life > this.maxLife * 0.8) {
          alpha = 1 - (this.life - this.maxLife * 0.8) / (this.maxLife * 0.2);
        }

        const endX = this.x - Math.cos(this.angle) * this.length;
        const endY = this.y - Math.sin(this.angle) * this.length;
        const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);
        gradient.addColorStop(0, `hsla(${this.hue}, ${this.saturation}%, 95%, ${alpha})`);
        gradient.addColorStop(1, `hsla(${this.hue}, ${this.saturation}%, 80%, 0)`);

        ctx.lineWidth = 4;
        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
    }

    starLayers.forEach((layer) => {
      for (let i = 0; i < layer.count; i++) {
        stars.push(new Star(layer));
      }
    });

    let lastShootingStarTime = Date.now() - 5000;

    const animate = (timestamp) => {
      const deltaTime = timestamp - lastTime || 16.67;
      lastTime = timestamp;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
      gradient.addColorStop(0, "rgba(0, 0, 0, 1)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      stars.forEach((star) => {
        star.update(deltaTime);
        star.draw();
      });

      shootingStars.forEach((star) => {
        if (star.life <= star.maxLife) {
          star.update(deltaTime);
          star.draw();
        }
      });

      shootingStars = shootingStars.filter((s) => s.life <= s.maxLife);

      const now = Date.now();
      const timeSinceLastStar = now - lastShootingStarTime;
      const chanceMultiplier = Math.min(timeSinceLastStar / 8000, 5);
      if (Math.random() < 0.001 * chanceMultiplier && shootingStars.length < 3) {
        shootingStars.push(new ShootingStar());
        lastShootingStarTime = now;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
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
  );
};

export default StarryBackground;
