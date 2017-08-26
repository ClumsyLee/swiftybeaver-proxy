let httpProxy = require('http-proxy');

let proxy = httpProxy.createProxyServer({
  target: 'https://api.swiftybeaver.com',
  changeOrigin: true,
  secure: false
});

proxy.listen(8080);

proxy.on('proxyReq', function(proxyReq, req, res, options) {
  proxyReq.setHeader('Authorization', req.headers.authorization || ':');
});
