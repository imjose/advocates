/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
		return [
			{
				source: "/",
				destination: "/advocates",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
