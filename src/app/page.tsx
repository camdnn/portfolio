"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Moon, Sun } from "lucide-react";
import { AiOutlineGithub } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";

const PROFILE = {
  name: "Camden Mann",
  tagline: "Computer Science @ Cal Poly SLO '27",
  email: "camden.mann0105@gmail.com",
  github: "https://github.com/camdnn",
  resume: "/images/Resume - Camden Mann.pdf",
};

const SKILLS = {
  languages: ["C++", "Python", "Java", "JavaScript"],
  frontend: ["React", "HTML", "CSS", "Tailwind"],
  backend: ["Node.js", "Express"],
  databases: ["PostgreSQL", "MongoDB"],
  tools: ["ROS2", "Gazebo", "MoveIt", "Git"],
};

const PROJECTS = [
  {
    title: "Algebra Learning Platform",
    blurb:
      "Project lead for interactive algebra practice site with a built-in AI chatbot, improving user support with instant hints and error explanations. Built using NoSQL persistence through MongoDB Atlas.",
    tech: ["HTML", "CSS", "JavaScript", "Express", "MongoDB"],
    videoSrc: "/videos/MuchoMathDemo.mp4",
    thumbnail: "/images/MuchoMathDemo-poster.jpg",
    codeUrl: "#",
  },
  {
    title: "Online Ordering Platform",
    blurb:
      "Built a working prototype of an ordering web app with dynamic CRUD operations, user auth, cart, and checkout. Building REST API backend using PostgreSQL and Express.js for data management. Currently integrating real-time data sync with POS systems to pull menus, prices, and inventory into the app.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind", "Stripe"],
    videoSrc: "/videos/PretzlDemo.mp4",
    thumbnail: "/images/PretzlDemo-poster.jpg",
    codeUrl: "#",
    inProgress: true,
  },
  {
    title: "Lower Limb Exoskeleton Assist Club (LLEAP)",
    blurb:
      "Contributing to student-led exoskeleton project to aid individuals with lower limb mobility challenges. Conducting robotic simulation using ROS2, Gazebo, MoveIt and rviz frameworks. Collaboration with electrical engineering and biomechanical teams.",
    tech: ["ROS2", "Gazebo", "MoveIt", "rviz", "Python"],
    imageSrc: "/images/ProjectLLEAP.png",
    codeUrl: "#",
    inProgress: true,
  },
];

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-4 right-4 p-2.5 rounded-full transition-all duration-300 z-50 shadow-lg ${
          darkMode
            ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
            : "bg-white text-slate-700 hover:bg-slate-100"
        }`}
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            {PROFILE.name}
          </h1>
          <p
            className={`text-base mb-6 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {PROFILE.tagline}
          </p>
          <nav className="flex gap-5">
            <a
              href={`mailto:${PROFILE.email}`}
              className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                darkMode
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                darkMode
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              <AiOutlineGithub className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                darkMode
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              <GrDocumentText className="h-4 w-4" />
              Resume
            </a>
          </nav>
        </motion.section>

        {/* Skills Section */}
        <section className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {Object.values(SKILLS)
                .flat()
                .map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: idx * 0.02 }}
                    className={`text-sm px-3 py-1.5 rounded-full font-medium transition-all hover:scale-105 ${
                      darkMode
                        ? "text-slate-200 bg-slate-800/80 hover:bg-slate-700"
                        : "text-slate-700 bg-white hover:bg-slate-100 shadow-sm"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="space-y-8">
            {PROJECTS.map((p, i) => (
              <ProjectCard
                key={i}
                project={p}
                index={i}
                darkMode={darkMode}
                setShowPopup={setShowPopup}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div
            className={`text-sm ${
              darkMode ? "text-slate-500" : "text-slate-500"
            }`}
          >
            © {new Date().getFullYear()} {PROFILE.name}
          </div>
        </footer>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className={`relative max-w-md w-full p-6 rounded-2xl shadow-2xl ${
              darkMode ? "bg-slate-900" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">Private Repository</h3>
            <p
              className={`mb-6 text-sm ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              This repo is private. Feel free to message me for a link!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className={`w-full py-2.5 px-4 rounded-lg font-medium transition-colors ${
                darkMode
                  ? "bg-slate-800 hover:bg-slate-700 text-slate-100"
                  : "bg-slate-900 hover:bg-slate-800 text-white"
              }`}
            >
              Got it
            </button>
          </motion.div>
        </div>
      )}
    </main>
  );
}

function ProjectCard({
  project,
  index,
  darkMode,
  setShowPopup,
}: {
  project: {
    title: string;
    blurb: string;
    tech: string[];
    videoSrc?: string;
    imageSrc?: string;
    thumbnail?: string;
    codeUrl?: string;
    liveUrl?: string;
    inProgress?: boolean;
  };
  index: number;
  darkMode: boolean;
  setShowPopup: (show: boolean) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`rounded-2xl overflow-hidden transition-all ${
        darkMode
          ? "bg-slate-900/50 hover:bg-slate-900/70"
          : "bg-white hover:shadow-lg shadow-md"
      }`}
    >
      <div
        className={`aspect-video overflow-hidden ${
          darkMode ? "bg-slate-800" : "bg-slate-100"
        }`}
      >
        {project.videoSrc ? (
          <video
            className="h-full w-full object-cover"
            src={project.videoSrc}
            poster={project.thumbnail}
            controls
            preload="metadata"
          />
        ) : project.imageSrc ? (
          <img
            className="h-full w-full object-cover"
            src={project.imageSrc}
            alt={project.title}
          />
        ) : null}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          {project.title}
          {project.inProgress && (
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                darkMode
                  ? "bg-amber-500/20 text-amber-300"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              In Progress
            </span>
          )}
        </h3>

        <p
          className={`mb-4 text-sm leading-relaxed ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {project.blurb}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className={`text-xs px-2.5 py-1 rounded-md ${
                darkMode
                  ? "text-slate-300 bg-slate-800"
                  : "text-slate-600 bg-slate-100"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {project.codeUrl && (
          <button
            onClick={() => setShowPopup(true)}
            className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
              darkMode
                ? "text-slate-300 hover:text-white"
                : "text-slate-700 hover:text-slate-900"
            }`}
          >
            <AiOutlineGithub className="h-4 w-4" />
            View code
          </button>
        )}
      </div>
    </motion.article>
  );
}
