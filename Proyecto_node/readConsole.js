let fs = require('fs');
let readline = require('readline');
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


function readConsole(callback){
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
                     }

                     callback(Person3)
            })
    })})     
}
    

module.exports = {readConsole}



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

                    fs.writeFile('reto3.json',JSON.stringify(Person3),function(){
                    fs.readFile("reto3.json",function(err,objLeido){
                        console.log(JSON.parse(objLeido))
                    })
                })
            
            
            
            
            })
    })})  
}