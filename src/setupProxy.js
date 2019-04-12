const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/mobileWeb', { 
      target: 'https://www.missevan.com/',
      changeOrigin: true,
    }),
    proxy('/sound', { 
      target: 'https://www.missevan.com/',
      changeOrigin: true,
    }),
    proxy('/explore', { 
      target: 'https://www.missevan.com/',
      changeOrigin: true,
    }),
    proxy('/drama', { 
      target: 'https://www.missevan.com/',
      changeOrigin: true,
    }),
    proxy('/dramaapi', { 
      target: 'https://www.missevan.com/',
      changeOrigin: true,
    }),
    proxy('/site', { 
      target: 'https://www.missevan.com/',
      changeOrigin: true,
    }),

    proxy('/api', { 
      target: 'http://localhost:3000/',
      changeOrigin: true,
    }),
    
  )
}