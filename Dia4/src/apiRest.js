const app = require("./app")
// const profRouters = require("./routers/profesional.routers")
// const ProfContrl = require("../src/controller/profesional.controller")


app.listen(app.get("port"),function(){

    console.log("server listen on port" + app.get("port"))
})

