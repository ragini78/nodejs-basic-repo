const fs = require('fs')
const { isBuffer } = require('util')
// Asynchronous
fs.readFile("./filesystem/sample.txt", function(err,data){
    if(err){
        throw err

    }
    console.log(data.toString())
})
// Synchrounus
console.clear()
var data = fs.readFileSync("./filesystem/sample.txt")
console.log(data.toString())

// Write to file 

fs.writeFile("./filesystem/test.txt", (err,data) => {
    if(err){
        throw err
    }
    console.log("Write Operation completed")
})