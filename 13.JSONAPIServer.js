var http = require('http')
var url = require('url')
// https://www.npmjs.com/package/through2-map
var map = require('through2-map')
var port = process.argv[2]

var server = http.createServer(function (req, res) {
    var path = url.parse(req.url, true).pathname
    var iso = url.parse(req.url, true).query.iso
    var date = new Date(iso)
    var json = new Object
    
    if (path == '/api/parsetime') {
        json.hour = date.getHours()
        json.minute = date.getMinutes()
        json.second = date.getSeconds()
    } else if (path == '/api/unixtime') {
        json.unixtime = date.getTime()
    } else {
        console.log('Err: unidentified route')
    }
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(json))
    // console.log("iso: " + iso)
    // console.log("json: " + JSON.stringify(json))
})

console.log('Server starting...')
server.listen(port)