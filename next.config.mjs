/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Force HTTP → HTTPS (permanent 301)
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://abhinavtiwary.online/:path*",
        permanent: true,
      },
      // Force www → apex domain (permanent 301)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.abhinavtiwary.online" }],
        destination: "https://abhinavtiwary.online/:path*",
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
