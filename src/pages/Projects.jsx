import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

import ParticlesBackground from "../components/ParticlesBackground";

/* ================= PROJECT DATA ================= */

const projects = [
  {
    id: 1,
    title: "Real Estate Platform",
    category: "Full Stack",
    featured: true,
    shortDesc:
      "A full-stack real estate web application for browsing, listing, and managing properties.",
    longDesc:
      "A modern full-stack real estate platform built using the MERN stack...",
    img: "/project-imgs/estatera-home-pic.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
    ],
    git: "https://github.com/MohammedTharick25/Real-Estate",
    demo: "https://estatera.onrender.com/",
  },
  {
    id: 2,
    title: "TaloSync (Job Portal)",
    category: "Full Stack",
    featured: true,
    shortDesc: "A job portal with real-time notifications and user management.",
    longDesc:
      "TaloSync is a full-stack job portal built with the MERN stack (MongoDB, Express, React, Node.js). It enables secure user authentication, job listing and search, and role-based features for job seekers and recruiters. Users can browse and apply for jobs, while recruiters can post and manage listings.",
    img: "/project-imgs/TaloSync.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Socket.IO",
    ],
    git: "https://github.com/MohammedTharick25/MERN-Stack-TaloSync-JobPortal-",
    demo: "https://talosync.onrender.com/",
  },
  {
    id: 3,
    title: "Facial Expression Recognition",
    category: "AI/ML",
    shortDesc: "A CNN-based emotion classifier using Python and OpenCV.",
    longDesc:
      "This project implements a Deep Learning model using Convolutional Neural Networks (CNN) to detect human faces and classify emotions into seven categories: Angry, Disgust, Fear, Happy, Sad, Surprise, and Neutral. It features a real-time webcam interface and high accuracy on the FER2013 dataset.",
    img: "/project-imgs/FER-img.png",
    tags: ["Python", "TensorFlow", "OpenCV", "CNN"],
    git: "https://github.com/MohammedTharick25/FER-Main-1",
    demo: "#",
  },
  {
    id: 4,
    title: "Solo Leveling System",
    category: "Frontend",
    shortDesc: "Gamified productivity app inspired by the famous Manhwa.",
    longDesc:
      "A complete life-gamification system. Users can set real-life 'Quests', gain XP, and level up their stats in Strength (Fitness), Intelligence (Learning), and Agility (Productivity). It uses LocalStorage for data persistence and features a stunning anime-inspired UI.",
    img: "/project-imgs/system-interface.png",
    tags: ["JavaScript", "HTML5", "CSS3"],
    git: "https://github.com/MohammedTharick25/Solo-Leveling-System",
    demo: "https://solo-leveling-system.netlify.app/",
  },
  {
    id: 5,
    title: "Weather App",
    category: "Frontend",
    shortDesc: "Real-time weather tracking with a sleek glassmorphism UI.",
    longDesc:
      "A high-performance weather dashboard that fetches data from OpenWeather API. It provides detailed forecasts, humidity levels, and wind speeds, all wrapped in a dynamic interface that changes background based on weather conditions.",
    img: "/project-imgs/weather-app-img.png",
    tags: ["React", "API", "Tailwind", "Framer Motion"],
    git: "https://github.com/MohammedTharick25/Weather-App",
    demo: "https://weather-app-cloudapi.netlify.app/",
  },
  {
    id: 6,
    title: "Personal Portfolio",
    category: "Frontend",
    shortDesc: "A responsive portfolio website showcasing projects and skills.",
    longDesc:
      "A modern, responsive portfolio website built with React and Tailwind CSS. It features a sleek design with smooth animations, dark/light mode toggle, and a contact form. The site is fully optimized for performance and accessibility.",
    img: "/project-imgs/React portfolio.png",
    tags: ["React", "Tailwind", "Framer Motion", "React Router"],
    git: "https://github.com/MohammedTharick25/Personal-Portfolio-React",
    demo: "https://mt-personal-portfolio.netlify.app/",
  },
  {
    id: 7,
    title: "Todo App",
    category: "Full Stack",
    shortDesc:
      "A responsive and feature-rich todo application built with React and Tailwind CSS.",
    longDesc:
      "A modern, responsive todo application built with React and Tailwind CSS. It features a sleek design with smooth animations, dark/light mode toggle, and a clean UI. The app supports task creation, editing, deletion, and filtering.",
    img: "/project-imgs/mern todo app.png",
    tags: ["React", "Node", "MongoDB", "Express", "Tailwind"],
    git: "https://github.com/MohammedTharick25/MERN-Todo-App",
    demo: "https://mern-todo-app-n2cs.onrender.com/",
  },
];

/* ================= COMPONENT ================= */

const categories = ["All", "Full Stack", "Frontend", "AI/ML"];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState(null);

  /* ================= FILTER LOGIC ================= */

  const filteredProjects = projects.filter((p) => {
    const matchCategory =
      activeCategory === "All" || p.category === activeCategory;

    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());

    const matchTag = activeTag ? p.tags.includes(activeTag) : true;

    return matchCategory && matchSearch && matchTag;
  });

  return (
    <div className="pt-24 px-8 pb-20 min-h-screen relative overflow-hidden">
      <ParticlesBackground />

      {/* HEADER */}
      <div className="text-center mb-10 z-10 relative">
        <h1 className="text-6xl font-extrabold mb-4">
          My Recent <span className="text-brand">Works</span>
        </h1>
        <p className="text-gray-400 tracking-widest uppercase text-sm">
          Click a project to expand
        </p>
      </div>

      {/* SEARCH */}
      <div className="max-w-xl mx-auto mb-8 relative">
        <Search className="absolute left-4 top-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white/5 rounded-xl outline-none text-white"
        />
      </div>

      {/* CATEGORY FILTER */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full ${
              activeCategory === cat
                ? "bg-brand text-white scale-105"
                : "bg-white/5 text-gray-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* TAG FILTER */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {[...new Set(projects.flatMap((p) => p.tags))].map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className={`px-3 py-1 text-xs rounded-full ${
              activeTag === tag
                ? "bg-brand text-white"
                : "bg-white/10 text-gray-400"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        <AnimatePresence>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className={`
                  rounded-3xl overflow-hidden cursor-pointer group
                  border transition
                  ${
                    project.featured
                      ? "border-brand shadow-lg scale-[1.02]"
                      : "border-white/10"
                  }
                `}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTag(tag);
                        }}
                        className="text-[10px] bg-brand/10 px-2 py-1 rounded-full cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

                  <p className="text-gray-400 text-sm">{project.shortDesc}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No projects found 😢
            </p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ================= MODAL ================= */}

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Modal Card */}
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="
          relative
          w-full
          max-w-6xl
          h-[85vh]
          glass
          rounded-3xl
          overflow-hidden
          border border-white/10
          shadow-2xl
          flex
          flex-col
          md:flex-row
        "
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="
            absolute top-5 right-5 z-20
            p-2
            bg-black/60
            hover:bg-brand
            rounded-full
            text-white
            transition
          "
              >
                <X size={22} />
              </button>

              {/* ================= LEFT : IMAGE (40%) ================= */}

              <div className="md:w-[40%] w-full h-64 md:h-full relative overflow-hidden">
                <motion.img
                  layoutId={`img-${selectedProject.id}`}
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* ================= RIGHT : CONTENT (60%) ================= */}

              <div
                className="
            md:w-[60%]
            w-full
            h-full
            overflow-y-auto
            p-8 md:p-12
            flex
            flex-col
            justify-center
          "
              >
                {/* Tags */}
                <div className="flex gap-3 mb-5 flex-wrap">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                  text-xs
                  bg-brand/15
                  text-brand
                  px-3 py-1
                  rounded-full
                  font-bold
                  uppercase
                "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <motion.h2
                  layoutId={`title-${selectedProject.id}`}
                  className="text-3xl md:text-4xl font-extrabold mb-5"
                >
                  {selectedProject.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="
              text-gray-300
              text-base
              md:text-lg
              leading-relaxed
              mb-8
              max-w-xl
            "
                >
                  {selectedProject.longDesc}
                </motion.p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a
                    href={selectedProject.git}
                    target="_blank"
                    rel="noreferrer"
                    className="
                flex-1
                flex items-center justify-center gap-2
                bg-white text-black
                py-3
                rounded-xl
                font-bold
                hover:bg-brand
                hover:text-white
                transition
              "
                  >
                    <Github size={20} />
                    View Code
                  </a>

                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                flex-1
                flex items-center justify-center gap-2
                bg-brand text-white
                py-3
                rounded-xl
                font-bold
                hover:shadow-[0_0_20px_rgba(205,95,248,0.5)]
                transition
              "
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <div className="mt-32 text-center">
        <Link
          to="/contact"
          className="text-brand text-3xl font-bold flex items-center justify-center gap-2"
        >
          Let's Get In Touch <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
