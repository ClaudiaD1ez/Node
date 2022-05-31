const fs = require('fs');
const readline = require('readline')

function pregunta(pregunta){
    const question = new Promise((resolve,reject) =>{
        const rl = readline.createInterface({
            input:process.stdin,
            output: process.stdout
        });
        rl.question(pregunta,(respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question
}

////////////////


async function readConsole(){
    
    let persona = {nombre: null, apellido:null, edad:null}
   
   try{
       persona.nombre = await pregunta ("nombre:")
       persona.apellido = await pregunta ("apellido:")
       persona.edad = await pregunta ("edad:")
       console.log(persona.nombre)                            // no se puede hacer console.log del resultado de la promesa fuera de ella, solo retornar resultado

    }catch (err) {
        console.log(err)
    }

    return persona
    
}









function readConsole2(){
    const promesa = new Promise((resolve,reject) =>{

        let person = {nombre: null, apellido:null, edad:null}

        pregunta("nombre:")                  
         .then((respuesta) => {              
            person.nombre = respuesta
    
            return pregunta("apellido:") } )   
           .then((respuesta2) =>{
            person.apellido = respuesta2    
    
            return pregunta("edad:") })
           .then((respuesta3) => {
               person.edad = respuesta3
               resolve(person)
               console.log(person.nombre)
           })

           .catch (err => {
            console.log(err)
        })
        
    })

    return promesa

    } 

module.exports = {readConsole2,readConsole}


