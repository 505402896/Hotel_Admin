module.exports = {
    outputDir: 'dist',
    assetsDir: 'static',
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