

var fs = require('fs');
var path = require('path');
var ret;
var res =[];


module.exports = function filtro(directorio , extension ,callback){
    fs.readdir(directorio,"utf8",function(err,data){
        if(err){
            console.log("Entro , pero hay un error con el readir en el modulo");
            callback(err);
        }else {
            ret=data;
            var ext = '.' + extension;
            if(ret!=undefined){
                for(let i = 0 ; i< ret.length;i++){
                    var estaExt = path.extname(ret[i]);
                    if(estaExt===ext){
                        res.push(ret[i]);
                    }
                }
                callback(null,res);
            }
        }
    })
}




  /*

 LA OTRA ALTERNATIVA 


const fs = require('fs')
    const path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }


*/