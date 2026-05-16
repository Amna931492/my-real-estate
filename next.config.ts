/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Ye har qism ki website ki images allow kar dega
      },
    ],
  },
};

export default nextConfig;