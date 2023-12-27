/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./error.vue",
    "./app.vue",
  ],
  theme: {
    plugins: [],
    extend: {
      colors: {
        'zinc-300': '#DBDBDB',
        'zinc-700': '#3C3B45',
        'stone-100': '#F7EFEE',
        'fuchsia-900': '#7E1C75',
        'indigo-950': '#130D50',
        'orange-600': '#FF5B00',
        'neutral-500': '#6F6F6F'

      },
      fontFamily: {
        sans: ['acumin-variable', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    fontWeight: false
  },
}

