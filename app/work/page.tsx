import type { Metadata } from "next";
import { Work } from "@/components/home/Work";
import { Contact } from "@/components/home/Contact";
import { PageHeader } from "@/components/ui";
import { StructuredData } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";

const TITLE = "Projects by Abhinav Tiwary | Full-Stack & Gen AI Developer";
const DESCRIPTION = "Projects by Abhinav Tiwary (Abhinav Tiwari): CampusSetu, MentionWave, Artha Social, SecureExamBrowser, and more, built with Next.js, Node.js, and AI.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/work` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/work` },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <>
      <StructuredData path="/work" pageName="Work" />
      <PageHeader title="Projects by Abhinav Tiwary" intro={DESCRIPTION} />
      <Work />
      <Contact />
    </>
  );
}
