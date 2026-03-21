import { type Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			screens: {
				'2xl': '1536px',
				xl: '1280px',
				lg: '1024px',
				md: '768px',
				sm: '640px'
			}
		}
	},
	plugins: []
}

export default config
