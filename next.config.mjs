/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Reemplaza 'nombre-de-tu-repositorio' por el nombre exacto de tu repo en GitHub
  basePath: '/nombre-de-tu-repositorio', 
};

export default nextConfig;