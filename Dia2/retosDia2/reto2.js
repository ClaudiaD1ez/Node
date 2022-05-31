const { readFile } = require('fs')
const fs = require('fs/promises')

// • Crea un objeto con las siguientes propiedades: name, surname, age.

// • Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
// objeto e imprimelo por consola.

// • Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de
// ejecutar el archivo de nuevo.



let persona={
    "name" : "Paco",
    "surname" : "Ramirez",
    "age" : 53
     }


// function leerescribir(obj){
// fs.writeFile('reto2.json',JSON.stringify(Persona),function(){
// fs.readFile("reto2.json",function(err,objLeido){
//     console.log(JSON.parse(objLeido))
// })
// })   
// }

function leerescribir(persona){
    fs.writeFile('reto2.json',JSON.stringify(persona))
    .then(() => {
        return fs.readFile ('reto2.json','utf-8')
    })
    .then( data => {
        console.log(JSON.parse(data));
    })
    .catch(err => {
        console.log(err);
    })
}

leerescribir(persona);


async function leerescribir2(persona){

    try{
        
    await  fs.writeFile('reto2.json',JSON.stringify(persona));
    
    const data = await fs.readFile ('reto2.json','utf-8');

    console.log(JSON.parse(data));

    }catch(error){
        console,log(error)
    }

}

leerescribir2(persona);