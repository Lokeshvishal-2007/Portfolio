import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIBuild from "@/components/WhatIBuild";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import StudyAutomation from "@/components/StudyAutomation";
import Education from "@/components/Education";
import GithubSection from "@/components/GithubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <WhatIBuild />
      <Skills />
      <Projects />
      <StudyAutomation />
      <Education />
      <GithubSection />
      <Contact />
      <Footer />
    </main>
  );
}
