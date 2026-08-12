import { Nav } from "@/components/Nav";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <About />
      </main>
      <Footer />
    </>
  );
}
