"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading.jsx";
import { fade, fadeUp } from "../motion/variants.js";

const highlights = [
    {
        title: "Build",
        description:
            "Full-stack applications with modern frontend, backend, database, and API technologies.",
    },
    {
        title: "Solve",
        description:
            "Data structures and algorithms with a focus on writing efficient and thoughtful solutions",
    },
];

export default function About() {
    return (
        <section id="about" className="border-t border-(--color-border)">
            <div className="mx-auto w-full max-w-(--container-width) px-6 py-20 lg:px-16 lg:py-24">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <SectionHeading
                        eyebrow="About Me"
                        title="I build, solve, and keep learning."
                        description="I enjoy turning ideas into useful digital products while continuously improving my problem-solving and engineering skills."
                    />
                </motion.div>
                <motion.div
                    variants={fade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.35 }}
                    className="mt-14 grid gap-6 md:grid-cols-2"
                >
                    {highlights.map((highlight) => (
                        <div
                            key={highlight.title}
                            className="rounded-(--radius-card) border border-(--color-border) bg-(--color-surface) p-8 transition-all duration-300 hover:border-(--color-accent) hover:shadow-(--shadow-md)"
                        >
                            <h3 className="text-(--color-accent)">
                                {highlight.title}
                            </h3>

                            <p className="mt-4 max-w-lg text-base leading-7 text-(--color-secondary-text)">
                                {highlight.description}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
