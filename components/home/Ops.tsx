import { BrandIcon } from "@/components/BrandIcon";
import { Container } from "@/components/ui";
import { OpsScene } from "./OpsScene";

const practices = [
  {
    title: "Linux first",
    body: "At home on the command line: services, logs, permissions, cron jobs, and Bash scripts that automate the boring parts.",
    brands: ["Linux", "Bash"],
  },
  {
    title: "Monitor and support",
    body: "At Paytm I work on technical operations and system monitoring, and support the teams that depend on those systems.",
    brands: ["Paytm"],
  },
  {
    title: "Ship it reliably",
    body: "Containers, CI pipelines, and cloud deploys: Docker, Kubernetes, and Jenkins practice, with apps running on AWS.",
    brands: ["Docker", "Kubernetes", "AWS"],
  },
];

export function Ops() {
  return (
    <section id="ops" className="py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <h2 data-reveal className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            On call, in practice
          </h2>
          <p data-reveal className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            Shipping is half the job. The other half is keeping it up: watching the dashboards, reading the logs, and
            fixing what breaks.
          </p>

          <ul className="mt-10 space-y-7">
            {practices.map((p, i) => (
              <li
                key={p.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                className="grid grid-cols-[5.75rem_1fr] gap-4"
              >
                <span className="mt-1 flex h-10 items-center justify-center gap-1 rounded-xl border border-line bg-surface px-2">
                  {p.brands.map((b) => (
                    <BrandIcon key={b} name={b} className="h-5 w-5" />
                  ))}
                </span>
                <div>
                  <h3 className="text-lg font-bold tracking-tight">{p.title}</h3>
                  <p className="mt-1 text-pretty leading-relaxed text-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal className="relative">
          <div aria-hidden="true" className="bg-dots absolute -inset-4 rounded-[2.5rem] sm:-inset-6" />
          <div className="relative rounded-[2rem] border border-line bg-bg p-3 shadow-lift sm:p-4">
            <OpsScene className="h-auto w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
}
