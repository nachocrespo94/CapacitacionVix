var port = process.argv[2];
var archivo = process.argv[3];
var http=require('http');
var fs=require('fs');



http.createServer(function(req, res) {
 res.writeHead(200, { "content-type" : "text/plain" });
 
 fs.createReadStream(archivo).pipe(res);
}).listen(port);


