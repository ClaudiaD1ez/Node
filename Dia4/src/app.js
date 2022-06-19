const express = require("express")
const cors = require('cors')
const profRouters = require("./routers/profesional.routers")
const profesRouters = require("./routers/profesionales.routers")
const profContrl = require("../src/controller/profesional.controller")
const errorHandling = require("./error/errorHandling");

const app = express();

app.set("port", 3000)

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(profRouters);
app.use(profesRouters);
app.use(function(req,res,next){
    res.status(404).json({error:true,
                        codigo:404,
                        message:"Endpoint doesnt found"})
})

app.use(errorHandling);

module.exports = app;
