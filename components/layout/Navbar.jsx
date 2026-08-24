"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image.js";
import Link from "next/link.js";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMobileLinkClick = (href) => {
        setIsMenuOpen(false);

        setTimeout(() => {
            document.querySelector(href)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 300);
    };
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);
    return (
        <header className="sticky top-0 z-50 border-b border-(--color-border) bg-(--color-background)">
            <nav className="mx-auto flex h-20 w-full max-w-(--container-width) items-center justify-between px-6 lg:px-16">
                <Link
                    href="/"
                    className="shrink-0"
                    aria-label="Dev Niranjan home"
                >
                    <Image
                        src="/images/navbar_logo.png"
                        alt="Dev Niranjan"
                        width={180}
                        height={48}
                        priority
                    />
                </Link>
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-(--color-secondary-text) transition-colors duration-200 hover:text-(--color-foreground)"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/resume/Dev_Niranjan_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-(--radius-button) bg-(--color-accent) px-5 py-2.5 text-sm font-semibold text-[#080808] shadow-(--shadow-sm) transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f0d598] hover:shadow-(--shadow-md)"
                    >
                        Resume
                    </Link>
                </div>
                <button
                    type="button"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="flex h-10 w-10 items-center justify-center rounded-(--radius-button) text-(--color-foreground) md:hidden"
                    aria-label={
                        isMenuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>
            </nav>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden border-t border-(--color-border) bg-(--color-background) md:hidden"
                    >
                        <div className="mx-auto flex max-w-(--container-width) flex-col px-6 py-5">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleMobileLinkClick(link.href);
                                    }}
                                    className="border-b border-(--color-border) py-4 text-base font-medium text-(--color-secondary-text) transition-colors duration-200 last:border-b-0 hover:text-(--color-foreground)"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/resume/Dev_Niranjan_Resume.pdf"
                                target="_blank"
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-4 rounded-(--radius-button) bg-(--color-accent) px-5 py-3 text-center text-sm font-semibold text-[#080808] shadow-(--shadow-sm) transition-all duration-200 hover:bg-[#f0d598] hover:shadow-(--shadow-md)"
                            >
                                Resume
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
