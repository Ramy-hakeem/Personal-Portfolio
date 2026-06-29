import { motion } from "framer-motion";
import Logo from "./Logo";

const PageTransition = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9990] bg-[#0b0215] flex items-center justify-center"
      // Start covering the screen
      initial={{ y: "0%" }}
      // Move up to reveal the page
      animate={{ y: "-100%" }}
      // When leaving the page, slide up from bottom to cover the screen again
      exit={{ y: "0%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Logo */}
      <h1 className="text-6xl font-extrabold">
        <span className="text-brand">
          <Logo />
        </span>
      </h1>
    </motion.div>
  );
};

export default PageTransition;
