let empleados = [{
    id : 1,
    nombre : "Juan"

},{
    id : 2,
    nombre : "Roberto"
},
{
    id:3,
    nombre : "Nacho"
}]

let salarios = [{
    id:1,
    elsalario:1000
},{
    id:2,
    elsalario:2500
}]




let getEmpleado = async(id) => {

        let empl = empleados.find(empleado => {
            return empleado.id === id;
        })
        if(!empl){
            throw new Error(`No existe un usuario con el ID ${ id }`);
        }else {
            return empl;
        }
   
}


let getSalario = async(empleado) => {
    let salario = salarios.find(salario =>{
        return salario.id===empleado.id;
    })
    if(!salario){
        throw new Error(`${ empleado.nombre } no tiene salario`);
    }else {
        return salario;
    }
}




let getInformacion = async(id)=>{
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);
    return `${ empleado.nombre } tiene un salario de ${ salario.elsalario }`;
}


getInformacion(1)
                .then(mensaje =>{console.log(mensaje)})
                .catch(e => console.log(e));




