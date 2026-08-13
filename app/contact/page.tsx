import { Sidebar } from "@/components/Sidebar";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Sidebar />
      <main id="main-content">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
