// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ["@heroicons/vue", "@headlessui/vue"],
  },

  css: ["@/assets/css/main.css"],


  // modules: ["~/modules/socket.ts"],
})
