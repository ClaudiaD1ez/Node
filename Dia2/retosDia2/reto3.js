const fs = require('fs/promises')
const readline = require('readline')

// • Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
// módulo readline de node y solicita los valores del name, surname y age a través de la consola.

// • Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
// readline.


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





 async function crear(){
     let persona = {nombre: null, apellido:null, edad:null}
    
    try{
        persona.nombre = await pregunta ("nombre:")
        persona.apellido = await pregunta ("apellido:")
        persona.edad = await pregunta ("edad:")

        await  fs.writeFile('reto3.json',JSON.stringify(persona));
        const data = await fs.readFile ('reto3.json','utf-8');
        console.log(JSON.parse(data));

    }catch (err) {
        console.log(err)
    }
}

crear()


function crear2(){
    
    let person = {nombre: null, apellido:null, edad:null}

    pregunta("nombre:")                  // ---- llamamos a la funcion (promesa) pregunta qu enos devuelve la respuesta del parametro
     .then((respuesta) => {              // ---- capturamos la respuesta y la guardamos en una variable
         person.nombre = respuesta

    return pregunta("apellido:") } )  // llamamos a la funcion pregunta y retornamos la respuesta de la segunda pregunta (si no ponemos return primero nos referimos ala primera pregunta)
       .then((respuesta2) =>{
        person.apellido = respuesta2     // recogemos la respuesta de arriba y la volvemos a guardar

    return pregunta("edad:") })
       .then((respuesta3) => {
           person.edad = respuesta3
       })

       .then(() =>{
                fs.writeFile('reto3.2.json',JSON.stringify(person))
                .then(() => {
                    return fs.readFile ('reto3.2.json','utf-8')
                })
                .then( data => {
                    console.log(JSON.parse(data));
                })
                .catch(err => {
                    console.log(err);
                })
       })

    
    .catch (err => {
        console.log(err)
    })


    }                


crear2()