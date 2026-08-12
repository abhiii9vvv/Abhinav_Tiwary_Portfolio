import { Nav } from "@/components/Nav";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/Footer";

export default function ExperiencePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Experience />
      </main>
      <Footer />
    </>
  );
}
