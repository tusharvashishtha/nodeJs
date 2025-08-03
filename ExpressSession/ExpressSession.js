const express = require('express');
const app = express();
const expressSession = require('express-session');

app.use(expressSession({
  secret: "Hello",
  resave: false,
  saveUninitialized: false
}))


app.get("/create", function(req, res, next){
  req.session.polo = true
  res.send('Done')
})

app.get('/checks', function(req, res){
  console.log(req.session.polo)
})

app.get('/', function(req, res){
  res.send("Hii there!");
})

app.listen(3000);