import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, Mail, FolderOpen } from "lucide-react";
import { site } from "../data/site.js";

function useTypewriter(words) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!deleting) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDeleting(true), 1200);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) { setDeleting(false); setI(i + 1); }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);
  return text;
}

export default function Hero() {
  const role = useTypewriter(site.roles);
  const initials = site.name.split(" ").map((n) => n[0]).join("");
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-violet-600/25 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-28 md:grid-cols-[1.4fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-slate-400">Hi, I'm</p>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight sm:text-6xl">
            <span className="gradient-text">{site.name}</span>
          </h1>
          <p className="mt-4 h-8 font-display text-xl text-slate-200 sm:text-2xl" aria-label="Aspiring Software Engineer | MERN Stack Developer">
            {role}<span className="ml-0.5 animate-pulse text-violet-400">|</span>
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-slate-400">{site.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary"><FolderOpen size={16} /> View Projects</a>
            <a href={site.resume} download className="btn-ghost"><Download size={16} /> Download Resume</a>
            <a href="#contact" className="btn-ghost"><Mail size={16} /> Contact Me</a>
          </div>
          <div className="mt-8 flex gap-4">
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 transition hover:text-white"><Github /></a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 transition hover:text-white"><Linkedin /></a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="mx-auto">
          <div className="rounded-full bg-gradient-to-br from-blue-500 to-violet-500 p-1 shadow-[0_0_60px_rgba(139,92,246,0.35)]">
            {site.profileImage ? (
              <img src={site.profileImage} alt={site.name} className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72" />
            ) : (
              <div className="flex h-56 w-56 items-center justify-center rounded-full bg-panel font-display text-6xl font-bold text-white sm:h-72 sm:w-72">{initials}</div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
