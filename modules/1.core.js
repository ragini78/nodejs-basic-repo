// How to cretae web server?

const { response } = require('express')
const http = require('http')

http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'})
    response.end("Hello World , Welcom to NodeJS")
}).listen(8080)
