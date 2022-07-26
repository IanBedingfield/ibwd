import WindiCSS from 'vite-plugin-windicss'

export default {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./assets/scss/global/vars";
          @import "./assets/scss/global/mixins";
        `
      }
    }
  },
  plugins: [
    WindiCSS(),
  ],
}