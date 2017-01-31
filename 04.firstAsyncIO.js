var fs = require("fs")
var content = []

fs.readFile(process.argv[2], 'utf8', function (err, data) {
    if (err) {
        console.log(err)
    } else {
    content= data.split("\n")
    console.log(content.length - 1)
    }
})
