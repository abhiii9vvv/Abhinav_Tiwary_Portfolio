import type { Metadata } from "next";
import { Recognition } from "@/components/home/Recognition";
import { Contact } from "@/components/home/Contact";
import { PageHeader } from "@/components/ui";
import { StructuredData } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";

const TITLE = "Abhinav Tiwary's achievements | Full-Stack & Gen AI Developer";
const DESCRIPTION = "Achievements of Abhinav Tiwary (Abhinav Tiwari): Smart India Hackathon 2025 2nd Runner-Up, first to finish the AWS Agentic AI workshop, and 250+ DSA problems.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/achievements` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/achievements` },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <>
      <StructuredData path="/achievements" pageName="Achievements" />
      <PageHeader title="Abhinav Tiwary's achievements" intro={DESCRIPTION} />
      <Recognition />
      <Contact />
    </>
  );
}
