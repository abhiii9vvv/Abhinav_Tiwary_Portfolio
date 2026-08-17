import { ElementType } from "react";

export function Reveal<T extends ElementType = "div">({
  children,
  className,
  as,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: T;
}) {
  const Component = as || "div";
  return <Component className={className}>{children}</Component>;
}
