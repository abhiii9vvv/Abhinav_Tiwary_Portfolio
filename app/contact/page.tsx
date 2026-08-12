import { Nav } from "@/components/Nav";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
