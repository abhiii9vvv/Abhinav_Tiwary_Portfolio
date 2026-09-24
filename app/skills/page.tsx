import type { Metadata } from "next";
import { Stack } from "@/components/home/Stack";
import { Contact } from "@/components/home/Contact";
import { PageHeader } from "@/components/ui";
import { StructuredData } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";

const TITLE = "Abhinav Tiwary's tech stack | Full-Stack & Gen AI Developer";
const DESCRIPTION = "The tech stack Abhinav Tiwary works with: React, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, Docker, AWS, and LLM APIs.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/skills` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/skills` },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <>
      <StructuredData path="/skills" pageName="Tech stack" />
      <PageHeader title="Abhinav Tiwary's tech stack" intro={DESCRIPTION} />
      <Stack />
      <Contact />
    </>
  );
}
