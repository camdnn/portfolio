"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Moon, Sun, ExternalLink } from "lucide-react";
import { AiOutlineGithub } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

import { link } from "fs";

const PROFILE = {
  name: "Camden Mann",
  tagline: "Full-Stack Engineer · Cal Poly SLO '27",
  bio: "I build production web applications and robotics systems. Comfortable across the stack — REST API design, React frontends, relational databases, and ROS2 simulation.",
  email: "camden.mann0105@gmail.com",
  github: "https://github.com/camdnn",
  linkedin: "https://www.linkedin.com/in/camden-mann-461249328/",
  resume: "/images/Resume - Camden Mann.pdf",
};

const SKILLS: Record<string, string[]> = {
  Languages: ["C++", "Python", "Java", "JavaScript"],
  Frontend: ["React", "HTML", "CSS", "Tailwind"],
  Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  Tools: ["ROS2", "Gazebo", "MoveIt", "Git"],
};

const PROJECTS = [
  {
    title: "CalPoly Scheduler",
    blurb:
      "Full-stack course scheduling tool actively used by Cal Poly students. Built a Scrapy web scraper to pull live course data, professor ratings, and seat availability into PostgreSQL. Implements conflict-free schedule generation with time constraint and preference filters.",
    tech: ["React", "Python", "Scrapy", "PostgreSQL", "Node.js"],
    imageSrc: "/images/calpolyscheduler.png",
    liveUrl: "https://www.calpolyscheduler.com/",
    codeUrl: null,
    inProgress: false,
  },
  {
    title: "Online Ordering Platform",
    blurb:
      "Full-stack restaurant ordering platform with user auth, cart, and Stripe checkout. Express + PostgreSQL REST API handles menu, pricing, and inventory. Currently architecting a real-time sync layer to pull live data from POS systems.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Stripe", "Tailwind"],
    videoSrc: "/videos/PretzlDemo.mp4",
    thumbnail: "/images/PretzlDemo-poster.jpg",
    codeUrl: "#",
    inProgress: true,
  },
  {
    title: "AI Algebra Tutor",
    blurb:
      "Led a team building an AI-powered algebra tutoring platform. Architected the full-stack system (Express + MongoDB Atlas) and integrated an LLM-backed chatbot that delivers real-time hints and step-by-step error explanations.",
    tech: ["JavaScript", "Express", "MongoDB", "HTML", "CSS"],
    videoSrc: "/videos/MuchoMathDemo.mp4",
    thumbnail: "/images/MuchoMathDemo-poster.jpg",
    codeUrl: "#",
    inProgress: false,
  },
  {
    title: "Lower Limb Exoskeleton (LLEAP)",
    blurb:
      "Building simulation infrastructure for a student-designed lower-limb exoskeleton to aid individuals with mobility challenges. Modeling joint kinematics and validating motor control algorithms in ROS2/Gazebo before hardware deployment. Cross-functional collaboration with EE and biomechanics sub-teams.",
    tech: ["ROS2", "Gazebo", "MoveIt", "Python", "rviz"],
    imageSrc: "/images/ProjectLLEAP.png",
    codeUrl: null,
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
          className="mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-1">
            {PROFILE.name}
          </h1>
          <p
            className={`text-base font-medium mb-3 ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {PROFILE.tagline}
          </p>
          <p
            className={`text-sm mb-6 max-w-xl leading-relaxed ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {PROFILE.bio}
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
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                darkMode
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              <FaLinkedin className="h-4 w-4" />
              LinkedIn
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

        {/* Projects */}
        <section className="mb-12">
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

        {/* Skills Section */}
        <section className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-5">Skills</h2>
            <div className="space-y-3">
              {Object.entries(SKILLS).map(([category, skills]) => (
                <div
                  key={category}
                  className="flex flex-wrap items-baseline gap-x-3 gap-y-2"
                >
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider w-20 shrink-0 ${
                      darkMode ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    {category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`text-sm px-3 py-1 rounded-full font-medium ${
                          darkMode
                            ? "text-slate-200 bg-slate-800/80"
                            : "text-slate-700 bg-white shadow-sm"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div
            className={`text-sm ${
              darkMode ? "text-slate-500" : "text-slate-500"
            }`}
          >
            © {new Date().getFullYear()} {PROFILE.name}
          </div>
        </footer>
      </div>

      {/* Private Repo Popup */}
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
    codeUrl?: string | null;
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
      {(project.videoSrc || project.imageSrc) && (
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
          ) : (
            <img
              className="h-full w-full object-cover"
              src={project.imageSrc}
              alt={project.title}
            />
          )}
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
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
        </div>

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

        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                darkMode
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              <ExternalLink className="h-4 w-4" />
              Live Site
            </a>
          )}
          {project.codeUrl && (
            <button
              onClick={() => {
                if (project.codeUrl === "#") {
                  setShowPopup(true);
                } else {
                  window.open(project.codeUrl!, "_blank");
                }
              }}
              className={`cursor-pointer inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                darkMode
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              <AiOutlineGithub className="h-4 w-4" />
              View Code
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
