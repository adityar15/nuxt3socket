// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ["@/assets/css/main.css"],
  //   serverHandlers: [
  //     {
  //       route: "/socket.io",
  //       handler: "~/server-middleware/socket",
  //     },
  //   ],

  plugins: ["~/plugins/socketserver.server.ts"],

  nitro:{
    preset: 'render-com'
  }
})
