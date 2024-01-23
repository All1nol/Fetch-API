const express = require('express');
const { creteProxyMiddleware, createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

const target = 'https://pokeapi.co';

const apiProxy = createProxyMiddleware({ target, changeOrigin: true}); // change to target url

app.use('/', apiProxy);  // '/api' neden olmaz? 

const port = 3002;
app.listen(port, () => {
    console.log(`Proxy server is running on  http://localhost:${port}`);
});