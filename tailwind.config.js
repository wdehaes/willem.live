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
        'stone-100': '#F7EFEE',
        'fuchsia-900': '#7E1C75',
        'indigo-950': '#130D50',
        'orange-600': '#FF5B00',

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

