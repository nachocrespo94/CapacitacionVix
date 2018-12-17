var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    var urlObjecto = url.parse(req.url, true),
    pathname = urlObjecto.pathname,
    startTime = urlObjecto.query.iso,
    result;

    if (pathname === '/api/unixtime') {
        result = getUnixTimeStamp(startTime);
        }
        else if (pathname === '/api/parseTime') {
        result = getTimeObj(startTime);
        }
    // Si hay resultado
    if (result) {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(result));
    }else {
        res.writeHead(404); 
        res.end();
    }
}).listen(process.argv[2]);


