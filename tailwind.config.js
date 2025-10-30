/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#5a4a3a',
                    light: '#8b7355',
                    gold: '#c9a961',
                },
                cream: '#f5f0e8',
                dark: '#3a3028',
            },
            fontFamily: {
                serif: ['Cinzel', 'serif'],
                cursive: ['Cormorant Garamond', 'serif'],
                sans: ['Montserrat', 'sans-serif'],
            },
            animation: {
                fadeInDown: 'fadeInDown 1s ease',
                fadeInUp: 'fadeInUp 1s ease',
                expandWidth: 'expandWidth 1.5s ease',
                fadeIn: 'fadeIn 0.3s ease',
            },
            keyframes: {
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                expandWidth: {
                    '0%': { width: '0' },
                    '100%': { width: '12rem' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
