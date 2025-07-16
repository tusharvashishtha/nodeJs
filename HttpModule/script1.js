// we can create servers through http module

const http = require("http")

var server = http.createServer(function(req, res){
    res.end("hiii i am spiderman")    
})

server.listen(3000);

//it doesn't resfresh automatically you have to install a package from npm nodemon