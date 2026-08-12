import { stats } from "@/content/profile";
import { Reveal } from "@/components/Reveal";
import { GithubMark, ContributionsMark, CodeMark, TrophyMark } from "@/components/icons";

const iconMap = {
  github: GithubMark,
  contributions: ContributionsMark,
  code: CodeMark,
  trophy: TrophyMark,
};

export function Stats() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
      <dl className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line pt-10 sm:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = iconMap[stat.icon];
          return (
            <Reveal key={stat.label} delay={i * 0.05}>
              <div>
                <Icon className="mb-3 h-6 w-6 text-accent" />
                <dt className="font-display text-3xl tabular-nums text-ink">{stat.value}</dt>
                <dd className="mt-1 text-sm text-ink-muted">{stat.label}</dd>
                <dd className="mt-0.5 text-xs text-ink-muted/70">{stat.description}</dd>
              </div>
            </Reveal>
          );
        })}
      </dl>
    </section>
  );
}
