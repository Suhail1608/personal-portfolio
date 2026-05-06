"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/lib/emailjs";
import { Loader } from "lucide-react";

export default function Contact() {
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Call your email sending function here, e.g., sendEmail(form)
        const isSent = await sendEmail(form);
        setIsSubmitting(false);
        if (isSent) {
            setForm({ name: "", email: "", message: "" }); // Clear form
            setIsSent(true);
            setIsSubmitting(false);
        } else {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-3xl mx-auto">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold text-center"
                >
                    Let’s <span className="text-primary">Work Together</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center text-muted-foreground mt-4"
                >
                    Have a project in mind or just want to connect? Send me a message.
                </motion.p>

                {/* Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-10 space-y-6 max-w-lg mx-auto"
                >
                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary transition"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary transition"
                    />

                    {/* Message */}
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary transition"
                    />

                    {/* Button */}
                    {isSent && (
                        <p className="text-green-500 text-sm mb-4">
                            Your message has been sent successfully!
                        </p>
                    )}
                    {isFailed && (
                        <p className="text-red-500 text-sm mb-4">
                            Oops! Something went wrong. Please try again.
                        </p>
                    )}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
                    >
                        {isSubmitting ?
                            <>

                                <span className="flex items-center justify-center gap-2">
                                    <Loader className="animate-spin" />
                                    Sending
                                </span>
                            </>
                            :
                            "Send Message"}
                    </button>
                </motion.form>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="flex justify-center gap-6 mt-6 text-sm"
                >
                    <motion.a
                        variants={item}
                        href="https://github.com/Suhail1608"
                        target="_blank"
                        className="hover:text-primary transition"
                    >
                        GitHub
                    </motion.a>

                    <motion.a
                        variants={item}
                        href="https://www.linkedin.com/in/suhail-basha-849208215/"
                        target="_blank"
                        className="hover:text-primary transition"
                    >
                        LinkedIn
                    </motion.a>

                    <motion.a
                        variants={item}
                        href="mailto:suhailbasha1608@gmail.com"
                        className="hover:text-primary transition"
                    >
                        Email
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}