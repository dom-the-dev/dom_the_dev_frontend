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
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
