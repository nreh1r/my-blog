const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            nextConfig,
            env: {
                mongodb_username: "andre",
                mongodb_password: "andre5",
                mongodb_clustername: "cluster0",
                mongodb_database: "my-site",
            },
        }
    }

    return {
        nextConfig,
        env: {
            mongodb_username: "andre",
            mongodb_password: "andre5",
            mongodb_clustername: "cluster0",
            mongodb_database: "my-site",
        },
    }
}
