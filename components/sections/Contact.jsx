"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading.jsx";
import { fade, fadeUp } from "../motion/variants.js";
import { toast } from "react-toastify";

const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

export default function Contact() {
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        const form = e.target;
        const formData = new FormData(form);

        formData.set("access_key", WEB3FORMS_ACCESS_KEY);
        formData.set("subject", "New message from portfolio contact form");
        formData.set("from_name", formData.get("name") || "Portfolio Contact");
        formData.set("replyto", formData.get("email") || "");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                toast.success("Message sent successfully!");
                form.reset();
            } else {
                toast.error("Something went wrong.");
            }
        } catch (error) {
            toast.error("Something went wrong.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className="border-t border-(--color-border)">
            <div className="mx-auto w-full max-w-(--container-width) px-6 py-20 lg:px-16 lg:py-32">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <SectionHeading
                        eyebrow="Contact"
                        title="Let's build something great together."
                        description="Have an idea, project, or opportunity? Feel free to reach out and let's start a conversation."
                    />
                </motion.div>
                <motion.div
                    variants={fade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.25 }}
                    className="mt-14 grid gap-12 lg:grid-cols-2"
                >
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="rounded-(--radius-button) border border-(--color-border) bg-transparent px-5 py-4 text-(--color-foreground) outline-none transition focus:border-(--color-accent)"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="rounded-(--radius-button) border border-(--color-border) bg-transparent px-5 py-4 text-(--color-foreground) outline-none transition focus:border-(--color-accent)"
                        />
                        <textarea
                            rows="5"
                            name="message"
                            placeholder="Your Message"
                            required
                            className="rounded-(--radius-button) border border-(--color-border) bg-transparent px-5 py-4 text-(--color-foreground) outline-none transition focus:border-(--color-accent)"
                        />
                        <button
                            disabled={isSending}
                            type="submit"
                            className={`w-fit rounded-(--radius-button) bg-(--color-accent) px-7 py-3.5 text-sm font-semibold text-[#080808] shadow-(--shadow-sm) transition-all duration-200 hover:opacity-90 ${
                                isSending ? "cursor-not-allowed opacity-60" : ""
                            }`}
                        >
                            {isSending ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
