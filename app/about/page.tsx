import { Sidebar } from "@/components/Sidebar";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Sidebar />
      <main id="main-content">
        <About />
      </main>
      <Footer />
    </>
  );
}
