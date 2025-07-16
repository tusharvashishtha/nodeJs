const http = require("http");
const server = http.createServer((req,res)=> {
    if(req.url === "/home"){
        res.end("Home")
    }else{
        res.end("Not found");
    }
})

server.listen(3000)
