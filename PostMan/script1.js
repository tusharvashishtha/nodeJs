const express = require("express");
const app = express();

app.get("/", (req, res)=> {
    res.send("Home")
})

app.post("./data/:number", (req, res) => {
    res.send("nice name btw");
})

app.listen(3000);