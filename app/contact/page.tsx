import type { Metadata } from "next";
import { Contact } from "@/components/home/Contact";
import { PageHeader } from "@/components/ui";
import { StructuredData } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";

const TITLE = "Contact Abhinav Tiwary | Full-Stack & Gen AI Developer";
const DESCRIPTION = "Contact Abhinav Tiwary about full-stack, frontend, and Gen AI roles in Delhi NCR, or about product work.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/contact` },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <>
      <StructuredData path="/contact" pageName="Contact" />
      <PageHeader title="Contact Abhinav Tiwary" intro={DESCRIPTION} />
      <Contact />
    </>
  );
}
