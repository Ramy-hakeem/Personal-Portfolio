import React, { useState, useEffect } from "react";
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
    shortDesc:
      "A full-stack real estate web application for browsing, listing, and managing properties.",
    longDesc:
      "A modern full-stack real estate platform built using the MERN stack with real-time messaging, property search, user authentication, and a responsive UI.",
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

  // Reset filters when category changes
  useEffect(() => {
    setActiveTag(null);
  }, [activeCategory]);

  // Reset search when category changes
  useEffect(() => {
    setSearch("");
  }, [activeCategory]);

  /* ================= FILTER LOGIC ================= */
  const filteredProjects = projects.filter((p) => {
    const searchTerm = search.trim().toLowerCase();

    const matchCategory =
      activeCategory === "All" || p.category === activeCategory;

    const matchSearch =
      searchTerm === "" ||
      p.title.toLowerCase().includes(searchTerm) ||
      p.shortDesc.toLowerCase().includes(searchTerm) ||
      p.longDesc.toLowerCase().includes(searchTerm);

    const matchTag = activeTag ? p.tags.includes(activeTag) : true;

    return matchCategory && matchSearch && matchTag;
  });

  // Extract unique tags from filtered projects
  const availableTags = [
    ...new Set(
      projects
        .filter(
          (p) => activeCategory === "All" || p.category === activeCategory,
        )
        .flatMap((p) => p.tags),
    ),
  ];

  // Clear tag filter if selected tag is no longer available
  useEffect(() => {
    if (activeTag && !availableTags.includes(activeTag)) {
      setActiveTag(null);
    }
  }, [activeCategory, activeTag, availableTags]);

  // Handle image errors
  const handleImageError = (e) => {
    e.target.src =
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23222"%3E%3C/rect%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23666" font-family="Arial" font-size="20"%3ENo Image%3C/text%3E%3C/svg%3E';
    e.target.alt = "Image not available";
  };

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
      <div className="max-w-xl mx-auto mb-8 relative z-10">
        <Search className="absolute left-4 top-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search projects by title or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white/5 rounded-xl outline-none text-white focus:ring-2 focus:ring-brand transition"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-3 text-gray-500 hover:text-white transition"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* CATEGORY FILTER */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap z-10 relative">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              activeCategory === cat
                ? "bg-brand text-white scale-105 shadow-lg shadow-brand/30"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* TAG FILTER */}
      {availableTags.length > 0 && (
        <div className="flex justify-center gap-3 mb-12 flex-wrap z-10 relative">
          {availableTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${
                activeTag === tag
                  ? "bg-brand text-white scale-105"
                  : "bg-white/10 text-gray-400 hover:bg-white/20"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* PROJECT GRID */}
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                onClick={() => setSelectedProject(project)}
                className={`
                  rounded-3xl overflow-hidden cursor-pointer group
                  border border-white/10 
                  bg-gradient-to-b from-white/5 to-transparent
                  hover:border-brand/50 
                  hover:shadow-lg 
                  hover:shadow-brand/10
                  transition-all duration-300
                `}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-56 bg-gray-800">
                  <img
                    src={project.img}
                    alt={project.title}
                    onError={handleImageError}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content - Always visible */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTag(tag);
                        }}
                        className="text-[10px] bg-brand/20 text-brand px-2 py-1 rounded-full cursor-pointer hover:bg-brand/40 transition"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] bg-white/10 px-2 py-1 rounded-full text-gray-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-brand transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Category Badge */}
                  <span className="inline-block text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300 mb-3">
                    {project.category}
                  </span>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* View Details indicator */}
                  <div className="mt-4 flex items-center text-brand text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Click to view details</span>
                    <ArrowRight
                      size={14}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center col-span-full text-gray-500 text-lg py-12"
            >
              <p>No projects found 😢</p>
              <p className="text-sm text-gray-400 mt-2">
                Try adjusting your filters or search terms
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Result count */}
      {filteredProjects.length > 0 && (
        <p className="text-center text-gray-400 mt-8 text-sm relative z-10">
          Showing {filteredProjects.length} project
          {filteredProjects.length > 1 ? "s" : ""}
        </p>
      )}

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
                  hover:scale-110
                "
              >
                <X size={22} />
              </button>

              {/* LEFT : IMAGE */}
              <div className="md:w-[40%] w-full h-64 md:h-full relative overflow-hidden">
                <motion.img
                  layoutId={`img-${selectedProject.id}`}
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* RIGHT : CONTENT */}
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
                        tracking-wider
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <motion.h2
                  layoutId={`title-${selectedProject.id}`}
                  className="text-3xl md:text-4xl font-extrabold mb-3"
                >
                  {selectedProject.title}
                </motion.h2>

                {/* Category */}
                <span className="inline-block text-sm bg-white/10 px-4 py-1 rounded-full text-gray-300 mb-5 w-fit">
                  {selectedProject.category}
                </span>

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
                      hover:scale-105
                      hover:shadow-lg
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
                      hover:shadow-[0_0_30px_rgba(205,95,248,0.5)]
                      transition
                      hover:scale-105
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
      <div className="mt-32 text-center relative z-10">
        <Link
          to="/contact"
          className="text-brand text-3xl font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all duration-300 group"
        >
          Let's Get In Touch
          <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
