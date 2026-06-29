import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Instagram, Twitter, Github, Linkedin } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  // Framer Motion Variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-[10000] backdrop-blur-xl bg-black/40 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        {/* ================= LOGO ================= */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold tracking-tight relative z-[10001]"
        >
          <Link to="/" className="flex items-center gap-1">
            <Logo />
          </Link>
        </motion.div>

        {/* ================= DESKTOP LINKS ================= */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.path} className="relative">
                <Link
                  to={link.path}
                  className={`text-xs uppercase tracking-widest font-semibold transition ${
                    isActive ? "text-brand" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-brand rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* ================= DESKTOP CTA ================= */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <Link
            to="/contact"
            className="px-5 py-2 rounded-full bg-brand/90 text-white text-sm font-bold shadow-lg shadow-brand/30 hover:shadow-brand/60 transition"
          >
            Hire Me
          </Link>
        </motion.div>

        {/* ================= HAMBURGER ICON ================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[10001] p-2 text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE MENU OVERLAY ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 h-screen w-full bg-[#0b0215] flex flex-col items-center justify-center z-[10000] md:hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand/20 blur-[120px] rounded-full pointer-events-none" />

            <ul className="flex flex-col items-center gap-8 text-center">
              {links.map((link, i) => (
                <motion.li key={link.path} custom={i} variants={linkVariants}>
                  <Link
                    to={link.path}
                    className={`text-4xl font-bold tracking-tighter transition-colors ${
                      pathname === link.path
                        ? "text-brand"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}

              {/* Mobile CTA */}
              <motion.li
                custom={links.length}
                variants={linkVariants}
                className="mt-4"
              >
                <Link
                  to="/contact"
                  className="px-8 py-3 rounded-full bg-brand text-white text-lg font-bold shadow-xl shadow-brand/20"
                >
                  Hire Me
                </Link>
              </motion.li>
            </ul>

            {/* Social Links Footer inside Menu */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="absolute bottom-12 flex gap-6"
            >
              {[
                {
                  icon: <Github size={18} />,
                  url: "https://www.github.com/Ramy-hakeem",
                },
                {
                  icon: <Linkedin size={18} />,
                  url: "https://www.linkedin.com/in/ramy-hakeem",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                            w-11 h-11
                            flex items-center justify-center
                            rounded-full
                            bg-white/5
                            border border-white/10
                            text-gray-400
                            hover:text-brand
                            hover:border-brand/40
                            hover:shadow-[0_0_20px_rgba(205,95,248,0.4)]
                            transition
                          "
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
