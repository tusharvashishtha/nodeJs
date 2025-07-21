const express = require("express");
const app = express();

app.get("/", (req, res)=> {
    res.send("Hii hellow")
})

app.listen(3000);