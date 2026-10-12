import Section from "./Section.jsx";
import { skills } from "../data/skills.js";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="rounded-xl border border-white/10 bg-panel p-5">
            <h3 className="text-base font-semibold">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((s) => <span key={s} className="badge">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
