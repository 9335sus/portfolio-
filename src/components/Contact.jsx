import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import Section from "./Section.jsx";
import { site } from "../data/site.js";

const empty = { name: "", email: "", message: "" };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email address.";
  if (v.message.trim().length < 10) e.message = "Write at least 10 characters.";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [opened, setOpened] = useState(false);

  const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const onSubmit = (ev) => {
    ev.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} (${values.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  };

  const field = "mt-1 w-full rounded-lg border bg-panel px-3 py-2 text-white focus:border-violet-400 focus:outline-none";
  return (
    <Section id="contact" title="Contact" subtitle="Open to software engineering roles and internships. Send a message or reach out directly.">
      <div className="grid gap-10 md:grid-cols-2">
        <form onSubmit={onSubmit} noValidate className="space-y-4">
          {[
            ["name", "Name", "text"],
            ["email", "Email", "email"],
          ].map(([n, label, type]) => (
            <div key={n}>
              <label htmlFor={n} className="text-sm text-slate-300">{label}</label>
              <input id={n} name={n} type={type} value={values[n]} onChange={onChange} aria-invalid={!!errors[n]}
                className={`${field} ${errors[n] ? "border-red-400" : "border-white/10"}`} />
              {errors[n] && <p className="mt-1 text-sm text-red-400">{errors[n]}</p>}
            </div>
          ))}
          <div>
            <label htmlFor="message" className="text-sm text-slate-300">Message</label>
            <textarea id="message" name="message" rows={5} value={values.message} onChange={onChange} aria-invalid={!!errors.message}
              className={`${field} ${errors.message ? "border-red-400" : "border-white/10"}`} />
            {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
          </div>
          <button type="submit" className="btn-primary"><Mail size={16} /> Open in email app</button>
          <p className="text-sm text-slate-500" role="status">
            {opened
              ? `Your email app should have opened with the message ready to send. If not, write to ${site.email}.`
              : "This opens your email app with the message filled in. Nothing is sent until you send it there."}
          </p>
        </form>
        <div className="space-y-4">
          <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-panel p-4 hover:border-violet-400/50"><Mail className="text-violet-400" />{site.email}</a>
          <a href={site.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-panel p-4 hover:border-violet-400/50"><Github className="text-violet-400" />github.com/9335sus</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-panel p-4 hover:border-violet-400/50"><Linkedin className="text-violet-400" />Sushil Agrahari on LinkedIn</a>
        </div>
      </div>
    </Section>
  );
}
