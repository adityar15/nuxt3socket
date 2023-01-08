// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  runtimeConfig:{
    appUrl: process.env.NODE_ENV == "production" ? "https://nuxt3socket.onrender.com" : "http://localhost:3000",
  },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ["@/assets/css/main.css"],

  // modules: ["~/modules/socket.ts"],
})
