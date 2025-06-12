const http = require('http')
const fs = require('fs')        // file system module handle your files and folder 

const server = http.createServer((req,res) =>{
    fs.readFile('index.html', (err, data) => {
        if(err){
            res.writeHead(500);         // fail your response 
            res.end("Error Page")
        }else{
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.end(data)
        }
    })
})

server.listen(8000, () =>{
    console.log("Server Running On Port Number 8000")
})
