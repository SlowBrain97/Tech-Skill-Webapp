/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                'flash-light': {
                    '100%': {
                        borderColor: 'rgba(34,197,94,0.2)'
                    }
                }
            },
            animation: {
                'flash-light': 'flash-light 1s ease-out',
            }
        },
    },
    plugins: [],
}
