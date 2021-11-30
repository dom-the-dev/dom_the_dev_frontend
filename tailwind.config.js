const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
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
			secondary: '#63CCFF',
			primary: '#00FFD1',
			antoher: '#00D1FF',
			dark: '#13202B'
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
