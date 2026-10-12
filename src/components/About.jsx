import Section from "./Section.jsx";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="max-w-3xl space-y-4 leading-relaxed text-slate-300">
        <p>
          I'm a Computer Science Engineering student at UCER, Prayagraj (2022–2026). I enjoy turning ideas into working
          software, from the database and REST API to the interface people actually use.
        </p>
        <p>
          My main interests are MERN stack development, REST APIs, databases, data structures and algorithms, and the
          wider craft of software engineering. I'm looking for a software engineering role where I can keep learning
          while shipping useful products.
        </p>
      </div>
    </Section>
  );
}
