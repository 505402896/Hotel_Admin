// const proxyObj = {}
// proxyObj['/'] = {
//   target: 'http://localhost:8081',
//   changeOrigin: true,
//   pathRewrite: {
//     '^/': ''
//   }
// }

module.exports = {
    outputDir: 'dist',
    assetsDir: 'static',
    publicPath: process.env.NODE_ENV === 'production' ? '/Hotel_Admin/' : '/',
    devServer: {
      host: 'localhost',
      port: 8080,
    //   proxy: {

    //   }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views'
            }
        }
    }
}