import About from "@/components/sections/About.jsx";
import BuildStack from "@/components/sections/BuildStack.jsx";
import Contact from "@/components/sections/Contact.jsx";
import Hero from "@/components/sections/Hero.jsx";
import Projects from "@/components/sections/Projects.jsx";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <BuildStack />
            <Projects />
            <Contact />
        </main>
    );
}
