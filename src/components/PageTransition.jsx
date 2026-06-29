import { motion } from "framer-motion";
import Logo from "./Logo";

const PageTransition = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9990] bg-[#0b0215] flex items-center justify-center overflow-hidden"
      initial={{ y: "0%" }}
      animate={{ y: "-100%" }}
      exit={{ y: "0%" }}
      transition={{
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        // Adding a spring-like feel to the exit
      }}
    >
      {/* Animated gradient background with multiple layers */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-pink-600/30" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-pink-500/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>

      {/* Enhanced logo with 3D flip and glow effects */}
      <motion.div
        className="relative z-10"
        initial={{
          opacity: 0,
          scale: 0.3,
          y: 50,
          rotateZ: -10,
          rotateX: 45,
          rotateY: -45,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          rotateZ: 0,
          rotateX: 0,
          rotateY: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.34, 1.56, 0.64, 1],
          opacity: { duration: 0.7, ease: "easeOut" },
          scale: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
          rotateZ: { duration: 0.8, ease: "easeOut" },
          rotateX: { duration: 1, ease: "easeOut" },
          rotateY: { duration: 1, ease: "easeOut" },
        }}
      >
        {/* Glow ring behind logo */}
        <motion.div
          className="absolute inset-0 -m-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <h1 className="text-6xl font-extrabold">
          <span className="text-brand">
            <Logo isPageTransition={true} />
          </span>
        </h1>
      </motion.div>

      {/* Enhanced particle system */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 150 + Math.random() * 100;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const size = 2 + Math.random() * 4;
        const colors = [
          "bg-purple-400",
          "bg-pink-400",
          "bg-blue-400",
          "bg-indigo-400",
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];

        return (
          <motion.div
            key={i}
            className={`absolute ${color} rounded-full`}
            style={{
              width: size,
              height: size,
              left: "50%",
              top: "50%",
            }}
            initial={{
              opacity: 0,
              x: 0,
              y: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              x: [0, x],
              y: [0, y],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 1.5 + Math.random() * 0.5,
              delay: 0.1 + i * 0.05,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 1 + Math.random() * 2,
            }}
          />
        );
      })}

      {/* Sparkle particles near logo */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2 + Math.random() * 0.5;
        const radius = 80 + Math.random() * 40;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: "50%",
              top: "50%",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: [0, x],
              y: [0, y],
            }}
            transition={{
              duration: 0.8,
              delay: 0.3 + i * 0.1,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 1.5 + Math.random() * 1.5,
            }}
          />
        );
      })}

      {/* Animated border lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {[
          "top-0 left-0 right-0 h-px",
          "bottom-0 left-0 right-0 h-px",
          "top-0 bottom-0 left-0 w-px",
          "top-0 bottom-0 right-0 w-px",
        ].map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute ${pos} bg-gradient-to-r from-transparent via-purple-500/30 to-transparent`}
            initial={{ scaleX: 0, scaleY: 0 }}
            animate={{ scaleX: 1, scaleY: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2 + i * 0.1,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PageTransition;
