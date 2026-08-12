import { profile } from "@/content/profile";

const SITE_URL = "https://abhinavtiwary.online";

export function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: SITE_URL,
    email: `mailto:${profile.email}`,
    jobTitle: "Full-Stack Developer & Gen AI Builder",
    description: profile.headline,
    image: `${SITE_URL}${profile.headshot}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
    sameAs: [profile.linkedin, profile.github],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${profile.name} — Portfolio`,
    url: SITE_URL,
    description: profile.subheadline,
    author: {
      "@type": "Person",
      name: profile.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
