const path = require("path");

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        // 向全局sass样式传入共享的全局变量, $src可以配置图片cdn前缀
        prependData: `
        @import "@/styles/variables.scss";
        $src: "${process.env.VUE_APP_OSS_SRC}";
        `,
      },
    },
  },
};
