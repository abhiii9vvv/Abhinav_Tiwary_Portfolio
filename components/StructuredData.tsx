import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { featuredProjects } from "@/content/projects";
import { SITE_URL } from "@/lib/site";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * One linked JSON-LD graph: the Person (with both spellings of the name and
 * every profile that belongs to them), the WebSite, and a ProfilePage whose
 * main entity is that Person. This is what search engines use to tie the
 * name, the site, and the LinkedIn / GitHub profiles together.
 */
export function StructuredData({ path = "", pageName }: { path?: string; pageName?: string }) {
  const current = experience.find((e) => e.current);
  const url = `${SITE_URL}${path}`;

  const graph = [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: profile.name,
      alternateName: profile.alternateNames,
      givenName: "Abhinav",
      familyName: "Tiwary",
      url: SITE_URL,
      image: {
        "@type": "ImageObject",
        url: `${SITE_URL}${profile.photo}`,
        caption: profile.name,
      },
      email: `mailto:${profile.email}`,
      jobTitle: profile.role,
      description: profile.headline,
      nationality: { "@type": "Country", name: "India" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Delhi NCR",
        addressCountry: "IN",
      },
      ...(current && {
        worksFor: { "@type": "Organization", name: current.org },
      }),
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Sharda University",
        address: { "@type": "PostalAddress", addressLocality: "Greater Noida", addressCountry: "IN" },
      },
      knowsAbout: [
        "Full-stack development",
        "Generative AI",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "AWS",
        "LLM applications",
      ],
      award: ["Smart India Hackathon 2025, 2nd Runner-Up (internal round)"],
      sameAs: [profile.linkedin, profile.github],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: profile.name,
      alternateName: `${profile.name} Portfolio`,
      description: profile.subheadline,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfilePage",
      "@id": `${url}#page`,
      url,
      name: pageName ? `${pageName} | ${profile.name}` : `${profile.name}, ${profile.role}`,
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": PERSON_ID },
      about: { "@id": PERSON_ID },
      dateModified: "2026-09-24",
      ...(path === "" && {
        hasPart: featuredProjects.map((p) => ({
          "@type": "CreativeWork",
          name: p.name,
          description: p.tagline,
          url: p.live ?? p.github,
          creator: { "@id": PERSON_ID },
        })),
      }),
    },
    ...(pageName
      ? [
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: profile.name, item: SITE_URL },
              { "@type": "ListItem", position: 2, name: pageName, item: url },
            ],
          },
        ]
      : []),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
