const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/mobileWeb', { 
      target: 'https://www.missevan.com/',
      changeOrigin: true,
    })
  )
}