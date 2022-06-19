const {Professional} = require("../models/profesional")

let prof = null; 

function getStart(request,response){
    let respuesta = {error:true, codigo:200,mensaje:"Punto de inicio"};
    response.send(respuesta);
}


function getProf(request, response){
    let respuesta;
    if(prof != null){respuesta = prof}
    else{respuesta = {error:true,codigo:200, mensaje:"El profesional no existe "}}

    response.send(respuesta);
}

function postProf(request,response){
     
    let respuesta;
    console.log(request.body)

    if(prof === null){
            prof = new Professional(request.body.nombre ,
                                    request.body.genre,
                                    request.body.age,
                                    request.body.weight,
                                    request.body.height)
            respuesta = {error:false, codigo: 200, mensaje: "Profesional creado",
                         resultado:prof }
    } else{
        respuesta = {error:false, codigo: 200, mensaje: "Profesional ya existe",
                     resultado:null}
    }
    response.send(respuesta);
}



function putProf(request,response){
    let respuesta;

    if( prof != null){
        prof.nombre = request.body.nombre;
        prof.age = request.body.age;
        prof.genre = request.body.genre;
        prof.weight = request.body.weight;
        prof.height = request.body.height;
        console.log(prof)

        respuesta = {error:false, codigo: 200, mensaje: "Profesional actualizado", resultado:prof}

    }else{
        respuesta = {error:true, codigo:200, mensaje:'El profesional no existe', resultado:prof};

    }
    response.send(respuesta)
}

function deleteProf(request,response){
    let respuesta;

    if(prof != null){
        usuario = null;
        respuesta = {error:false, codigo: 200, mensaje: "Profesional borrado", resultado:prof}
    }else{
        respuesta = {error:true, codigo: 200, mensaje: "El profesional no existe", resultado:prof}
    }

    response.send(respuesta)
}


module.exports = {getProf , getStart, postProf, putProf, deleteProf};

