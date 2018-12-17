var directorio = process.argv[2];
var extension = process.argv[3];

var fs = require('fs');
var path = require('path');
var res = undefined;

function leerDirectorio(callback){
    fs.readdir(directorio,'utf8',function(err,data){
        if(err){
            console.log('Error');
        }else{
            res = data;
            callback();
        }
    })
}


function mostrar(){
    var ext ='.' +  extension;
    if(res!=undefined){
        for (let i = 0; i < res.length; i++) {
            var estaExt = path.extname(res[i]);
            if(estaExt==ext){
                console.log(res[i]);
            }
        }   
    }
}

leerDirectorio(mostrar);