const WYR = require("./writeAndReadObject")
const RC = require("./readConsole")
// import { writeAndRead } from "./writeAndReadObject"
// import { readConsole } from "./readConsole"

let fs = require('fs');
let readline = require('readline');
var RL = readline.createInterface(process.stdin, process.stdout)

RC.readConsole(function(persona){
  WYR.writeAndRead("index.json",persona)
})
