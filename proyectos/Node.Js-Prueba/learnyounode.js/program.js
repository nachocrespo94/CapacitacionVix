var extension = process.argv[3];
var directorio = process.argv[2];
var filtro = require('./modulo');

function leerDirectorio(callback){
    filtro(directorio , extension ,function (err,data){
        if(err){
            return callback();
        }
        res=data;
        return callback(data);
    }) 
}


function mostrar(dato){
    if(dato!=undefined){
        dato.forEach(element => {
            console.log(element);              
        });
  
    }
}


leerDirectorio(mostrar);





/*

  LA OTRA ALTERNATIVA


filtro(directorio,extension, function(err,list){
    if (err) {
        return console.error('There was an error:', err)
      }
    list.forEach(function (file){
        console.log(file);
    })
})

*/