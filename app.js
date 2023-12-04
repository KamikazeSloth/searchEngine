const http = require('http');
const fs = require('fs');
const path = require('path');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./webpack.config.js');
const hotModuleConfig = require("webpack-hot-middleware")

const compiler = webpack(config);

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url);

    if (req.url === '/') {
        fs.readFile(path.join(__dirname, '/index.html'), (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
    else if (path.extname(filePath) === '.js') {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(data);
        });
    }
    else if (path.extname(filePath) === '.css') {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        });
    }
    else if (path.extname(filePath) === '.ttf') {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.writeHead(200, { 'Content-Type': 'font/ttf' });
            res.end(data);
        });
    }
    else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.on('request', (req, res) => {
    hotModuleConfig(compiler);

    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    })(req, res, () => {});
  });
  

server.listen(5000, () => {
    console.log("> server on 5000");
});
