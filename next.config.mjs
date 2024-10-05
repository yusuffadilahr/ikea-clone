/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                pathname: '**',
                hostname: 'www.ikea.com',
                protocol: 'https'
            },
            {
                pathname: '**',
                hostname: 'ikeamuseum.com',
                protocol: 'https'
            }
        ],
        formats: ['image/avif', 'image/webp']
    }
};

export default nextConfig;
