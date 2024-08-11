// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://bapelitbang-be.vercel.app/:path*', 
        },
      ];
    },
  };
  
  export default nextConfig;
  