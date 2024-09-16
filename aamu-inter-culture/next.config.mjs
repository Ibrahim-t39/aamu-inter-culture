/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "ufvqvhwxhqjjbvbvjkzz.supabase.co",
      "flagcdn.com",
      "upload.wikimedia.org",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
