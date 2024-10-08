import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                "primary": "var(--primary)",
                "secondary": "var(--secondary)",
                "accent": "var(--accent)",
                "gray-broder-hover": "var(--gray-broder-hover)",
                "gray-broder": "var(--gray-broder)",
         }
        },
    },

    plugins: [forms],
};
