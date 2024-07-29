// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  pages: true,
  css: [
    "@/assets/styles/global.scss", // Add the path to your global SCSS file here
  ],
  build: {
    loaders: {
      scss: {
        additionalData: '@import "@/assets/styles/global.scss";', // Ensure the correct path
      },
    },
  },
});
