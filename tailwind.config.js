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
                page: '#121212',      // previously bg-primary
                panel: '#1a1a1a',     // previously bg-secondary
                surface: '#242424',   // previously bg-elevated

                // Text
                copy: '#ededed',      // previously text-primary
                dim: '#a0a0a0',       // previously text-secondary
                mute: '#666666',      // previously text-muted
            }
        },
    },
    plugins: [],
}
