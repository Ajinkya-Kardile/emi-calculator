import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    compiler: {
        // Enables the Next.js SWC compiler for minification
        removeConsole: process.env.NODE_ENV === "production",
    },
};

export default nextConfig;
