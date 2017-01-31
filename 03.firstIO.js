var fs = require("fs")
var str = ""
var content = []

str = fs.readFileSync(process.argv[2]).toString()
content = str.split("\n")

console.log(content.length - 1)