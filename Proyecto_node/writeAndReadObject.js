let fs = require('fs');

 function writeAndRead(path, obj){
    fs.writeFile(path,JSON.stringify(obj),function(){
        fs.readFile(path,function(err,obj){
            console.log(JSON.parse(obj))
        })
    })
}

module.exports = {writeAndRead};