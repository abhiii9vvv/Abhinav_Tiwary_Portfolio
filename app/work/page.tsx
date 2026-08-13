import { Sidebar } from "@/components/Sidebar";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { StrongProjects } from "@/components/sections/StrongProjects";
import { MoreProjects } from "@/components/sections/MoreProjects";
import { Footer } from "@/components/Footer";

export default function WorkPage() {
  return (
    <>
      <Sidebar />
      <main id="main-content">
        <FeaturedWork />
        <StrongProjects />
        <MoreProjects />
      </main>
      <Footer />
    </>
  );
}
