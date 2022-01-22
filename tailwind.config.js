const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
			}
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			primary: '#00FFD1',
			dark: '#1E293B',
			// dark: '#13202B',
			mid: '#CBD5E1',
			light: '#FFFFFF'
		},
		extend: {
			animation: {
				'spin-slow': 'spin 10s linear infinite',
			},
			zIndex: {
				'-10': '-10',
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
