var http = require('http')
// https://npmjs.com/bl
var bl = require('bl')
var url = process.argv[2]

http.get(url, function(response) {
    response.pipe(bl(function (err, data) {
        var str = ""
        if (err) {
            console.log("Error: " + err)
        } else {
            str = data.toString()
            console.log(str.length)
            console.log(str)
        }
    }))
})