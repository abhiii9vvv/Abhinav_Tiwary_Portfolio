import { Sidebar } from "@/components/Sidebar";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { StrongProjects } from "@/components/sections/StrongProjects";
import { Footer } from "@/components/Footer";

export default function WorkPage() {
  return (
    <>
      <Sidebar />
      <main id="main-content">
        <FeaturedWork />
        <StrongProjects />
      </main>
      <Footer />
    </>
  );
}
