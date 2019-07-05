module.exports = {
    devServer: {
        open: false,
        host: '0.0.0.0',
        port: 8081,
        https: false,
        disableHostCheck: false,
        proxy: {
            '/api': {
                target: 'http://192.168.0.131:8081/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
            
        }
    }
}