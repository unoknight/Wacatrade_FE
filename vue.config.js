/*=========================================================================================
  File Name: vue.config.js
  Description: configuration file of vue
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

module.exports = {
  pages: {
    index: {
      entry: "src/pages/index/main.js",
      template: "public/client/index.html",
      title: "Home",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    moneyportal: {
      entry: "src/main.js",
      template: "public/index.html",
      title: "Admin",
      chunks: ["chunk-vendors", "chunk-common", "moneyportal"], //portal
    },
    daily: {
      entry: "src/dai-ly/main.js",
      template: "public/client/dai-ly.html",
      title: "Đại lý",
      chunks: ["chunk-vendors", "chunk-common", "daily"]
    },
    faqs: {
      entry: "src/faqs/main.js",
      template: "public/client/faqs.html",
      title: "SuperTrade faqs",
      chunks: ["chunk-vendors", "chunk-common", "faqs"]
    },
  },

  productionSourceMap: false,

  //cssSourceMap: false,
  // publicPath: '/',
  // transpileDependencies: [
  //   'vue-echarts',
  //   'resize-detector'
  // ],
  // configureWebpack: {
  //   // optimization: {
  //   //   splitChunks: {
  //   //     chunks: 'all'
  //   //   }
  //   // }
  //   devServer: {
  //     historyApiFallback: true
  //   }
  // }
}
