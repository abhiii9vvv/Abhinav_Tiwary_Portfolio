import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { Achievements } from "@/components/sections/Achievements";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://www.abhinavtiwary.online";

export const metadata: Metadata = {
  title: "Achievements — Abhinav Tiwary, Full-Stack Developer & Gen AI Builder",
  description:
    "See Abhinav Tiwary's key achievements — hackathon wins, recognitions, open-source milestones, and technical accomplishments that define his developer journey.",
  alternates: {
    canonical: `${SITE_URL}/achievements`,
  },
  openGraph: {
    title: "Achievements — Abhinav Tiwary",
    description:
      "Hackathon wins, recognitions, and milestones from Abhinav Tiwary's career as a Full-Stack Developer and AI Builder.",
    url: `${SITE_URL}/achievements`,
    type: "website",
  },
};

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
