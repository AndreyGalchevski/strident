import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        dirs: ['pages', 'components', 'data', 'layout', 'styled', 'utils'],
    }
};

export default nextConfig;
