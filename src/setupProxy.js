const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        '/graphql',
        createProxyMiddleware({
            target: 'https://morhane.eu',
            changeOrigin: true,
        })
    );
};
