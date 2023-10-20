const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile(__dirname + '/index.html', (err, data) => {
      console.log("dir", __dirname)  
      if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }

        res.writeHead(200);
        res.end(data);
    })
});

server.listen(5000, () => {
    console.log("> server on 5000");
});