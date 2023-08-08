/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },

    async redirects() {
        return [
            {
                source: '/',
                destination: '/tashkent',
                permanent: true
            },
        ];
    }
}

module.exports = nextConfig
