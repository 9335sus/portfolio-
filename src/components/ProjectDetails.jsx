import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Github, ExternalLink, Check } from "lucide-react";

export default function ProjectDetails({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  const { title, fullDescription, image, technologies = [], features = [], category, status, createdAt, githubUrl, liveUrl } = project;
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog" aria-modal="true" aria-label={title}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-panel"
        initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {image && <img src={image} alt={title} className="aspect-video w-full object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />}
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold">{title}</h3>
            <button onClick={onClose} aria-label="Close details" className="rounded-md p-1 text-slate-400 hover:text-white"><X /></button>
          </div>
          <p className="mt-1 text-sm text-slate-400">{category} · {status}{createdAt ? ` · ${createdAt}` : ""}</p>
          <p className="mt-5 leading-relaxed text-slate-300">{fullDescription}</p>
          {features.length > 0 && (
            <>
              <h4 className="mt-6 font-display font-semibold text-white">Features</h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300"><Check size={16} className="mt-0.5 shrink-0 text-violet-400" />{f}</li>
                ))}
              </ul>
            </>
          )}
          <div className="mt-6 flex flex-wrap gap-1.5">{technologies.map((t) => <span key={t} className="badge">{t}</span>)}</div>
          {(githubUrl || liveUrl) && (
            <div className="mt-7 flex flex-wrap gap-3">
              {githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer" className="btn-primary"><Github size={16} /> GitHub</a>}
              {liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer" className="btn-ghost"><ExternalLink size={16} /> Live Demo</a>}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
