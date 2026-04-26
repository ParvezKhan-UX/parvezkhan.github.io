import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import AnimateReveal from "@/components/AnimateReveal";

// page.tsx is a Server Component — all interactivity is in the client components.
// To update portfolio content, edit src/data/portfolio.ts only.

export default function Home() {
  return (
    <div className="w-full min-h-screen grid-bg">
      <Navbar />
      <main>
        <Hero />
        <AnimateReveal delay={0.1}><About /></AnimateReveal>
        <AnimateReveal delay={0.1}><Skills /></AnimateReveal>
        <AnimateReveal delay={0.1}><Projects /></AnimateReveal>
        <AnimateReveal delay={0.1}><Experience /></AnimateReveal>
        <AnimateReveal delay={0.1}><Education /></AnimateReveal>
        <AnimateReveal delay={0.1}><Connect /></AnimateReveal>
      </main>
      <Footer />
    </div>
  );
}
