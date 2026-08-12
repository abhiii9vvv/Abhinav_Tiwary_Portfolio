import { Nav } from "@/components/Nav";
import { Certifications } from "@/components/sections/Certifications";
import { Footer } from "@/components/Footer";

export default function CertificationsPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
