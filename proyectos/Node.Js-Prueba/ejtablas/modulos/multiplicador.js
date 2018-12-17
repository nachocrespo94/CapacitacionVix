
const fs = require('fs');


let datos = "";

function crearArchivo(base){

    return new Promise((resolve,reject) =>{

        if(!Number(base)){

            reject(`Esto => ${base} no es un numero`);
            return
        }

        for (let i = 0; i <= 10; i++) {
            datos += `${base} * ${i} = ${base * i} \n`;
        }
    
        fs.writeFile(`tablas/tabla-${base}.txt`, datos, (err) => {
      
        if (err)
           reject(err);
        else 
            resolve(`tablas/tabla-${base}.txt`);
        });
    })
}


function dandoCatedra(base){
    
    return new Promise((resolve,reject)=>{
        
        if(!Number(base)){

            reject(`Esta variable => ${base} no es un numero`);
            return
        }
        else{
            resolve(`La base ${ base }`);
        }
        
    })


}





module.exports={
    dandoCatedra,
    crearArchivo
}









