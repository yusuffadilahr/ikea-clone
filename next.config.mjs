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
            },
            {
                pathname: '**',
                hostname: 'randomuser.me',
                protocol: 'https'
            },
            {
                pathname: '**',
                hostname: 'www.inter.ikea.com',
                protocol: 'https'
            },
            {
                pathname: '**',
                hostname: 'd2xjmi1k71iy2m.cloudfront.net',
                protocol: 'https'
            },
            {
                pathname: '**',
                hostname: 'flexaworld.com',
                protocol: 'https'
            }
        ],
        formats: ['image/avif', 'image/webp']
    }
};

export default nextConfig;
