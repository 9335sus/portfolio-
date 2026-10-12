# Sushil Agrahari: Portfolio

React + Vite + Tailwind CSS + Framer Motion + Lucide icons. No backend.

## Setup

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## How to add a project (the only file you edit: `src/data/projects.js`)

1. Open `src/data/projects.js`.
2. Copy an existing object and paste it inside the `projects` array (add a comma between objects).
3. Give it a **new unique `id`** and fill in the fields.
4. Save. The card appears automatically, sorted by `createdAt` (newest first).

```js
{
  id: "project-005",
  title: "E-Commerce Website",
  shortDescription: "A responsive e-commerce application.",
  fullDescription: "A full-stack shopping application built with modern web technologies.",
  image: "/projects/ecommerce.png",   // file in public/projects/, or "" for a placeholder
  technologies: ["React", "Node.js", "MongoDB"],
  category: "Full Stack",             // Full Stack | Frontend | Backend | AI/ML | Robotics
  features: ["Product listing", "Search and filtering", "Shopping cart"],
  githubUrl: "https://github.com/your-username/your-repo", // "" hides the button
  liveUrl: "",                        // "" hides the button
  featured: false,                    // true highlights the card
  status: "In Progress",
  createdAt: "2026-10-12"             // YYYY-MM-DD
}
```

Notes
- Filters, search, the modal, and the grid all read from this array, so no component changes are needed.
- To add a new filter category, add its name to `CATEGORIES` in `src/components/Projects.jsx` (one line).
- Two projects (PathSeeker, Movie App) have `githubUrl: ""` because no repository URL was provided. Fill them in later.
- The `createdAt` dates of the starting projects are placeholders. Set the real dates.

## Other things to edit
- Name, bio, links, internship, education, profile photo path, resume path: `src/data/site.js`
- Skills: `src/data/skills.js`
- Resume: put your PDF at `public/resume/Sushil_Agrahari_Resume.pdf`
- Profile photo: put a file in `public/` and set `profileImage` in `site.js`

## Contact form
It validates input and opens the visitor's email app via `mailto:`. It does not send messages by itself. To deliver messages directly you would need an email service (for example Formspree or EmailJS).

## Deploy

**Vercel**: push to GitHub, import the repo at vercel.com. Framework preset: Vite. Build `npm run build`, output `dist`.

**Netlify**: push to GitHub, "Add new site" then "Import from Git". Build command `npm run build`, publish directory `dist`.
