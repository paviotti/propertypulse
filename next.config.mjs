/** @type {import('next').NextConfig} */
const nextConfig = {
  // declaração necessária para exibir imagem de logo do Auth na página
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
