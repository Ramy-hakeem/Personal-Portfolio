import React, { useEffect, useRef, useCallback } from "react";

const ParticlesBackground = ({
  particleCount = 120,
  connectionDistance = 150,
  particleColor = "255,255,255",
  showConnections = true,
  mouseInteraction = true,
  pulseEffect = true,
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, radius: 200 });
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    let time = 0;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Reinitialize particles on resize
      if (particlesRef.current.length > 0) {
        initParticles();
      }
    };

    class Particle {
      constructor(x, y) {
        this.x = x || Math.random() * width;
        this.y = y || Math.random() * height;
        this.radius = Math.random() * 2.5 + 1;
        this.baseRadius = this.radius;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.color = `rgba(${particleColor}, ${this.opacity})`;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update(mouseX, mouseY) {
        // Regular movement
        this.x += this.speedX;
        this.y += this.speedY;

        // Boundary check with smooth edge behavior
        if (this.x < 0) {
          this.x = 0;
          this.speedX *= -0.98;
        }
        if (this.x > width) {
          this.x = width;
          this.speedX *= -0.98;
        }
        if (this.y < 0) {
          this.y = 0;
          this.speedY *= -0.98;
        }
        if (this.y > height) {
          this.y = height;
          this.speedY *= -0.98;
        }

        // Mouse interaction (repel or attract)
        if (mouseInteraction && mouseX && mouseY) {
          const dx = this.x - mouseX;
          const dy = this.y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const mouseRadius = mouseRef.current.radius;

          if (distance < mouseRadius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouseRadius - distance) / mouseRadius;
            const pushX = Math.cos(angle) * force * 2;
            const pushY = Math.sin(angle) * force * 2;
            this.x += pushX;
            this.y += pushY;
          }
        }

        // Pulse effect
        if (pulseEffect) {
          this.radius =
            this.baseRadius +
            Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.5;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        // Gradient fill for particles
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius,
        );
        gradient.addColorStop(
          0,
          `rgba(${particleColor}, ${this.opacity + 0.2})`,
        );
        gradient.addColorStop(1, `rgba(${particleColor}, ${this.opacity})`);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${particleColor}, 0.5)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);

            // Gradient stroke for connections
            const gradient = ctx.createLinearGradient(
              particlesRef.current[i].x,
              particlesRef.current[i].y,
              particlesRef.current[j].x,
              particlesRef.current[j].y,
            );
            gradient.addColorStop(0, `rgba(${particleColor}, ${opacity})`);
            gradient.addColorStop(
              1,
              `rgba(${particleColor}, ${opacity * 0.5})`,
            );

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;

      // Clear with fade effect for trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      time += 0.016; // Increment time for pulse effects

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        particle.update(mouseRef.current.x, mouseRef.current.y);
        particle.draw();
      });

      // Draw connections between particles
      if (showConnections) {
        drawConnections();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
      if (!mouseInteraction) return;
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      mouseRef.current.x = (e.clientX - rect.left) * scaleX;
      mouseRef.current.y = (e.clientY - rect.top) * scaleY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    // Initialize
    initParticles();
    setCanvasSize();
    animate();

    // Event listeners
    window.addEventListener("resize", setCanvasSize);
    if (mouseInteraction) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      if (mouseInteraction) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    particleCount,
    connectionDistance,
    particleColor,
    showConnections,
    mouseInteraction,
    pulseEffect,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-auto"
      style={{
        background:
          "radial-gradient(circle at center, #0a0a2a 0%, #000000 100%)",
      }}
    />
  );
};

export default ParticlesBackground;
