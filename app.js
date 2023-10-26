const http = require('http');
const fs = require('fs');
const path = require('path');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./webpack.config.js');
const hotModuleConfig = require("webpack-hot-middleware")

const compiler = webpack(config);

const server = http.createServer((req, res) => {
    // Determine the requested file path
    const filePath = path.join(__dirname, req.url);

    // Serve the index.html file by default
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
    // Serve JavaScript modules with the correct MIME type
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
    // Handle other file types as needed
    else {
        // Handle other file types or routes here
        // For example, you can serve CSS, images, or other resources.
        res.writeHead(404);
        res.end('Not Found');
    }
});

// Use Webpack Dev Middleware
server.on('request', (req, res) => {
    // Use the middleware to handle requests
    hotModuleConfig(compiler);

    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    })(req, res, () => {});
  });
  

server.listen(5000, () => {
    console.log("> server on 5000");
});

