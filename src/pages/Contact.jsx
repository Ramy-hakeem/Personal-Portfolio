import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Instagram, Linkedin, Github } from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";

function Contact() {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-2 pb-4 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Particles Background */}
      <ParticlesBackground />
      <section className="relative min-h-screen overflow-hidden pt-32 pb-24 px-6 md:px-12">
        {/* ===== Animated Background ===== */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 60, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-[-15%] left-[-15%] w-[500px] h-[500px] rounded-full blur-[140px]"
            style={{ backgroundColor: "var(--aura-color-1)" }}
          />

          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, -60, 0] }}
            transition={{ duration: 16, repeat: Infinity }}
            className="absolute bottom-[-15%] right-[-15%] w-[600px] h-[600px] rounded-full blur-[160px]"
            style={{ backgroundColor: "var(--aura-color-2)" }}
          />
        </div>

        {/* ===== Content ===== */}
        <div className="max-w-6xl mx-auto grid gap-16 md:grid-cols-2 relative z-10">
          {/* ===== Left Info Section ===== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight ">
              Let’s <span className="text-brand">Talk.</span>
            </h1>

            <p className="text-gray-400 mb-10 text-lg max-w-md leading-relaxed">
              I’m currently open to{" "}
              <span className="font-semibold text-white">
                freelance projects
              </span>{" "}
              and full-time opportunities. Let’s build something exceptional.
            </p>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center gap-6 group">
                <div className="p-4 glass rounded-2xl text-brand shadow-lg transition group-hover:bg-brand group-hover:text-white">
                  <Mail size={26} />
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-400">
                    Email
                  </h4>

                  <p className="text-lg font-semibold">mdtharick25@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-6 group">
                <div className="p-4 glass rounded-2xl text-brand shadow-lg transition group-hover:bg-brand group-hover:text-white">
                  <MapPin size={26} />
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-400">
                    Location
                  </h4>

                  <p className="text-lg font-semibold">Chennai, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex gap-4">
              {[
                { icon: <Github />, link: "#" },
                { icon: <Linkedin />, link: "#" },
                { icon: <Instagram />, link: "#" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -6 }}
                  className="p-3 glass rounded-full text-gray-400 hover:text-brand transition"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ===== Form Section ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/10 shadow-2xl"
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-6"
              noValidate
            >
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 ml-2 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-2xl p-4 bg-white/5 border border-white/10 focus:border-brand focus:outline-none transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 ml-2 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-2xl p-4 bg-white/5 border border-white/10 focus:border-brand focus:outline-none transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 ml-2 mb-2">
                  Your Message
                </label>

                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="How can I help you?"
                  className="w-full rounded-2xl p-4 bg-white/5 border border-white/10 focus:border-brand focus:outline-none transition resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-brand py-5 rounded-2xl font-bold text-white flex items-center justify-center gap-3 transition hover:shadow-[0_0_30px_rgba(205,95,248,0.35)] disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && <Send size={20} />}
              </motion.button>

              {/* Status Messages */}
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-500 text-center font-semibold"
                >
                  ✓ Message sent successfully!
                </motion.p>
              )}

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-center font-semibold"
                >
                  ✗ Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Contact;
