/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- Esto le dice a Next.js que genere HTML/CSS puro
  images: {
    unoptimized: true, // Evita errores con imágenes en GitHub Pages
  },
};

export default nextConfig;