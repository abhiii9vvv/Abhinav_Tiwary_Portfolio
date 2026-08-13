import { Sidebar } from "@/components/Sidebar";
import { EducationCommunity } from "@/components/sections/EducationCommunity";
import { Footer } from "@/components/Footer";

export default function EducationPage() {
  return (
    <>
      <Sidebar />
      <main id="main-content">
        <EducationCommunity />
      </main>
      <Footer />
    </>
  );
}
