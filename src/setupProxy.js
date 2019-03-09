const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'http://39.96.196.70:3000/api',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
    )
  )
}