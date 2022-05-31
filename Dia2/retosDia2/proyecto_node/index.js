const WYR = require("./writeAndReadObject")
const RC = require("./readConsole")


// then y catch

RC.readConsole2()                                       // llamamos ala funcion para que lea lo que escribimos por consola y genere el obj
.then((persona) => {                                  // (persona es el obj que genera readConsol) recogemos el obj con el then
     WYR.writeAndRead('index.json',persona)           // llamamos a la funcion y le damos el obj por parametro y nos lo imprime en el path del parametro.
})


// async await
async function final(){
    try{
        let obj = await RC.readConsole()               // tengo que guardar el objeto que genera readConsole en una variable (let obj)
        await WYR.writeAndRead2('index2.json', obj )   //llamamos a la funcion dandole el path y el objeto que tenemos en la variable como parametro
    } catch(err){
        console.log(err)
    }
}

final()