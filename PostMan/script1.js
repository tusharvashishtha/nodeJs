// const express = require("express");
// const app = express();

// app.get("/", (req, res)=> {
//     res.send("Hii hellow")
// })

// app.listen(3000);


// const express = require("express");
// const app = express();

// app.get("/", (req, res)=> {
//     res.send("hii hello")
// })




    // ******** MIDDLEWARE FUNCTION **********

    const express = require('express');
    const app = express();

    app.use(function(req, res, next){
        console.log("hii");
        next();
    })

    app.get("/", function(req, res){
        res.send("nice name");
    })

    app.get("/about", function(req, res){
        res.send("About ,me")
    })

    app.listen(3000);