/**
 * ALL PROJECT DATA LIVES HERE.
 * To add a project: copy an object below, change the values, save. That's it.
 *
 * Fields
 *  id               unique string (used as React key)
 *  title            project name
 *  shortDescription one line shown on the card
 *  fullDescription  longer text shown in the details modal
 *  image            path like "/projects/name.png" (file in public/projects/). "" shows a placeholder
 *  technologies     array of strings, shown as badges
 *  category         "Full Stack" | "Frontend" | "Backend" | "AI/ML" | "Robotics"
 *  features         array of strings
 *  githubUrl        repo link. "" hides the GitHub button
 *  liveUrl          deployed link. "" hides the Live Demo button
 *  featured         true highlights the card
 *  status           "Completed" | "In Progress" | anything you like
 *  createdAt        "YYYY-MM-DD" (newest first). Dates below are placeholders; set the real ones.
 */
export const projects = [
  {
    id: "project-001",
    title: "PyroSense-AI: AI Fire and Smoke Detection",
    shortDescription: "AI system that detects fire and smoke and reports incidents.",
    fullDescription:
      "PyroSense-AI detects fire and smoke using computer vision models, scores the risk, and supports alerting and incident reporting, with Grad-CAM visualizations to show what the model focused on.",
    image: "",
    technologies: ["Python", "YOLOv8", "EfficientNet", "Streamlit", "FastAPI"],
    category: "AI/ML",
    features: [
      "Fire and smoke detection",
      "Risk scoring",
      "Alert integrations",
      "Incident reporting",
      "Grad-CAM visualization",
    ],
    githubUrl: "https://github.com/ypsingh01/PyroSense-AI",
    liveUrl: "https://huggingface.co/spaces/suryadevsharma11/intelliguard-ai",
    featured: true,
    status: "Completed",
    createdAt: "2026-03-01",
  },
  {
    id: "project-002",
    title: "The PathSeeker: AI Robot",
    shortDescription: "Autonomous robot with mapping, navigation and a monitoring dashboard.",
    fullDescription:
      "The PathSeeker is a robot built on Jetson Nano that maps its surroundings with LiDAR and SLAM, localizes itself, avoids obstacles, and is monitored through a React dashboard.",
    image: "",
    technologies: ["Python", "ROS", "LiDAR", "SLAM", "Jetson Nano", "React"],
    category: "Robotics",
    features: [
      "Mapping",
      "Localization",
      "Obstacle avoidance",
      "AI-assisted navigation",
      "Robot monitoring dashboard",
    ],
    githubUrl: "", // TODO: add repository URL
    liveUrl: "",
    featured: true,
    status: "Completed",
    createdAt: "2026-01-15",
  },
  {
    id: "project-003",
    title: "Movie App: MERN Stack",
    shortDescription: "Movie browsing app with authentication and search.",
    fullDescription:
      "A full-stack movie application built on the MERN stack with user authentication, movie search, dynamic content, and REST API integration.",
    image: "",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    category: "Full Stack",
    features: ["Authentication", "Movie search", "Dynamic content", "REST API integration"],
    githubUrl: "", // TODO: add repository URL
    liveUrl: "",
    featured: false,
    status: "Completed",
    createdAt: "2025-06-01",
  },
  {
    id: "project-004",
    title: "Freelance Bidding Platform: Mini Fiverr Clone",
    shortDescription: "Marketplace where clients post jobs and freelancers bid.",
    fullDescription:
      "A MERN stack marketplace with separate client and freelancer roles, covering job posting, bidding, messaging, contracts, and job tracking.",
    image: "",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    category: "Full Stack",
    features: [
      "Client and freelancer roles",
      "Job posting",
      "Bidding",
      "Messaging",
      "Contracts",
      "Job tracking",
    ],
    githubUrl: "https://github.com/9335sus/freelancer-website",
    liveUrl: "",
    featured: false,
    status: "Completed",
    createdAt: "2025-10-01",
  },
];
