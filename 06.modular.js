var filterDir = require('./filterDir')

filterDir(process.argv[2], process.argv[3], function (err, data) {
    if (err) {
        console.log("er" +err)
    } else {
       data.forEach(function (ele) {
           console.log(ele)
       })
    }
})