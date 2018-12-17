

const {crearArchivo,dandoCatedra} = require('./modulos/multiplicador');


let base ="9dfsdfs";



crearArchivo(base)
    .then(archivo => {console.log(`El archivo ${ archivo }se creo correctamente `)})
    .catch(e =>console.log(e)) 
    
    
dandoCatedra(base)
    .then(listaNumeros => {console.log(listaNumeros)})
    .catch(e=>console.log(e));



