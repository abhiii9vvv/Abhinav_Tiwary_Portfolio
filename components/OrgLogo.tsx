import Image from "next/image";
import { BrandIcon } from "@/components/BrandIcon";

const orgLogos: Record<string, string> = {
  "LifeHerba × Global Pact": "/brand-icons/lifeherba.png",
  SkyCodeHub: "/brand-icons/skycodehub.svg",
  "Unessa Foundation": "/brand-icons/unessa.png",
  "Sharda University": "/brand-icons/sharda.png",
};

/** Organisation logo on a white tile, so brand marks read in both themes. */
export function OrgLogo({ org, className = "h-12 w-12" }: { org: string; className?: string }) {
  if (org === "Paytm") {
    return (
      <span className={`relative grid shrink-0 place-items-center rounded-2xl border border-line bg-white ${className}`}>
        <BrandIcon name="Paytm" className="h-[58%] w-[58%]" onLight />
      </span>
    );
  }
  const src = orgLogos[org];
  return (
    <span className={`relative shrink-0 overflow-hidden rounded-2xl border border-line bg-white ${className}`}>
      {src ? (
        <Image src={src} alt="" fill sizes="48px" className="object-contain p-2" />
      ) : (
        <span className="grid h-full place-items-center font-bold text-[#181615]">{org.slice(0, 1)}</span>
      )}
    </span>
  );
}
