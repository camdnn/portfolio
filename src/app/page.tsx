"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Moon,
  Sun,
  ExternalLink,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { AiOutlineGithub } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

// ── Data ─────────────────────────────────────────────────────────────────────

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
    title: "Constryke - Irvine Hacks 2026",
    blurb:
      "Built in under 32 hours, Constryke is an AI-driven fraud detection system designed to prevent real estate wire transfer scams. The platform parses escrow documents and email communications, extracts structured transaction data, and analyzes email metadata to detect Business Email Compromise patterns such as last-minute instruction changes, pressure language, routing mismatches, and domain impersonation.",
    tech: ["React", "Python", "Next.js"],
    videoSrc: "/videos/constryke.mp4",
    thumbnail: "/images/constryke.png",
    liveUrl: "",
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
      "Building simulation infrastructure for a student-designed lower-limb exoskeleton to aid individuals with mobility challenges. Modeling joint kinematics and validating motor control algorithms in ROS2/Gazebo before hardware deployment.",
    tech: ["ROS2", "Gazebo", "MoveIt", "Python", "rviz"],
    imageSrc: "/images/ProjectLLEAP.png",
    codeUrl: null,
    inProgress: true,
  },
];

// ── Animation helpers ─────────────────────────────────────────────────────────

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Page() {
  const [dark, setDark] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const scrolled = useScrolled();

  const bg = dark ? "#0C0C0B" : "#F8F7F4";
  const fg = dark ? "#F0EEE9" : "#1A1917";
  const muted = dark ? "#6B6860" : "#9B978F";
  const subtle = dark ? "#2E2C29" : "#E8E5DF";
  const cardBg = dark ? "#141412" : "#FFFFFF";
  const cardBorder = dark ? "#252320" : "#ECEAE5";
  const accent = dark ? "#B2B0AC" : "#5C5A57";
  const accentHover = dark ? "#CFCCC7" : "#3A3836";

  return (
    <div
      style={{ background: bg, color: fg }}
      className="min-h-screen transition-colors duration-500"
    >
      {/* Grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      {/* ── Navigation ───────────────────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: scrolled
            ? dark
              ? "rgba(12,12,11,0.82)"
              : "rgba(248,247,244,0.82)"
            : "transparent",
          borderBottom: scrolled
            ? `1px solid ${subtle}`
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
        }}
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span
            className="text-sm font-bold tracking-[0.18em] uppercase select-none"
            style={{ color: fg }}
          >
            CM
          </span>

          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8">
              {["Projects", "Skills", "Contact"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="relative text-sm font-medium group transition-colors duration-200"
                  style={{ color: muted }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = fg)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = muted)}
                >
                  {label}
                  <span
                    className="absolute -bottom-px left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                    style={{ background: fg }}
                  />
                </a>
              ))}
            </nav>

            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg transition-all duration-200"
              style={{ color: muted }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = fg;
                (e.currentTarget as HTMLElement).style.background = subtle;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = muted;
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
              }}
              aria-label="Toggle dark mode"
            >
              {dark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Ambient orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-64 -right-64 w-[700px] h-[700px] rounded-full"
            style={{
              background: dark
                ? "radial-gradient(circle, rgba(178,176,172,0.10) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(178,176,172,0.08) 0%, transparent 70%)",
            }}
          />
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 7,
            }}
            className="absolute -bottom-64 -left-64 w-[600px] h-[600px] rounded-full"
            style={{
              background: dark
                ? "radial-gradient(circle, rgba(178,176,172,0.07) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(178,176,172,0.05) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-8"
          >
            {/* Name — editorial split with stroke treatment */}
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(4rem,12vw,9rem)] font-bold tracking-tight leading-[0.9] select-none"
            >
              <span className="block" style={{ color: fg }}>
                Camden
              </span>
              <span
                className="block"
                style={{
                  color: "transparent",
                  WebkitTextStroke: `2px ${dark ? "#4A4845" : "#C5C1BA"}`,
                }}
              >
                Mann
              </span>
            </motion.h1>

            {/* Tagline + bio */}
            <motion.div variants={fadeUp} className="max-w-lg space-y-3 pt-2">
              <p className="text-base font-semibold" style={{ color: accent }}>
                {PROFILE.tagline}
              </p>
              <p className="text-sm leading-[1.75]" style={{ color: muted }}>
                {PROFILE.bio}
              </p>
            </motion.div>

            {/* CTA row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
                style={{ background: fg, color: bg }}
              >
                View Work
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80"
                style={{
                  border: `1px solid ${subtle}`,
                  color: muted,
                }}
              >
                <Mail className="h-3.5 w-3.5" />
                Get in touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-6 pt-1"
              style={{ color: muted }}
            >
              {[
                {
                  href: PROFILE.github,
                  icon: <AiOutlineGithub className="h-[18px] w-[18px]" />,
                  label: "GitHub",
                },
                {
                  href: PROFILE.linkedin,
                  icon: <FaLinkedin className="h-[18px] w-[18px]" />,
                  label: "LinkedIn",
                },
                {
                  href: PROFILE.resume,
                  icon: <GrDocumentText className="h-[18px] w-[18px]" />,
                  label: "Resume",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                  style={{ color: "inherit" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = muted)}
                >
                  {icon}
                  {label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" style={{ color: subtle }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Projects ─────────────────────────────────────────────────────── */}
      <section
        id="projects"
        className="py-28"
        style={{ borderTop: `1px solid ${subtle}` }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <motion.div
              variants={fadeUp}
              className="flex items-end justify-between mb-16"
            >
              <div>
                <p
                  className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-3"
                  style={{ color: dark ? "#4A4845" : "#B5B1AA" }}
                >
                  Selected Work
                </p>
                <h2
                  className="text-4xl md:text-5xl font-bold tracking-tight"
                  style={{ color: fg }}
                >
                  Projects
                </h2>
              </div>
              <span
                className="text-sm font-medium tabular-nums hidden sm:block"
                style={{ color: dark ? "#4A4845" : "#B5B1AA" }}
              >
                {PROJECTS.length} projects
              </span>
            </motion.div>
          </Section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {PROJECTS.map((project, i) => (
              <ProjectCard
                key={i}
                project={project}
                index={i}
                dark={dark}
                cardBg={cardBg}
                cardBorder={cardBorder}
                muted={muted}
                subtle={subtle}
                fg={fg}
                accent={accent}
                accentHover={accentHover}
                setShowPopup={setShowPopup}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────────────────────── */}
      <section
        id="skills"
        className="py-28"
        style={{ borderTop: `1px solid ${subtle}` }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <motion.div variants={fadeUp} className="mb-16">
              <p
                className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-3"
                style={{ color: dark ? "#4A4845" : "#B5B1AA" }}
              >
                Capabilities
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold tracking-tight"
                style={{ color: fg }}
              >
                Skills
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {Object.entries(SKILLS).map(([category, skills], i) => (
                <motion.div
                  key={category}
                  variants={fadeUp}
                  className="py-8"
                  style={{
                    paddingLeft: i % 2 === 1 ? "3rem" : "0",
                    paddingRight: i % 2 === 0 ? "3rem" : "0",
                    borderBottom: i < 2 ? `1px solid ${subtle}` : undefined,
                    borderLeft: i % 2 === 1 ? `1px solid ${subtle}` : undefined,
                  }}
                >
                  <h3
                    className="text-[10px] tracking-[0.2em] uppercase font-bold mb-5"
                    style={{ color: dark ? "#4A4845" : "#B5B1AA" }}
                  >
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.04 }}
                        className="text-sm px-3.5 py-1.5 rounded-lg font-medium cursor-default transition-colors duration-200"
                        style={{
                          background: dark ? "#1C1B18" : "#ECEAE5",
                          color: muted,
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            dark ? "#282621" : "#E3E0D9";
                          (e.currentTarget as HTMLElement).style.color = fg;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            dark ? "#1C1B18" : "#ECEAE5";
                          (e.currentTarget as HTMLElement).style.color = muted;
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-28"
        style={{ borderTop: `1px solid ${subtle}` }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <motion.div variants={fadeUp} className="max-w-2xl">
              <p
                className="text-[11px] tracking-[0.22em] uppercase font-semibold mb-3"
                style={{ color: dark ? "#4A4845" : "#B5B1AA" }}
              >
                Get in touch
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]"
                style={{ color: fg }}
              >
                Let&apos;s build
                <br />
                something great.
              </h2>
              <p
                className="text-sm leading-[1.75] mb-10 max-w-md"
                style={{ color: muted }}
              >
                I&apos;m open to internships, freelance projects, and
                interesting collaborations. Drop me a line anytime.
              </p>
              <ContactEmail
                email={PROFILE.email}
                accent={accent}
                accentHover={accentHover}
              />
            </motion.div>
          </Section>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer
        className="py-8"
        style={{
          borderTop: `1px solid ${subtle}`,
          color: dark ? "#4A4845" : "#B5B1AA",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <span>
            © {new Date().getFullYear()} {PROFILE.name}
          </span>
          <div className="flex items-center gap-6">
            {[
              { href: PROFILE.github, label: "GitHub" },
              { href: PROFILE.linkedin, label: "LinkedIn" },
              { href: PROFILE.resume, label: "Resume" },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200"
                style={{ color: "inherit" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── Private Repo Modal ────────────────────────────────────────────── */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="relative max-w-md w-full p-8 rounded-2xl shadow-2xl"
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              color: fg,
            }}
          >
            <h3 className="text-xl font-semibold mb-2">Private Repository</h3>
            <p
              className="mb-7 text-sm leading-relaxed"
              style={{ color: muted }}
            >
              This repo is private. Feel free to message me for a link!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{ background: fg, color: bg }}
            >
              Got it
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

// ── ContactEmail ──────────────────────────────────────────────────────────────

function ContactEmail({
  email,
  accent,
  accentHover,
}: {
  email: string;
  accent: string;
  accentHover: string;
}) {
  const [hovered, setHovered] = useState(false);
  const color = hovered ? accentHover : accent;
  return (
    <a
      href={`mailto:${email}`}
      className="inline-flex items-center gap-2.5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="text-xl md:text-2xl font-semibold transition-colors duration-200"
        style={{ color }}
      >
        {email}
      </span>
      <ArrowUpRight
        className="h-5 w-5 transition-all duration-200"
        style={{
          color,
          transform: hovered ? "translate(2px, -2px)" : "translate(0,0)",
        }}
      />
    </a>
  );
}

// ── ProjectCard ───────────────────────────────────────────────────────────────

type ProjectType = {
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

function ProjectCard({
  project,
  index,
  dark,
  cardBg,
  cardBorder,
  muted,
  subtle,
  fg,
  accent,
  accentHover,
  setShowPopup,
}: {
  project: ProjectType;
  index: number;
  dark: boolean;
  cardBg: string;
  cardBorder: string;
  muted: string;
  subtle: string;
  fg: string;
  accent: string;
  accentHover: string;
  setShowPopup: (v: boolean) => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.12,
        ease: EASE,
      }}
      className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: cardBg,
        border: `1px solid ${cardBorder}`,
        color: fg,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = dark
          ? "0 0 0 1px #3A3835"
          : "0 8px 40px rgba(0,0,0,0.10)";
        (e.currentTarget as HTMLElement).style.borderColor = dark
          ? "#3A3835"
          : "#D8D5CE";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.borderColor = cardBorder;
      }}
    >
      {/* Media */}
      {(project.videoSrc || project.imageSrc) && (
        <div
          className="relative aspect-video overflow-hidden"
          style={{ background: dark ? "#1A1917" : "#ECEAE5" }}
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
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              src={project.imageSrc}
              alt={project.title}
            />
          )}
          {project.inProgress && (
            <span
              className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full font-semibold shadow"
              style={{ background: "rgba(178,176,172,0.85)", color: "#1A1917" }}
            >
              In Progress
            </span>
          )}
        </div>
      )}

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold" style={{ color: fg }}>
            {project.title}
          </h3>
          {!project.videoSrc && !project.imageSrc && project.inProgress && (
            <span
              className="text-xs px-2 py-0.5 rounded-full font-semibold"
              style={{
                background: dark
                  ? "rgba(178,176,172,0.15)"
                  : "rgba(92,90,87,0.12)",
                color: dark ? "#B2B0AC" : "#5C5A57",
              }}
            >
              In Progress
            </span>
          )}
        </div>

        <p className="text-sm leading-[1.75] flex-1" style={{ color: muted }}>
          {project.blurb}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md font-medium"
              style={{
                background: dark ? "#1C1B18" : "#F0EEE9",
                color: muted,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div
          className="flex items-center gap-5 pt-3"
          style={{ borderTop: `1px solid ${subtle}` }}
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
              style={{ color: accent }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = accentHover)
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = accent)
              }
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Site
            </a>
          )}
          {project.codeUrl && (
            <button
              onClick={() =>
                project.codeUrl === "#"
                  ? setShowPopup(true)
                  : window.open(project.codeUrl!, "_blank")
              }
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 cursor-pointer"
              style={{ color: muted }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = fg)
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = muted)
              }
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
