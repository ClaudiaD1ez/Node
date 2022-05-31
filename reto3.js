// Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
// módulo readline de node y solicita los valores del name, surname y age a través de la consola.

// Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método readline.

let readline = require('readline');
let fs = require('fs');
var RL = readline.createInterface(process.stdin, process.stdout)

let personaUno = readline
let name="";
let surname= "";
let age = "";


    Person={
    "name" : name,
    "surname" : surname,
    "age" : age,
     }

function crear(){
    RL.question('name: ', (name)=>{
        Person.name = name;
        RL.question("surname:", (surname)=>{
            Person.surname=surname;
            RL.question("age:", (age)=>{
                Person.age=age;
                Person3={
                    "name" : name,
                    "surname" : surname,
                    "age" : age,
                     },
                // console.log(Person3)
                

                fs.writeFile('reto3.json',JSON.stringify(Person3),function(){
                    fs.readFile("reto3.json",function(err,objLeido){
                        console.log(JSON.parse(objLeido))
                    })
                })
            
            
            
            
            })
    })})  
}

crear()


