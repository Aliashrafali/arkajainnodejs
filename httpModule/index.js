const http = require('http') // same as import in Reactjs

const data = {
    name:"Sohan Kumar",
    age:25,
    skill:"Full Stack Developer"
}

const server = http.createServer((req,res) =>{
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
})

server.listen(8000, () =>{
    console.log("Server Running On Port Number 8000")
})