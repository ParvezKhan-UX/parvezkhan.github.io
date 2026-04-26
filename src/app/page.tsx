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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Parvez Khan",
    url: "https://parvezkhan-ux.github.io/parvezkhan.github.io/",
    image: "https://parvezkhan-ux.github.io/parvezkhan.github.io/images/profile.png",
    jobTitle: "UI/UX Designer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "Bangladesh",
    },
    sameAs: [
      "https://www.linkedin.com/in/md-parvez-khan/",
      "https://www.behance.net/mpkhasan62",
    ],
  };

  return (
    <div className="w-full min-h-screen grid-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
