/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
        domains: ["velog.velcdn.com"],
    },
};

module.exports = nextConfig;