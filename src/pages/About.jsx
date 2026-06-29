import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Plane,
  BookOpen,
  Heart,
  Utensils,
  Tv,
  Music,
  PawPrint,
  Flower2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";

/* ================= SKILLS ================= */

const row1 = [
  { name: "JavaScript", icon: "/skills-imgs/Javascript.svg" },
  { name: "TypeScript", icon: "/skills-imgs/Typescript.svg" },
  { name: "React.js", icon: "/skills-imgs/React.svg" },
  { name: "Next.js", icon: "/skills-imgs/Next.svg" },
  { name: "Redux & RTK", icon: "/skills-imgs/Redux.svg" },
  { name: "HTML", icon: "/skills-imgs/html.png" },
  { name: "CSS", icon: "/skills-imgs/css-3.png" },
  { name: "Tailwind", icon: "/skills-imgs/Tailwind.svg" },
  { name: "Vite", icon: "/skills-imgs/Vite.svg" },
  { name: "Webpack", icon: "/skills-imgs/Webpack.svg" },
  { name: "vitest", icon: "/skills-imgs/vitest.svg" },
];

const row2 = [
  { name: "Node.js", icon: "/skills-imgs/Node.svg" },
  { name: "Express.js", icon: "/skills-imgs/Express.svg" },
  { name: "MongoDB", icon: "/skills-imgs/Mongo.svg" },
  { name: "Postgresql", icon: "/skills-imgs/SQL.svg" },
  { name: "Postman", icon: "/skills-imgs/Postman.svg" },
  { name: "Swagger", icon: "/skills-imgs/Swagger.svg" },
];

const row3 = [
  { name: "Git", icon: "/skills-imgs/Git.svg" },
  { name: "GitHub", icon: "/skills-imgs/GitHub.svg" },
  { name: "VS Code", icon: "/skills-imgs/vscode.svg" },
  { name: "Figma", icon: "/skills-imgs/Figma.svg" },
  { name: "Chrome", icon: "/skills-imgs/Google-Chrome.svg" },
];

/* ================= MARQUEE ================= */

const MarqueeRow = ({ items, direction = "left", speed = 25 }) => {
  return (
    <div className="overflow-hidden py-4 select-none relative">
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
        className="flex gap-6 min-w-full"
      >
        {[...items, ...items].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{
              y: -6,
              scale: 1.05,
            }}
            className="
              glass
              flex items-center gap-4
              px-8 py-4
              rounded-2xl
              border border-white/10
              hover:border-brand/60
              hover:bg-white/5
              transition-all
              group
              shrink-0
              shadow-lg
            "
          >
            <img
              src={item.icon}
              alt={item.name}
              className={`
                w-8 h-8 object-contain
                transition-all
                group-hover:scale-110
                ${item.name === "GitHub" ? "bg-white rounded-full p-0.5" : ""}
              `}
            />

            <span className="text-gray-400 font-medium group-hover:text-white">
              {item.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

/* ================= ABOUT ================= */

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden"
      >
        {/* Particles Background */}
        <ParticlesBackground />

        {/* Ambient Background Orbs */}
        <motion.div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <motion.div
          className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />

        {/* ================= INTRO ================= */}

        <section className="flex flex-col md:flex-row items-center gap-16 mb-32 relative z-10">
          {/* TEXT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex-1"
          >
            <h1 className="text-5xl font-bold mb-10">
              Know Who <span className="text-brand">I'M</span>
            </h1>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="
              glass
              p-10
              rounded-3xl
              space-y-5
              text-gray-300
              leading-relaxed
              text-lg
              shadow-[0_30px_80px_rgba(0,0,0,0.4)]
            "
            >
              <p>
                Hi, I’m{" "}
                <span className="text-brand italic font-semibold">
                  Ramy Hakeem Grace
                </span>{" "}
                from
                <span className="text-brand"> Cairo, Egypt</span>.
              </p>

              <p>
                An aspiring{" "}
                <span className="text-white font-medium">
                  Full-Stack Developer
                </span>{" "}
                focused on building scalable, real-world systems.
              </p>

              <p>
                Experienced with <span className="text-brand">MERN</span> and
                modern tooling, delivering performant, maintainable products.
              </p>

              <p className="pt-6 text-white font-semibold underline decoration-brand underline-offset-8">
                Outside of coding:
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    icon: <Flower2 size={20} />,
                    text: "Meditation",
                  },
                  { icon: <Music size={20} />, text: "Listening to music" },
                  { icon: <Tv size={20} />, text: "Watching anime" },
                  { icon: <BookOpen size={20} />, text: "Reading" },
                  {
                    icon: <Utensils size={20} />,
                    text: "Experimenting with food",
                  },
                  { icon: <PawPrint size={20} />, text: "Animal lover" },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="text-brand">{item.icon}</span>
                    {item.text}
                  </motion.li>
                ))}
              </ul>

              <blockquote className="pt-6 text-brand-light font-mono">
                “Keep building. Keep learning. Keep growing.”
              </blockquote>

              <footer className="text-gray-500">— Ramy Hakeem Grace</footer>
            </motion.div>
          </motion.div>

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <motion.div
              whileHover={{ rotateY: 8, rotateX: -8 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative perspective-1000"
            >
              {/* Glow */}
              <div className="absolute -inset-6 bg-brand/30 blur-3xl rounded-full" />

              {/* Frame */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
                <div className="rounded-3xl bg-black/40 backdrop-blur-xl p-2">
                  <motion.img
                    src="/about-img.png"
                    alt="Developer"
                    className="w-full max-w-md rounded-2xl object-cover"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ================= SKILLS ================= */}

        <section className="relative py-20 z-10">
          {/* Divider */}
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-brand" />
            <h2 className="text-4xl font-bold whitespace-nowrap">
              Professional <span className="text-brand">Skillset</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-brand" />
          </div>

          {/* Edge Fade */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0f021a] to-transparent z-10" />

            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0f021a] to-transparent z-10" />

            {/* Rows */}
            <div className="space-y-6">
              <MarqueeRow items={row1} direction="left" speed={28} />
              <MarqueeRow items={row2} direction="right" speed={32} />
              <MarqueeRow items={row3} direction="left" speed={26} />
            </div>
          </div>
        </section>

        <div className="mt-32 text-center px-6 relative z-10">
          <p className="text-gray-500 mb-4 tracking-widest uppercase text-xs">
            Want to see what I've built?
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-brand text-3xl font-bold hover:gap-6 transition-all duration-300 group"
          >
            View My Projects
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default About;
