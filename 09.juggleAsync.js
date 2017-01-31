var http = require('http')
// https://npmjs.com/bl
var bl = require('bl')
var count = 0
var responses = []

function printResponses() {
    for (var i = 0; i < 3; i++) {
        console.log(responses[i])
    }
}

function httpGet(index) {
    http.get(process.argv[index + 2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            console.log("Error: " + err)
        }
        else {
                responses[index] = data.toString()
                count++
                if (count == 3) {
                        printResponses()
                }
            }
        }))
    })
}

for (var i = 0; i < 3; i++) {
    httpGet(i)
}
