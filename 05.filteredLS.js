var fs = require("fs")
var path = require("path")

fs.readdir(process.argv[2], function (err, list) {
    if (err) {
        console.log(err)
    }
    else {
        list.forEach(function (ele) {
            if (path.extname(ele) == "." + process.argv[3]) {
                console.log(ele)
            }
        })
    }
});