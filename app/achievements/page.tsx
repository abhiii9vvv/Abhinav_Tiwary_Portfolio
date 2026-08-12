import { Nav } from "@/components/Nav";
import { Achievements } from "@/components/sections/Achievements";
import { Footer } from "@/components/Footer";

export default function AchievementsPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Achievements />
      </main>
      <Footer />
    </>
  );
}
