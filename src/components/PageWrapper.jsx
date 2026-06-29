import { motion } from "framer-motion";
import PageTransition from "./PageTransition";

const PageWrapper = ({ children }) => {
  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      {/* The Overlay */}
      <PageTransition />

      {/* The Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.4 }} // Delay content slightly so it appears after curtain moves
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default PageWrapper;
