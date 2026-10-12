import Section from "./Section.jsx";
import { GraduationCap } from "lucide-react";
import { education } from "../data/site.js";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="relative max-w-3xl space-y-8 border-l border-white/15 pl-8">
        {education.map((e) => (
          <li key={e.school + e.degree} className="relative">
            <span className="absolute -left-[2.9rem] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-white"><GraduationCap size={16} /></span>
            <h3 className="text-lg font-semibold">{e.degree}</h3>
            <p className="text-slate-300">{e.school}</p>
            <p className="text-sm text-slate-400">{e.year}{e.score ? ` · ${e.score}` : ""}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
