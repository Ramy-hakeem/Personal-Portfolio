import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMove);

    document.querySelectorAll("a, button, .cursor-hover").forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);

      document.querySelectorAll("a, button, .cursor-hover").forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="
          fixed
          top-0
          left-0
          w-10
          h-10
          border
          border-brand/70
          rounded-full
          pointer-events-none
          z-[9999]
          hidden
          md:block
        "
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          scale: isHovering ? 1.6 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 20,
          mass: 0.4,
        }}
      />

      {/* Inner Dot */}
      <motion.div
        className="
          fixed
          top-0
          left-0
          w-2.5
          h-2.5
          bg-brand
          rounded-full
          pointer-events-none
          z-[9999]
          hidden
          md:block
          shadow-[0_0_12px_rgba(205,95,248,0.8)]
        "
        animate={{
          x: mousePos.x - 5,
          y: mousePos.y - 5,
          scale: isHovering ? 0.4 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
    </>
  );
};

export default CustomCursor;
