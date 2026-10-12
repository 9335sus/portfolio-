import { site } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} {site.name}. Built with React, Vite and Tailwind CSS.
    </footer>
  );
}
