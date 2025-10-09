"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Moon, Sun } from "lucide-react";
import { AiOutlineGithub } from "react-icons/ai";

const PROFILE = {
  name: "Camden Mann",
  tagline: "Computer Science @ Cal Poly SLO '27",
  email: "camden.mann0105@gmail.com",
  github: "https://github.com/camdnn",
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
        darkMode ? "bg-slate-900 text-slate-100" : "bg-white text-slate-900"
      }`}
    >
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-6 right-6 p-3 rounded-full transition-all duration-300 z-50 ${
          darkMode
            ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
        }`}
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      {/* Header */}
      <section
        className={`px-6 pt-20 pb-10 max-w-4xl mx-auto border-b ${
          darkMode ? "border-slate-700" : "border-slate-200"
        }`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold tracking-tight mb-3">
            {PROFILE.name}
          </h1>
          <p
            className={`text-lg mb-8 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {PROFILE.tagline}
          </p>
          <nav className="flex gap-6">
            <a
              href={`mailto:${PROFILE.email}`}
              className={`inline-flex items-center gap-2 text-sm transition-colors ${
                darkMode
                  ? "text-slate-400 hover:text-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 text-sm transition-colors ${
                darkMode
                  ? "text-slate-400 hover:text-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <AiOutlineGithub className="h-4 w-4" />
              GitHub
            </a>
          </nav>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="px-6 py-5 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="space-y-10">
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
      <footer
        className={`px-6 py-10 mt-20 border-t ${
          darkMode ? "border-slate-700" : "border-slate-200"
        }`}
      >
        <div
          className={`max-w-4xl mx-auto text-sm ${
            darkMode ? "text-slate-500" : "text-slate-500"
          }`}
        >
          © {new Date().getFullYear()} {PROFILE.name}
        </div>
      </footer>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowPopup(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className={`relative max-w-md w-full p-6 rounded-lg shadow-xl ${
              darkMode ? "bg-slate-800" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-semibold mb-3">Private Repository</h3>
            <p
              className={`mb-6 ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              This repo is private. Feel free to message me for a link!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className={`w-full py-2.5 px-4 rounded-lg font-medium transition-colors ${
                darkMode
                  ? "bg-slate-700 hover:bg-slate-600 text-slate-100"
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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`border-b pb-5 last:border-b-0 ${
        darkMode ? "border-slate-700" : "border-slate-200"
      }`}
    >
      <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
        {project.title}
        {project.inProgress && (
          <span
            className={`text-xs px-2.5 py-1 rounded-full font-medium ${
              darkMode
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                : "bg-amber-50 text-amber-700 border border-amber-200"
            }`}
          >
            In Progress
          </span>
        )}
      </h3>

      <div
        className={`aspect-video mb-6 rounded-lg overflow-hidden border ${
          darkMode
            ? "bg-slate-800 border-slate-700"
            : "bg-slate-100 border-slate-200"
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

      <p
        className={`mb-6 leading-relaxed text-base ${
          darkMode ? "text-slate-400" : "text-slate-600"
        }`}
      >
        {project.blurb}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t, idx) => (
          <span
            key={idx}
            className={`text-xs px-3 py-1.5 rounded-md ${
              darkMode
                ? "text-slate-300 bg-slate-800"
                : "text-slate-600 bg-slate-100"
            }`}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-6">
        {project.codeUrl && (
          <button
            onClick={() => setShowPopup(true)}
            className={`inline-flex items-center gap-2 text-sm transition-colors cursor-pointer ${
              darkMode
                ? "text-slate-400 hover:text-slate-200"
                : "text-slate-600 hover:text-slate-900"
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
