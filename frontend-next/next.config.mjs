/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.dummyjson.com',
                port: '',
                pathname: '/product-images/**', // الگوی مسیر تصاویر
            },
        ],
    },
};

export default nextConfig;
