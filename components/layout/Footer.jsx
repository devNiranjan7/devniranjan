"use client";

import { motion } from "framer-motion";
import { fade } from "../motion/variants.js";

const footerLinks = [
    {
        name: "GitHub",
        href: "https://github.com/devNiranjan7",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/dev-niranjan-5810a1337/",
    },
    {
        name: "Email",
        href: "mailto:devniranjan0111@gmail.com",
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-(--color-border)">
            <motion.div
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="mx-auto flex w-full max-w-(--container-width) flex-col gap-6 px-6 py-10 lg:px-16 lg:py-12 sm:flex-row sm:items-center sm:justify-between"
            >
                <div>
                    <p className="text-md font-semibold text-(--color-foreground)">
                        Dev Niranjan
                    </p>
                    <p className="mt-1 text-sm text-(--color-secondary-text)">
                        Full Stack Developer
                    </p>
                </div>
                <div className="flex flex-wrap gap-6">
                    {footerLinks.map((link) => (
                        <a
                            href={link.href}
                            key={link.name}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-(--color-secondary-text) transition-colors hover:text-(--color-accent)"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <p className="text-sm text-(--color-secondary-text)">
                    © {new Date().getFullYear()} Dev Niranjan
                </p>
            </motion.div>
        </footer>
    );
}
