var http = require('http')
var fs = require('fs')
var port = process.argv[2]
var loc = process.argv[3]


var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })
    fs.createReadStream(loc).pipe(res)
})
console.log("Server starting...")
server.listen(port)

