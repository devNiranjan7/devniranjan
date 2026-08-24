"use client";

import { motion } from "framer-motion";
import Link from "next/link.js";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-(--container-width) items-center px-6 py-20 lg:px-16 lg:py-24">
                <div className="max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-(--color-accent)"
                    >
                        Full Stack Developer
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.15,
                            ease: "easeOut",
                        }}
                        className="max-w-4xl text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
                    >
                        Building digital experiences
                        <span className="text-(--color-accent)">
                            {" "}
                            with code.
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: "easeOut",
                        }}
                        className="mt-8 max-w-2xl text-base leading-7 text-(--color-secondary-text) sm:text-lg"
                    >
                        I&apos;m Dev Niranjan — a full-stack developer who
                        builds modern web applications and enjoys solving
                        challenging problems through data structures and
                        algorithms.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.45,
                            ease: "easeOut",
                        }}
                        className="mt-10 flex flex-col gap-4 sm:flex-row"
                    >
                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center rounded-(--radius-button) bg-(--color-accent) px-7 py-3.5 text-sm font-semibold text-[#080808] shadow-(--shadow-sm) transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f0d598] hover:shadow-(--shadow-md)"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="/resume/Dev_Niranjan_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-(--radius-button) border border-(--color-border) px-7 py-3.5 text-sm font-semibold text-(--color-foreground) transition-all duration-200 hover:-translate-y-0.5 hover:border-(--color-accent) hover:text-(--color-accent)"
                        >
                            Download Resume
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
