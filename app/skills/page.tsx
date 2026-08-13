import { Sidebar } from "@/components/Sidebar";
import { Skills } from "@/components/sections/Skills";
import { Footer } from "@/components/Footer";

export default function SkillsPage() {
  return (
    <>
      <Sidebar />
      <main id="main-content">
        <Skills />
      </main>
      <Footer />
    </>
  );
}
