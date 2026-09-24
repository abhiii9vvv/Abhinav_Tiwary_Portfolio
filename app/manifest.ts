import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name}, ${profile.role}`,
    short_name: profile.name,
    description: profile.headline,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f5f3",
    theme_color: "#E95420",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
