import { Sidebar } from "@/components/Sidebar";
import { Achievements } from "@/components/sections/Achievements";
import { Footer } from "@/components/Footer";

export default function AchievementsPage() {
  return (
    <>
      <Sidebar />
      <main id="main-content">
        <Achievements />
      </main>
      <Footer />
    </>
  );
}
