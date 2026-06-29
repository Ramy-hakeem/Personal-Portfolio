import React from "react";
import { Instagram, Twitter, Github, Linkedin, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative mt-0.5">
      {/* Top Divider Glow */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand to-transparent" />

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-8
          py-12
          grid
          gap-8
          md:grid-cols-3
          items-center
        "
      >
        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left space-y-2"
        >
          <h3 className="text-lg font-bold tracking-wide">
            Ramy <span className="text-brand">Hakeem Grace</span>
          </h3>

          <p className="text-gray-400 text-sm">
            Full-Stack Developer • MERN Specialist
          </p>

          <p className="text-gray-500 text-xs">
            Building scalable & meaningful products.
          </p>
        </motion.div>

        {/* ================= CENTER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex justify-center gap-5"
        >
          {[
            {
              icon: <Github size={18} />,
              url: "https://github.com/Ramy-hakeem",
            },
            {
              icon: <Linkedin size={18} />,
              url: "www.linkedin.com/in/ramy-hakeem",
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

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center md:text-right space-y-2"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Made with <Heart size={14} className="inline text-brand" /> by{" "}
            <span className="text-brand font-semibold">Ramy Hakeem Grace</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
