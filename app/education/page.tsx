import { Nav } from "@/components/Nav";
import { EducationCommunity } from "@/components/sections/EducationCommunity";
import { Footer } from "@/components/Footer";

export default function EducationPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <EducationCommunity />
      </main>
      <Footer />
    </>
  );
}
