const http = require ('http');


const server = http.createServer(function(request,response){

    console.log("Peticion recibida del cliente");
    console.log("request URL:" + request.url);
    console.log("Request method:" + request.method);
    console.log(request.headers["user-agent"]);
    console.log(request.headers["content-type"]);
    console.log(request.headers["content-length"]);


    if(request.url == "/"){
        let obj={
            ok: true,
            message: 'Recibido!'
        }
        response.write(JSON.stringify(obj));
    
    }else if(request.url == "/bye"){
        let obj={
            ok: true,
            message: 'Adios!'
        }
        response.write(JSON.stringify(obj));
    }

        response.end()

});

server.listen(3000);            