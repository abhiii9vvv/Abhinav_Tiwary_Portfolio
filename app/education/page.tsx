import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { EducationCommunity } from "@/components/sections/EducationCommunity";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://abhinavtiwary.online";

export const metadata: Metadata = {
  title:
    "Education — Abhinav Tiwary, Full-Stack Developer & Gen AI Builder",
  description:
    "Abhinav Tiwary's academic background — studying at Sharda University, Greater Noida, with a focus on computer science, engineering, and applied AI development.",
  alternates: {
    canonical: `${SITE_URL}/education`,
  },
  openGraph: {
    title: "Education — Abhinav Tiwary",
    description:
      "Academic journey of Abhinav Tiwary — Sharda University, Greater Noida, computer science and engineering.",
    url: `${SITE_URL}/education`,
    type: "website",
  },
};

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
