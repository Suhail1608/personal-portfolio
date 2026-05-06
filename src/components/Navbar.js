"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
                ? "backdrop-blur-lg bg-background/70 border-b border-border shadow-sm"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-xl font-semibold tracking-tight">
                    <span className="text-primary drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]">
                        S
                    </span>
                    uhail
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <motion.div key={item.name} whileHover={{ y: -2 }} className="group">
                            <Link
                                href={item.href}
                                className="relative text-sm text-muted-foreground hover:text-foreground transition"
                            >
                                {item.name}

                                {/* underline animation */}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-foreground"
                >
                    {open ? <X /> : <Menu />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden px-6 pb-6"
                >
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="text-muted-foreground hover:text-foreground"
                            >
                                {item.name}
                            </Link>
                        ))}

                        <a
                            href="#contact"
                            className="mt-2 px-4 py-2 rounded-lg bg-primary text-center text-primary-foreground"
                        >
                            Hire Me
                        </a>
                    </div>
                </motion.div>
            )}
        </header>
    );
}