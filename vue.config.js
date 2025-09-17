const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

// vue.config.js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        // '@public':  resolve("public"),
        '@public': path.resolve(__dirname, 'public')
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "./src/assets/css/base.less";`,
          },
        },
      },
    },
  },
  // webpack-dev-server 相关配置
  //   devServer: {
  //     disableHostCheck: true,
  //   },
  chainWebpack: (config) => {
    //路径配置
    config.resolve.alias.set("@", path.resolve("./src"));
    config.plugin("html").tap((args) => {
      args[0].title = "Titelseite";
      return args;
    });
  },
  devServer: {
    // host: "localhost",
    // host: "192.168.137.1",
    disableHostCheck: true,
    // port: 8086, // 端口号
    // https: false, // https:{type:Boolean}
    // open: false, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    // performance: { hints: false },

    // 配置多个代理
    proxy: {
      "/headerimg": {
        // target: "https://gp.nyes.xyz" /**/,
        // target: "https://kjbpweb.testurl008.xyz" /**/,
        target:"https://www.renodigital.xyz/",
        // target: "https://www.dropsx.xyz" /**/,

        // target: process.env.test.VUE_APP_SERVER,  /**/
        // ws: true, // 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/headerimg": "/headerimg", //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
        },
      },
      "/api": {
        // target: "https://gp.nyes.xyz" /**/,
        // target: "https://kjbpweb.testurl008.xyz" /**/,
        // target: "https://drop2j0y0s.xyz/" /**/,
        target:"https://www.renodigital.xyz/",
        // target: process.env.test.VUE_APP_SERVER,  /**/
        // ws: true, // 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/api": "/api", //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
        },
      },
    },
  },
  //其他配置....
};
