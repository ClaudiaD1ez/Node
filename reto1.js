// Hacer que se imprima un mensaje que indique “Mensaje 1” nada más ejecutar el programa.
//Pasados tres segundos, se debe imprimir “Mensaje 2”.
//Y después de que se imprima este mensaje, que se imprima “Mensaje 3”

console.log("Mensaje 1")
setTimeout(function(){console.log("Mensaje 2")
                      console.log("Mensaje 3")},3000)
         
    
            //  RETO 2
// Crea un objeto con las siguientes propiedades: name, surname, age.
let fs = require('fs');

let Persona={
            "name" : "Paco",
            "surname" : "Ramirez",
            "age" : 53
             }


function leerescribir(obj){
    fs.writeFile('reto2.json',JSON.stringify(Persona),function(){
        fs.readFile("reto2.json",function(err,objLeido){
            console.log(JSON.parse(objLeido))
        })
    })   
}

leerescribir(Persona)