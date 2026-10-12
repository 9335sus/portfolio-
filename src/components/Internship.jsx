import Section from "./Section.jsx";
import { Briefcase } from "lucide-react";
import { internship } from "../data/site.js";

export default function Internship() {
  return (
    <Section id="internship" title="Internship">
      <div className="max-w-3xl rounded-xl border border-white/10 bg-panel p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 p-3 text-violet-300"><Briefcase /></div>
          <div>
            <h3 className="text-xl font-semibold">{internship.role}, {internship.company}</h3>
            <p className="text-sm text-slate-400">{internship.meta}</p>
          </div>
        </div>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-300 marker:text-violet-400">
          {internship.points.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </div>
    </Section>
  );
}
