/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Build ke waqt ESLint errors ko ignore karega
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Build ke waqt TypeScript errors ko ignore karega
    ignoreBuildErrors: true,
  },
};

export default nextConfig;