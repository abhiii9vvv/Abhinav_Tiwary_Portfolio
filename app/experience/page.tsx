import { Sidebar } from "@/components/Sidebar";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/Footer";

export default function ExperiencePage() {
  return (
    <>
      <Sidebar />
      <main id="main-content">
        <Experience />
      </main>
      <Footer />
    </>
  );
}
