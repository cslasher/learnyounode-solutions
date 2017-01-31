var net = require('net')
var port = process.argv[2]
var date = new Date()

var server = net.createServer(function (socket) {
    socket.end(date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + "\n")
})

server.listen(port)

