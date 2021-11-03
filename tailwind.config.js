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
            primary: '#63CCFF',
            dark: '#13202B'
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
