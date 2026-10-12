import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "../data/site.js";

const links = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];
const idFor = (l) => (l === "Experience" ? "internship" : l.toLowerCase());

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#home" className="font-display text-lg font-bold text-white">
          {site.name.split(" ")[0]}<span className="gradient-text">.dev</span>
        </a>
        <ul className="hidden gap-7 text-sm md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${idFor(l)}`} className="text-slate-400 transition hover:text-white">{l}</a>
            </li>
          ))}
        </ul>
        <button className="md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="space-y-1 border-t border-white/10 px-5 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${idFor(l)}`} onClick={() => setOpen(false)} className="block py-2 text-slate-300">{l}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
