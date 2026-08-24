"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeading from "../ui/SectionHeading.jsx";
import { fade, fadeUp } from "../motion/variants.js";

const stack = {
    Frontend: [
        "React.js",
        "Next.js",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap",
    ],
    Backend: ["Node.js", "Express.js", "REST APIs"],
    Database: ["MongoDB", "Mongoose"],
    Services: ["Auth.js", "JWT", "Cloudinary"],
    Tools: ["Git", "Github", "Postman", "Vercel", "Render", "Figma"],
    "Problem Solving": ["Java", "DSA"],
};

export default function BuildStack() {
    const categories = Object.keys(stack);
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    return (
        <section id="skills" className="border-t border-(--color-border)">
            <div className="mx-auto w-full max-w-(--container-width) px-6 py-20 lg:px-16 lg:py-24">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <SectionHeading
                        eyebrow="Skills"
                        title="My build stack."
                        description="The technologies and tools I used to build, ship, and solve."
                    />
                </motion.div>
                <div className="mt-14">
                    <motion.div
                        variants={fade}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex flex-wrap gap-x-8 gap-y-4 border-b border-(--color-border)"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                aria-current={
                                    activeCategory === category
                                        ? "page"
                                        : undefined
                                }
                                onClick={() => setActiveCategory(category)}
                                className={`relative pb-4 text-sm font-medium transition-colors duration-200 ${activeCategory === category ? "text-(--color-accent)" : "text-(--color-secondary-text) hover:text-(--color-foreground"}`}
                            >
                                {category}
                                {activeCategory === category && (
                                    <motion.span
                                        layoutId="active-category"
                                        className="absolute bottom-0 left-0 h-px w-full bg-(--color-accent)"
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeOut",
                                        }}
                                    ></motion.span>
                                )}
                            </button>
                        ))}
                    </motion.div>
                    <motion.div
                        variants={fade}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="min-h-55 py-14"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="flex flex-wrap gap-x-8 gap-y-5"
                            >
                                {stack[activeCategory].map(
                                    (technology, index) => (
                                        <span
                                            key={technology}
                                            className="text-2xl font-semibold text-(--color-foreground) transition-colors duration-200 hover:text-(--color-accent) sm:text-3xl lg:text-4xl"
                                        >
                                            {technology}
                                            {index !==
                                                stack[activeCategory].length -
                                                    1 && (
                                                <span className="ml-8 text-(--color-border)">
                                                    |
                                                </span>
                                            )}
                                        </span>
                                    ),
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                    <div className="flex items-center justify-between border-t border-(--color-border) pt-5 text-xs uppercase tracking-[0.18em] text-(--color-secondary-text)">
                        <span>Build Stack</span>
                        <span>
                            {String(
                                categories.indexOf(activeCategory) + 1,
                            ).padStart(2, "0")}{" "}
                            / {String(categories.length).padStart(2, "0")}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
