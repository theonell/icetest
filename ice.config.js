const path = require("path");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HappyPack = require("happypack");
const os = require("os");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const cssnano = require("cssnano");
const _ = require("lodash");
// const env = process.env.NODE_ENV;

module.exports = {
  entry: "src/index.js",
  publicPath: "./",
  plugins: [
    [
      "ice-plugin-fusion",
      {
        themePackage: "@icedesign/theme",
        uniteBaseComponent: "@alife/next",
        themeConfig: {
          nextPrefix: "nextfd-"
        }
      }
    ],
    [
      "ice-plugin-css-assets-local",
      {
        outputPath: "assets",
        relativeCssPath: "../"
      }
    ],
    [
      "ice-plugin-moment-locales",
      {
        locales: ["zh-cn"]
      }
    ]
  ],
  chainWebpack: (config, { command }) => {
    //   config.optimization.splitChunks({
    //     chunks: 'all',
    //     minSize: 30000, //模块大于30k会被抽离到公共模块
    //     minChunks: 1, //模块出现1次就会被抽离到公共模块
    //     maxAsyncRequests: 5, //异步模块，一次最多只能被加载5个
    //     maxInitialRequests: 3, //入口模块最多只能加载3个
    //     name: true,
    //     cacheGroups: {
    //       default: {
    //         minChunks: 2,
    //         priority: -20,
    //         reuseExistingChunk: true,
    //       },
    //       vendors: {
    //         test: /[\\/]node_modules[\\/]/,
    //         priority: -10
    //       }
    //     }
    //   })

    if (command === "build") {
      config.optimization
        .minimizer("ParallelUglifyPlugin") // 多进程压缩
        .use(ParallelUglifyPlugin, [
          {
            // 多进程压缩
            cacheDir: ".cache/",
            uglifyJS: {
              output: {
                comments: false,
                beautify: false
              },
              compress: {
                drop_console: true,
                collapse_vars: true,
                reduce_vars: true
              }
            },
            warnings: false
          }
        ]);

      config.plugin("HappyPack").use(HappyPack, [
        {
          id: "happyBabel",
          //如何处理  用法和loader 的配置一样
          loaders: [
            {
              loader: "babel-loader",
              babelrc: true,
              cacheDirectory: true // 启用缓存
            }
          ],
          //共享进程池
          threadPool: happyThreadPool,
          //允许 HappyPack 输出日志
          verbose: true
        }
      ]);
      config.plugin("OptimizeCssAssetsPlugin").use(OptimizeCssAssetsPlugin, [
        {
          cssProcessor: cssnano,
          cssProcessorOptions: {
            discardComments: {
              removeAll: true
            }
          }
        }
      ]);
    }
  },
  alias: {
    "@": path.resolve(__dirname, "src/")
  },
  proxy: {
    "/": {
      enable: true,
      target: "http://acme.cloud-ark.com:13306"
    }
  }
};
