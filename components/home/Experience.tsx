import Image from "next/image";
import { experience } from "@/content/experience";
import { BrandIcon } from "@/components/BrandIcon";
import { Container, SectionHead } from "@/components/ui";

const orgLogos: Record<string, string> = {
  "The ARambha": "/brand-icons/thearambha.png",
  SkyCodeHub: "/brand-icons/skycodehub.svg",
  "Unessa Foundation": "/brand-icons/unessa.png",
};

function OrgLogo({ org }: { org: string }) {
  if (org === "Paytm") {
    return (
      <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-white">
        <BrandIcon name="Paytm" className="h-7 w-7" onLight />
      </span>
    );
  }
  const src = orgLogos[org];
  return (
    <span className="relative h-12 w-12 overflow-hidden rounded-2xl border border-line bg-white">
      {src ? (
        <Image src={src} alt="" fill sizes="48px" className="object-contain p-2" />
      ) : (
        <span className="grid h-full place-items-center font-bold text-[#181615]">{org.slice(0, 1)}</span>
      )}
    </span>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-surface py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead
            title="Where I've worked"
            intro="From tech operations at Paytm to campaign technology and nonprofit backends. Every role put my code in front of real users."
          />
        </div>

        <ol className="relative">
          {experience.map((e, i) => (
            <li
              key={e.org}
              data-reveal
              style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
              className="relative grid grid-cols-[3rem_1fr] gap-5 pb-12 last:pb-0"
            >
              {i < experience.length - 1 && (
                <span aria-hidden="true" className="absolute bottom-0 left-6 top-14 w-px bg-line" />
              )}
              <OrgLogo org={e.org} />
              <div className="min-w-0 pt-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-xl font-bold tracking-tight">{e.role}</h3>
                  {e.current && (
                    <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent-ink">
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-1 text-muted">
                  <span className="font-medium text-ink">{e.org}</span>
                  <span aria-hidden="true"> · </span>
                  <span className="font-mono text-sm">{e.period.replace(/–/g, "-")}</span>
                </p>
                <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted">{e.description}</p>
                {e.highlight && (
                  <p className="mt-4 inline-flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/[0.07] px-3 py-2 text-sm font-medium">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {e.highlight}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
