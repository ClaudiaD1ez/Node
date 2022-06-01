const express = require ('express');
const { allowedNodeEnvironmentFlags } = require('process');
const app = express ();

app.get('/', function(req,res){
    console.log("Peticion recibida del cliente");
    console.log("request URL:" + req.url);
    console.log("Request method:" + req.method);
    console.log(req.headers["user-agent"]);

        let obj={
            ok: true,
            message: 'Recibido!'
        }

        res.send(JSON.stringify(obj));
    
});


app.get('/bye', function(req,res){
    console.log("Peticion recibida del cliente");
    console.log("request URL:" + req.url);
    console.log("Request method:" + req.method);
    console.log(req.headers["user-agent"]);

    
  
        let obj={
            ok: true,
            message: 'Adios!'
        }
        res.send(JSON.stringify(obj));
    

     
});

app.listen(4000);