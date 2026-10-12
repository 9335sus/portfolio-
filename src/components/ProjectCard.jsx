import { useState } from "react";
import { Github, ExternalLink, ImageIcon, Star } from "lucide-react";

export default function ProjectCard({ project, onOpen }) {
  const [broken, setBroken] = useState(false);
  const { title, shortDescription, image, technologies = [], category, githubUrl, liveUrl, featured, status } = project;
  return (
    <article
      onClick={() => onOpen(project)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), onOpen(project))}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${title}`}
      className={`group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border bg-panel transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] ${
        featured ? "border-violet-500/50" : "border-white/10 hover:border-violet-400/40"
      }`}
    >
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-900/40 via-ink to-violet-900/40">
        {image && !broken ? (
          <img src={image} alt={title} loading="lazy" onError={() => setBroken(true)}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-1 text-slate-500">
            <ImageIcon size={28} /><span className="text-xs">Screenshot coming soon</span>
          </div>
        )}
        {featured && (
          <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-violet-500 px-2.5 py-1 text-xs font-medium text-white">
            <Star size={12} /> Featured
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{category}</span><span>{status}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold leading-snug">{title}</h3>
        <p className="mt-2 text-sm text-slate-400">{shortDescription}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {technologies.map((t) => <span key={t} className="badge">{t}</span>)}
        </div>
        {(githubUrl || liveUrl) && (
          <div className="mt-auto flex gap-4 pt-5 text-sm">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white">
                <Github size={15} /> GitHub
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white">
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
