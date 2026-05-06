"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCardWrapper";

const personalProjects = [
    {
        title: "ID Card Generator",
        description: "Built a web application that generates printable ID cards from Excel data, allowing users to upload templates, select layouts, and export cards in PDF format for physical printing.",
        tech: ["React", "Next.js", "Tailwind", "PDF Generation"],
        live: "https://id-card-creator.vercel.app/",
        github: "#",
    },
    {
        title: "DeadMan's Vault",
        description: "Built a secure text storage application where users can save sensitive information that remains hidden until unlocked with a secret key, featuring Firebase authentication and Firestore data storage.",
        tech: ["Next.js", "Firebase", "Firestore", "Authentication"],
        live: "https://deadmansvault.vercel.app/",
        github: "#",
    },
    {
        title: "Image Grid Viewer",
        description: "Built an interactive image grid generator that allows users to upload images and customize grid layout, DPI, opacity, color, and visual adjustments like brightness, contrast, and saturation in real time.",
        tech: ["React", "Next.js", "Tailwind", "Canvas API"],
        live: "https://image-grid-viewer.vercel.app/",
        github: "#",
    },
    {
        title: "PopChat",
        description: "Built a real-time chat application with Google authentication, allowing users to create or join chat rooms and communicate instantly with live updates powered by Firebase.",
        tech: ["React", "Firebase", "Google Authentication"],
        live: "#",
        github: "#",
    },
    {
        title: "DailyTechMinds",
        description: "Built a SEO-optimized blog platform using Next.js that generates dynamic blog pages from Markdown files, enabling fast performance and scalable content management.",
        tech: ["Next.js", "Markdown", "SEO", "Tailwind"],
        live: "https://dailytechminds.com",
        github: "#",
    },



];

const clientProjects = [


    {
        title: "Stepping Stones ERP (Mont Surfaces)",
        description: "Played a key role in stabilizing a complex ERP system for a stone trading business, addressing critical bugs, implementing missing features, and improving performance across inventory and accounting modules in a React and Material UI environment.",
        tech: ["React", "Material UI", "REST APIs", "JIRA"],
        impact: "Resolved a critical performance issue causing UI freezes by optimizing a dynamic table with 200+ rows through component refactoring, memoization, and render optimization, increasing scalability to 500+ rows. Fixed inconsistencies in financial calculations across multiple accounting modules and successfully delivered complex features like inventory adjustment, improving overall system stability.",
    },
    {
        title: "OneFede",
        description: "Built core features for the admin dashboard of a cybersecurity marketplace connecting buyers and sellers, including authentication, dynamic form systems, and CRUD modules for managing products, services, resources, and settings. Contributed to the public site with dynamic UI elements and API integrations.",
        tech: ["React", "Axios", "REST APIs", "Tailwind"],
        impact: "Handled complex UI logic by implementing multi-level dependent dropdowns with paginated APIs, enabling efficient data selection and improving usability for large datasets.",
    },
    {
        title: "Medivant CRM",
        description: "Developed key features for a CRM dashboard used to manage pharmaceutical leads, including UI implementation and API integration for the leads module. Built an interactive Kanban board with drag-and-drop functionality for managing lead stages and contributed to consistent theming across the application.",
        tech: ["React", "Vite", "Material UI", "Formik", "Styled Components", "REST APIs"],
        impact: "Improved lead management workflow by implementing a Kanban system for stage transitions and integrating AI-powered duplicate detection, enhancing data quality and user efficiency.",
    },
    {
        title: "Mr Med",
        description: "Contributed to the admin dashboard of an online pharmacy platform, implementing CRUD operations and integrating REST APIs using Axios to manage products and data workflows.",
        tech: ["React", "Axios", "REST APIs", "Tailwind"],
        impact: "Enabled efficient product and data management through a structured admin interface, improving operational workflow for internal teams.",
    },
    {
        title: "Corporate Website (WordPress)",
        description: "Designed and implemented responsive UI for a corporate website using Elementor, covering landing pages, careers, and blog/news sections, while collaborating on dynamic content integration.",
        tech: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
        impact: "Built a custom card-shuffling slider using pure HTML, CSS, and JavaScript to replace paid plugins, reducing costs and improving flexibility while ensuring consistent responsive design across devices.",
    },


];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                    My <span className="text-primary">Work</span>
                </h2>

                {/* PERSONAL PROJECTS */}
                <div className="mt-16">
                    <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
                        Personal Projects
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                        {personalProjects.map((project, index) => (
                            <TiltCard key={index}>
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -8 }}
                                    className="group rounded-xl border border-border p-6 bg-card hover:shadow-lg transition relative h-full flex flex-col"
                                >
                                    <h4 className="text-lg font-semibold">{project.title}</h4>

                                    <p className="mt-2 text-sm text-muted-foreground">
                                        {project.description}
                                    </p>

                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-2 py-1 rounded-md bg-secondary"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-5 flex gap-4">
                                        <a href={project.live} className="text-primary text-sm">
                                            Live →
                                        </a>
                                        <a href={project.github} className="text-sm text-muted-foreground">
                                            GitHub
                                        </a>
                                    </div>
                                </motion.div>
                            </TiltCard>
                        ))}
                    </div>
                </div>

                {/* CLIENT PROJECTS */}
                <div className="mt-20">
                    <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
                        Professional Experience
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        {clientProjects.map((project, index) => (
                            <TiltCard key={index}>
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -6 }}
                                    className="rounded-xl border border-border p-6 bg-card h-full flex flex-col hover:shadow-lg transition"
                                >
                                    <h4 className="text-lg font-semibold">{project.title}</h4>

                                    <p className="mt-2 text-sm text-muted-foreground">
                                        {project.description}
                                    </p>

                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-2 py-1 rounded-md bg-secondary"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Impact (this is key) */}
                                    <p className="mt-auto pt-4 text-sm text-primary">
                                        {project.impact}
                                    </p>
                                </motion.div>
                            </TiltCard>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}