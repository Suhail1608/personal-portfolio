"use client";

import { motion } from "framer-motion";

const skills = {
    frontend: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },

        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },

        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
        { name: "Styled Components", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg" },

        { name: "Formik", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Chart.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chartjs/chartjs-original.svg" },
    ],

    backend: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Firestore", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },

        { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Axios", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg" },
    ],

    tools: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        { name: "JIRA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
        { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
    ],

    strengths: [
        { name: "Performance Optimization" },
        { name: "Component Architecture" },
        { name: "Dynamic Forms" },
        { name: "API Integration" },
        { name: "UI/UX Implementation" },
    ],
};

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold text-center"
                >
                    Tech <span className="text-primary">Stack</span>
                </motion.h2>

                <div className="mt-12 grid md:grid-cols-3 gap-12">

                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={category === "strengths" ? "md:col-span-3" : ""}
                        >
                            {/* Category Title */}
                            <h3 className={`text-sm uppercase tracking-wider text-muted-foreground mb-4 ${category === "strengths" ? "text-center" : ""}`}>
                                {category}
                            </h3>

                            {/* Skills */}
                            <div
                                className={`flex flex-wrap gap-3 ${category === "strengths" ? "justify-center" : ""
                                    }`}
                            >
                                {items.map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.08 }}
                                        className={`group px-4 py-2 rounded-lg border border-border bg-card text-sm cursor-default transition relative overflow-hidden ${category === "strengths" ? "w-full md:w-auto" : ""}`}
                                    >

                                        {/* Glow effect */}
                                        < div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                                            <div className="absolute inset-0 bg-primary/10 blur-xl"></div>
                                        </div>

                                        {/* Text */}
                                        < div className="relative z-10 flex items-center gap-2" >
                                            {
                                                skill.icon && (
                                                    <img
                                                        src={skill.icon}
                                                        alt={skill.name}
                                                        className="w-4 h-4 object-contain"
                                                    />
                                                )
                                            }
                                            < span className="group-hover:text-primary transition" >
                                                {skill.name}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))
                    }

                </div >
            </div >
        </section >
    );
}