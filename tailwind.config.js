/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
            },
            colors: {
                // Backgrounds
                page: '#121212',
                panel: '#1a1a1a',
                surface: '#242424',

                // Text
                plain: '#ededed',
                dim: '#a0a0a0',
                mute: '#666666',
            }
        },
    },
    plugins: [],
}
