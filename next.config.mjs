/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Force apex domain -> www (permanent 301), matching the canonical
      // URLs declared throughout the app (layout, sitemap, robots, page
      // metadata). Only redirects the apex host so this can't ping-pong
      // with a www -> apex rule elsewhere.
      {
        source: "/:path*",
        has: [{ type: "host", value: "abhinavtiwary.online" }],
        destination: "https://www.abhinavtiwary.online/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // HSTS — tell browsers (and Google) to always use HTTPS for 1 year
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // Prevent MIME-type sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Prevent clickjacking
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Referrer policy
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
