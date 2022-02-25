let log = {
    info: function(info){
        console.log(`Info: ${info}`)
    },
    warn: function(warn){
        console.log(`warn: ${warn}`)
    },
    error: function(error){
        console.log(`error: ${error}`)
    }
}

console.log('module.exports :' , module.exports)
module.exports = log

module.exports.display = function(){

}
