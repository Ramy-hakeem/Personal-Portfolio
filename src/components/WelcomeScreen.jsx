import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const WelcomeScreen = ({ onFinished }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 100 ? prev + 1 : 100));
    }, 18);

    if (count === 100) {
      setTimeout(onFinished, 600);
    }

    return () => clearInterval(interval);
  }, [count, onFinished]);

  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-[#0b0215]
        overflow-hidden
      "
    >
      {/* Ambient Background Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-brand/20 rounded-full blur-[160px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Brand */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            text-5xl
            md:text-6xl
            font-extrabold
            tracking-tight
          "
        >
          <Logo />
        </motion.h1>

        {/* Loader Ring */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Rotating Ring */}
          <motion.div
            className="
              absolute
              inset-0
              rounded-full
              border-2
              border-brand/40
              border-t-brand
            "
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
          />

          {/* Percentage */}
          <motion.span
            key={count}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="
              text-2xl
              font-mono
              text-brand
            "
          >
            {count}%
          </motion.span>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-[3px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-brand rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${count}%` }}
          />
        </div>

        {/* Status Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="
            text-xs
            tracking-[0.3em]
            uppercase
            text-gray-500
          "
        >
          Loading Portfolio Experience
        </motion.p>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
