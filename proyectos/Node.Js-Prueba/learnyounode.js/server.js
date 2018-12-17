const { formatNumber } = require("./formatNumber");

var port = process.argv[2];
var net = require('net');  

var server = net.createServer(function (socket) {
        socket.end(getFormattedDate() + '\n');
    })


server.listen(port) ;


function getFormattedDate() {
    var today = new Date();
   // return date format: “YYYY-MM-DD hh:mm”
    return [ today.getFullYear(),ponerEl0(today.getMonth() + 1),ponerEl0(today.getDate()) ].join('-')+ ' ' +
    [ponerEl0(today.getHours()),ponerEl0(today.getMinutes()) ].join(':');
}

function ponerEl0(number) {
    return number < 10 ? '0' + number : number;
}