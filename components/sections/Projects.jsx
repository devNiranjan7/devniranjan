"use client";

import { motion } from "framer-motion";
import { fadeUp, imageReveal, projectReveal } from "../motion/variants.js";
import Image from "next/image.js";
import Link from "next/link.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import { projects } from "@/data/projects.js";

export default function Projects() {
    return (
        <section id="projects" className="border-t border-(--color-border)">
            <div className="mx-auto w-full max-w-(--container-width) px-6 py-20 lg:px-16 lg:py-24">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <SectionHeading
                        eyebrow="PROJECTS"
                        title="Things I have built."
                        description="A collection of full-stack applications focused on solving real-world problems with modern technologies."
                    />
                </motion.div>
                <div className="mt-24 space-y-40">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className="group grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
                        >
                            <motion.div
                                variants={imageReveal}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                className={`relative overflow-hidden rounded-(--radius-image) border border-(--color-border) bg-(--color-surface) ${index % 2 !== 0 ? "lg:order-2" : ""}`}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={1200}
                                    height={800}
                                    priority={index === 0}
                                    className="aspect-16/10 h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                />
                            </motion.div>
                            <motion.div
                                variants={projectReveal}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                className={`flex flex-col gap-6 ${index % 2 !== 0 ? "lg:order-1" : ""}`}
                            >
                                <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-(--color-secondary-text)">
                                    <span>{project.id} / 03</span>
                                    <span>{project.year}</span>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-semibold text-(--color-foreground) lg:text-4xl">
                                        {project.name}
                                    </h3>
                                    <p className="mt-2 text-xl text-(--color-primary)">
                                        {project.title}
                                    </p>
                                </div>
                                <p className="max-w-xl text-(--color-secondary-text)">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-(--color-border) px-4 py-1.5 text-sm text-(--color-secondary-text)"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-(--radius-button) bg-(--color-primary) px-6 py-3 text-sm font-semibold text-[#080808] transition-all hover:-translate-y-0.5"
                                    >
                                        Live Demo
                                    </Link>
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-(--radius-button) border border-(--color-border) px-6 py-3 text-sm font-semibold text-(--color-foreground) transition-all hover:border-(--color-primary) hover:text-(--color-primary)"
                                    >
                                        GitHub
                                    </Link>
                                </div>
                            </motion.div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
