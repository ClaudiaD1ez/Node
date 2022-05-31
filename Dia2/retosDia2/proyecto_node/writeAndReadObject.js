const fs = require ('fs/promises')
const readline = require('readline')

function writeAndRead(path,obj){

    fs.writeFile(path,JSON.stringify(obj))
    .then(() =>{
        return fs.readFile(path, 'utf-8')
    })
    .then((dato) =>{                            // dato es lo que devuelve el return
        console.log(JSON.parse(dato))
    })
    .catch(err => {
        console.log(err)
    })

}



// let person={nombre:"juan",apellido:"Perez"}

// writeAndRead('prueba1.json',persona)


async function writeAndRead2(path,persona){

    try{
        await fs.writeFile(path,JSON.stringify(persona))
        let dato = await fs.readFile(path,persona);
        console.log(JSON.parse(dato))

    }catch(err){
        console.log(err)
    }
}

// writeAndRead2('prueba2.json',person)
module.exports = {writeAndRead, writeAndRead2};