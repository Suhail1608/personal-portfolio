"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="border-t border-border mt-20">
            <div className="max-w-6xl mx-auto px-6 py-10">

                {/* Top */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Logo / Name */}
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-lg font-semibold"
                    >
                        <span className="text-primary">S</span>uhail
                    </motion.h3>



                    {/* Socials */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex gap-4"
                    >
                        <a
                            href="https://github.com/Suhail1608"
                            target="_blank"
                            className="text-muted-foreground hover:text-primary transition"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/suhail-basha-849208215/"
                            target="_blank"
                            className="text-muted-foreground hover:text-primary transition"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:suhailbasha1608@gmail.com"
                            className="text-muted-foreground hover:text-primary transition"
                        >
                            Email
                        </a>
                    </motion.div>
                </div>

                {/* Bottom */}
                <div className="mt-8 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Suhail. Built with Next.js & Tailwind.
                </div>

            </div>
        </footer>
    );
}