import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import Section from "./Section.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectDetails from "./ProjectDetails.jsx";
import { projects } from "../data/projects.js";

const CATEGORIES = ["All", "Full Stack", "Frontend", "Backend", "AI/ML", "Robotics"];

export default function Projects() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...projects]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .filter((p) => category === "All" || p.category === category)
      .filter(
        (p) =>
          !q ||
          [p.title, p.shortDescription, p.fullDescription, ...(p.technologies || [])]
            .join(" ")
            .toLowerCase()
            .includes(q)
      );
  }, [category, query]);

  return (
    <Section id="projects" title="Projects" subtitle="Things I've built. Select a project to see its features and links.">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                category === c ? "border-transparent bg-gradient-to-r from-blue-500 to-violet-500 text-white" : "border-white/10 text-slate-300 hover:border-violet-400/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="relative block md:w-72">
          <span className="sr-only">Search projects</span>
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="search" value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, description, tech"
            className="w-full rounded-lg border border-white/10 bg-panel py-2 pl-9 pr-3 text-sm text-white placeholder:text-slate-500 focus:border-violet-400 focus:outline-none"
          />
        </label>
      </div>

      {visible.length === 0 ? (
        <p className="mt-12 text-center text-slate-400">No projects match. Try another category or clear the search.</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => <ProjectCard key={p.id} project={p} onOpen={setSelected} />)}
        </div>
      )}

      <AnimatePresence>
        {selected && <ProjectDetails project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </Section>
  );
}
