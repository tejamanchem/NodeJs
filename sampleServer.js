var http = require('http');
let port =8080;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Hello this  is sample server fo node js  ");
  res.end();
}).listen(port);