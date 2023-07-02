/** @type {import('next').NextConfig} */
const nextConfig = {
    resolve: {
        fallback: { "querystring": require.resolve("querystring-es3") }
     }
}


module.exports = nextConfig
