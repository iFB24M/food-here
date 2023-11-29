/** @type {import('next').NextConfig} */
export default {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fb24m.ru',
				port: '',
				pathname: '/**/*'
			}
		]
	}
};