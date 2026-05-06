"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Home() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">



            <div className="max-w-4xl text-center">
                <span className="text-sm px-3 py-1 rounded-full bg-accent text-accent-foreground">
                    Open to Work
                </span>
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight"
                >
                    Hi, I’m{" "}
                    <span className="text-primary">
                        Suhail
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-6 text-lg md:text-xl text-muted-foreground"
                >
                    Frontend Developer specializing in building modern, scalable & AI-powered web applications using React and Next.js.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="px-6 py-3 rounded-lg border border-border hover:bg-accent transition"
                    >
                        Contact Me
                    </a>
                </motion.div>

            </div>
            <div className="absolute bottom-6 text-muted-foreground text-sm animate-bounce">
                <ArrowDown />
            </div>
        </section>
    );
}