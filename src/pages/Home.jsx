import React, { useState, useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Code, Rocket, Sparkles } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "../components/ParticlesBackground";

/* ================= HOME COMPONENT ================= */

const Home = () => {
  /* 3D Tilt Motion Values */
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-60, 60], [15, -15]);
  const rotateY = useTransform(x, [-60, 60], [-15, 15]);

  const [isHover, setIsHover] = useState(false);

  /* Mouse Tracking */
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    setIsHover(false);
  };
  const words = ["INNOVATION", "CREATIVITY", "EXCELLENCE", "SOLUTIONS"];
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const stats = [
    { label: "Projects Completed", value: "50+", icon: Code },
    { label: "Happy Clients", value: "40+", icon: Sparkles },
    {
      label: "Years Experience",
      value: new Date().getFullYear() - 2023,
      icon: Rocket,
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden"
      >
        {/* Particles Background */}
        <ParticlesBackground
          particleCount={150}
          connectionDistance={120}
          particleColor="100, 200, 255"
          showConnections={true}
          mouseInteraction={true}
          pulseEffect={true}
        />

        {/* ================= HERO ================= */}

        <section className="relative z-10 flex h-screen flex-col items-center justify-center px-6 text-center">
          {/* Animated Background Glow - Enhanced */}
          <motion.div
            className="absolute h-[40rem] w-[40rem] rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-3xl"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 40, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          {/* Secondary glow for depth */}
          <motion.div
            className="absolute h-[30rem] w-[30rem] rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 blur-3xl"
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              scale: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              },
            }}
          />

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10"
          >
            {/* Subtle badge above title */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-gray-300 backdrop-blur-sm"
            >
              ✨ CREATIVE DEVELOPER
            </motion.div>
            <h1 className="mb-4 text-7xl font-bold tracking-tighter sm:text-8xl md:text-9xl">
              <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                DIGITAL
              </span>
              <br />
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </h1>

            <p className="mx-auto max-w-lg text-lg leading-relaxed text-gray-400 sm:text-xl md:max-w-2xl">
              Crafting digital experiences where{" "}
              <span className="font-semibold text-white">functionality</span>{" "}
              meets <span className="font-semibold text-white">aesthetics</span>
              .
            </p>

            {/* Added CTA buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex gap-4 justify-center"
            >
              <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                <span className="relative z-10">Explore Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
              <button className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 hover:scale-105">
                Get in Touch
              </button>
            </motion.div>
          </motion.div>

          {/* Enhanced Scroll Guide */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute bottom-10 flex flex-col items-center gap-2 text-gray-500"
          >
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-gray-500/30">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400"
              />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Scroll to Explore
            </span>
          </motion.div>

          {/* Add CSS animations */}
          <style jsx>{`
            @keyframes gradient {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
            .animate-gradient {
              background-size: 200% 200%;
              animation: gradient 3s ease infinite;
            }
          `}</style>
        </section>

        {/* ================= INTRO ================= */}

        <section className="relative z-10 min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-28 px-6 md:px-10">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[100px]" />
            <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/10 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="grid items-center gap-16 md:grid-cols-2">
              {/* Text Column */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Small Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-400 backdrop-blur-sm"
                >
                  <Sparkles size={14} />
                  <span>About Me</span>
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mb-4 text-6xl font-bold leading-tight tracking-tighter md:text-7xl"
                >
                  Hello, I'm{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                    Ramy.
                  </span>
                </motion.h2>

                {/* Animated Role */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mb-6"
                >
                  <div className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 backdrop-blur-sm">
                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    <TypeAnimation
                      sequence={[
                        "MERN Stack Architect",
                        2000,
                        "Creative UI/UX Designer",
                        2000,
                        "Problem Solver",
                        2000,
                        "Performance Optimizer",
                        2000,
                      ]}
                      repeat={Infinity}
                      wrapper="span"
                      className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text md:text-2xl"
                    />
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="mb-8 text-lg leading-relaxed text-gray-300 md:text-xl"
                >
                  I build things for the web. I'm a developer who focuses on
                  writing clean, elegant and efficient code that creates
                  meaningful digital experiences.
                </motion.p>

                {/* Stats Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="mb-10 grid grid-cols-3 gap-4"
                >
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4 text-center backdrop-blur-sm"
                      >
                        <Icon className="mx-auto mb-2 h-6 w-6 text-purple-400" />
                        <div className="text-2xl font-bold text-white">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-400">
                          {stat.label}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* CTA Button */}
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 px-8 py-4 font-bold text-white shadow-xl shadow-purple-500/30 transition-all hover:shadow-2xl hover:shadow-purple-500/50"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Discover My Journey
                      <ArrowRight
                        size={20}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative flex justify-center"
              >
                {/* Animated Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-[380px] w-[380px] rounded-full border border-purple-500/20"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: 360,
                        opacity: [0.3, 0.1, 0.3],
                      }}
                      transition={{
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        borderWidth: 1 + i,
                      }}
                    />
                  ))}
                </div>

                {/* Main Glow */}
                <motion.div
                  className="absolute h-[400px] w-[400px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-30 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: 360,
                  }}
                  transition={{
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  }}
                />

                {/* 3D Frame */}
                <motion.div
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={handleLeave}
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                  }}
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative cursor-pointer"
                >
                  {/* Outer Border Gradient */}
                  <div className="relative rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500 p-[2px] shadow-2xl shadow-purple-500/30">
                    {/* Glass Layer */}
                    <div className="rounded-3xl bg-black/40 backdrop-blur-xl p-2">
                      {/* Profile Image */}
                      <motion.img
                        src="/ramy.png"
                        alt="Ramy - Profile"
                        className="h-[320px] w-[320px] rounded-2xl object-cover shadow-2xl md:h-[380px] md:w-[380px]"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Hover Shine Effect */}
                  {isHover && (
                    <motion.div
                      className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/40 via-white/10 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {/* Floating Particles around Image */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-2 w-2 rounded-full bg-purple-400"
                      animate={{
                        x: [0, Math.sin(i) * 30, 0],
                        y: [0, Math.cos(i) * 30, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut",
                      }}
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* CSS Animation */}
          <style jsx>{`
            @keyframes gradient {
              0%,
              100% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
            }
            .animate-gradient {
              background-size: 200% 200%;
              animation: gradient 3s ease infinite;
            }
          `}</style>
        </section>
      </motion.div>
    </>
  );
};

export default Home;
