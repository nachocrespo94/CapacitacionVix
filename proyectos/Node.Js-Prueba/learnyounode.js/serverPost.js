var map = require('through2-map');
var http = require('http');
var port = process.argv[2];


var server = http.createServer(function (req,res){

if(req.method=='POST'){
    req.pipe(map(function (data) {
        return data.toString().toUpperCase();
        })).pipe(res);
    }else {
        return console.log("No es un request METHOD POST");
    }
}).listen(port);





