const path = require('path');
let envContent = require('./prod.env')
let baseUrl = envContent.baseUrl

const utils = {
    assetsPath: function (_path) {
        const assetsSubDirectory = process.env.NODE_ENV === 'production'
            // 生产环境下的 static 路径
            ? 'static'
            // 开发环境下的 static 路径
            : 'static'

        return path.posix.join(assetsSubDirectory, _path)
    },
    resolve: function (dir) {
        return path.join(__dirname, '..', dir)
    }
}


function resolve(dir) {
    return path.join(__dirname, dir)
}

// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']

module.exports = {


    publicPath: "./",
    // 输出目录
    outputDir: 'dist',
    lintOnSave: false,
    // 是否为生产环境构建生成 source map？


    productionSourceMap: false,
    // alias 配置
    chainWebpack: (config) => {
        config.plugins.delete('prefetch')
        config.resolve.alias
            .set('@', resolve('src'))
            .set('vendor', resolve('src/vendor'))

        // 用cdn方式引入
        config.externals({
            // 'vue': 'Vue',
            // 'element-ui': 'ElementUI',
            // 'echarts': 'echarts',

        })

        // 全局注册sass变量   主题切换基础配置
        // const oneOfsMap = config.module.rule('scss').oneOfs.store
        // oneOfsMap.forEach(item => {
        //   item
        //     .use('sass-resources-loader')
        //     .loader('sass-resources-loader')
        //     .options({
        //       resources: './src/assets/scss/variable.scss'
        //
        //       // Or array of paths
        //       // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
        //     })
        //     .end()
        // })
    },

    configureWebpack: config => {
        config.module.rules.push({
            // 处理字体

            test: /\.(eot|ttf|otf|ttc)(\?.*)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('font/[name].[hash:7].[ext]')
                }
            },]
        })

        if (process.env.NODE_ENV === 'production') {
            // 生产环境
            // 为生产环境修改配置...


            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    threshold: 10240,
                    minRatio: 0.8,

                })
            );
            config.plugins.push(
                new UglifyJsPlugin({
                    // uglifyOptions: {
                    //     compress: {
                    //         drop_debugger: true, // console
                    //         drop_console: true,
                    //         pure_funcs: ['console.log'], // 移除console
                    //     },
                    // },
                    sourceMap: false,
                    parallel: true,
                }),
            );


        } else {
            // 开发环境

        }
        //去除开发环境测试

    },
    configureWebpack: {
        performance: {
            hints: 'warning',
            //入口起点的最大体积 整数类型（以字节为单位）
            maxEntrypointSize: 50000000,
            //生成文件的最大体积 整数类型（以字节为单位 300k）
            maxAssetSize: 30000000,
            //只给出 js 文件的性能提示
            assetFilter: function (assetFilename) {
                return assetFilename.endsWith('.js');
            }
        }
    },
    // CSS 相关选项
    css: {
        extract: true,
        // 是否开启 CSS source map？
        sourceMap: false,
        // 为预处理器的 loader 传递自定义选项。比如传递给
        // sass-loader 时，使用 `{ sass: { ... } }`。
        // loaderOptions: {}, // 为所有的 CSS 及其预处理文件开启 CSS Modules。


    },


    // 在多核机器下会默认开启。
    // parallel: require('os').cpus().length > 1,
    // PWA 插件的选项。
    pwa: {},
    // 配置 webpack-dev-server 行为。
    devServer: {
        disableHostCheck: true,
        proxy: {
            // '': {
            //   target:baseUrl,
            //   changeOrigin: true, // 允许websockets跨域
            //   // ws: true,
            //   pathRewrite: {}
            // },
            '/api': {
                target: baseUrl,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            },
            // '/report': {
            //     target: baseUrl,
            //     changeOrigin: true,
            //     pathRewrite: {
            //       '^/report': '/report'
            //     }
            // },
            '/file': {
                target: baseUrl,
                changeOrigin: true,
                pathRewrite: {
                    '^/file': '/file'
                }
            },
            // '/auth':{
            //     target: baseUrl,
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^/auth': '/auth'
            //     }
            // },
            // '/loginOff':{
            //     target: baseUrl,
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^/loginOff': '/loginOff'
            //     }
            // }

        }
    },
    // 第三方插件的选项
    pluginOptions: {},

}
