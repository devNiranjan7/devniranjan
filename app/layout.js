import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar.jsx";
import Footer from "@/components/layout/Footer.jsx";
import { ToastContainer } from "react-toastify";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    metadataBase: new URL("http://localhost:3000"),
    title: "Dev Niranjan",
    description:
        "Portfolio of Dev Niranjan, a full stack developer building modern web applications with React, Next.js, Node.js, and MongoDB.",
    keywords: [
        "Dev Niranjan",
        "Full Stack Developer",
        "React Developer",
        "Next.js Developer",
        "Node.js Developer",
    ],
    authors: [
        {
            name: "Dev Niranjan",
        },
    ],
    creator: "Dev Niranjan",
    icons: {
        icon: "/favicon.png",
    },
    openGraph: {
        title: "Dev Niranjan",
        description:
            "Building modern full-stack web applications with React, Next.js, Node.js and MongoDB.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Dev Niranjan Portfolio",
            },
        ],
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${manrope.variable}`}>
                <Navbar />
                {children}
                <Footer />
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    theme="dark"
                />
            </body>
        </html>
    );
}
