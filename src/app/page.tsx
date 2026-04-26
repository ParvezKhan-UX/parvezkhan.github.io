import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

// page.tsx is a Server Component — all interactivity is in the client components.
// To update portfolio content, edit src/data/portfolio.ts only.

export default function Home() {
  return (
    <div className="min-h-screen grid-bg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
