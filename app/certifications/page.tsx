import { Sidebar } from "@/components/Sidebar";
import { Certifications } from "@/components/sections/Certifications";
import { Footer } from "@/components/Footer";

export default function CertificationsPage() {
  return (
    <>
      <Sidebar />
      <main id="main-content">
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
