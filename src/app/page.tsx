import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import WhatICanBuild from "@/components/WhatICanBuild";
import Contact from "@/components/Contact";
import StatusDashboard from "@/components/StatusDashboard";

export default function Home() {
  return (
    <main className="bg-[#232F3E] text-white selection:bg-[#FF9900]/30">
      <Hero />
      <StatusDashboard />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Blog />
      <WhatICanBuild />
      <Contact />
    </main>
  );
}
