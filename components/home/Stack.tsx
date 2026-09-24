import { foundations, stackLayers } from "@/content/skills";
import { BrandIcon } from "@/components/BrandIcon";
import { Container, SectionHead } from "@/components/ui";

export function Stack() {
  return (
    <section id="stack" className="py-24 sm:py-32">
      <Container>
        <SectionHead
          title="Every layer of the product"
          intro="I work the whole request path, from the button someone taps to the server that answers. Here is what I use at each layer, and where I've shipped it."
        />

        <div data-reveal className="on-ink relative mt-14 overflow-hidden rounded-[2rem] bg-ink text-bg">
          <ol className="relative">
            {/* Request rail: a pulse travels down through every layer, node to node. */}
            <div aria-hidden="true" className="absolute bottom-[5rem] left-[2.75rem] top-[2.7rem] hidden w-px bg-bg/15 md:block">
              <span className="stack-pulse absolute inset-0" />
            </div>
            {stackLayers.map((layer, i) => (
              <li
                key={layer.id}
                className="group relative grid gap-5 border-bg/10 px-6 py-7 transition-colors duration-300 hover:bg-bg/[0.04] sm:px-8 md:grid-cols-[13rem_1fr] md:pl-[5.5rem] lg:grid-cols-[14rem_1fr_15rem] [&:not(:last-child)]:border-b"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-[2.75rem] top-[2.35rem] hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-bg/30 bg-ink transition-colors duration-300 group-hover:border-accent group-hover:bg-accent md:block"
                />

                <div>
                  <h3 className="text-xl font-bold tracking-tight">{layer.label}</h3>
                  <p className="mt-1 text-sm text-bg/55">{layer.role}</p>
                </div>

                <ul className="flex flex-wrap content-start gap-2">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 rounded-xl border border-bg/10 bg-bg/[0.06] py-2 pl-2.5 pr-3.5 text-sm transition-[transform,border-color] duration-300 group-hover:-translate-y-px group-hover:border-bg/20"
                    >
                      <BrandIcon name={item} className="h-[18px] w-[18px]" />
                      {item.replace(" API", "")}
                    </li>
                  ))}
                </ul>

                <div className="md:col-start-2 lg:col-start-auto">
                  <p className="font-mono text-xs text-bg/50">Shipped in</p>
                  <p className="mt-1.5 text-sm leading-relaxed">
                    {layer.shippedIn.map((name, j) => (
                      <span key={name}>
                        <span className="font-medium">{name}</span>
                        {j < layer.shippedIn.length - 1 && <span className="text-bg/40">, </span>}
                      </span>
                    ))}
                  </p>
                </div>

                <span className="sr-only">
                  Layer {i + 1} of {stackLayers.length}
                </span>
              </li>
            ))}
          </ol>

          <div className="flex flex-col gap-4 bg-accent px-6 py-6 text-white sm:px-8 md:flex-row md:items-center md:pl-[5.5rem]">
            <p className="shrink-0 font-medium md:w-[13rem] lg:w-[14rem]">
              Underneath it all
              <span className="block text-sm font-normal text-white/75">250+ DSA problems solved</span>
            </p>
            <ul className="flex flex-wrap gap-2">
              {foundations.map((f) => (
                <li key={f} className="rounded-full border border-white/30 px-3.5 py-1.5 text-sm text-white">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
