import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { StrongProjects } from "@/components/sections/StrongProjects";
import { MoreProjects } from "@/components/sections/MoreProjects";
import { Achievements } from "@/components/sections/Achievements";
import { Certifications } from "@/components/sections/Certifications";
import { EducationCommunity } from "@/components/sections/EducationCommunity";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <FeaturedWork />
        <StrongProjects />
        <MoreProjects />
        <Achievements />
        <Certifications />
        <EducationCommunity />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
