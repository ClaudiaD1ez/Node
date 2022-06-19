const { Professional } = require("../models/profesional");

let persona1 = new Professional ("Paco" , 77 , "masc" , 66 , 180, 0);
let persona2 = new Professional ("Ana" , 38 , "fem" , 85 , 140, 1);
let persona3 = new Professional ("Sara" , 23 , "fem" , 53 , 158, 2);

let profes = [persona1 , persona2 , persona3];

function getStart(request,response){
    let respuesta = {error:true, codigo:200,mensaje:"Punto de inicio"};
    response.send(respuesta);
    next();
}



function getProf(request, response){
    let respuesta;
    let id = request.query.id
    console.log(id);

    if(id == null){
        if(profes != null )
            {respuesta = { error:false,  codigo: 200, profesionales: profes}}
        else{
            respuesta = {error:false,codigo:200, mensaje:"El profesional no existe"}}
        
        console.log(respuesta)

    } else {

        if(profes != null && profes[id]){
            respuesta = profes[id]
        }else{
            respuesta = {error:true,codigo:200, mensaje:"El profesional con id ${id} no existe"}}
        console.log(respuesta);
    }

    response.send(respuesta);
}

function postProf(request,response){
    let respuesta;
    console.log(request.body)

    if(profes != null ){
            let prof = new Professional(request.body.name,
                                    request.body.genre,
                                    request.body.age,
                                    request.body.weight,
                                    request.body.height,
                                )
            console.log(prof);
            profes.push(prof)
            respuesta = {error:false, codigo: 200, mensaje: "Profesional añadido",
                         resultado:prof }
    } else{
        respuesta = {error:false, codigo: 200, mensaje: "Profesional ya existe",
                     resultado:null}
    }
    response.send(respuesta);
}

function putProf(request,response){
    let respuesta;
    let id = request.body.id;

_:
    if( profes != null){

        for(i=0 ; i<profes.length ; i++){
            if(i == request.body.id){
                profes[i].name = request.body.name;
                profes[i].age = request.body.age;
                profes[i].genre = request.body.genre;
                profes[i].weight = request.body.weight;
                profes[i].height = request.body.height;
                profes[i].id = request.body.id

            }

        }
        respuesta = {error:false, codigo: 200, mensaje: "Profesional actualizado", resultado:profes}

    }else{
        respuesta = {error:true, codigo:200, mensaje:'El profesional no existe', resultado:profes};

    }
    response.send(respuesta)
}


function deleteProf(request,response){
    let respuesta;
    let id = request.body.id;
    console.log(request.body);
    if(id != null){

        for(i=0 ; i<profes.length ; i++){
            if(i == request.body.id){
                profes.splice(i,1);
            }

        }
        respuesta = {error:false, codigo: 200, mensaje: "Profesional borrado", resultado:null}
   
    }else{
        respuesta = {error:true, codigo: 200, mensaje: "El profesional no existe", resultado:null}
    }
    console.log(respuesta);
    response.send(respuesta)
}

module.exports = {getProf , getStart, postProf, putProf, deleteProf};
