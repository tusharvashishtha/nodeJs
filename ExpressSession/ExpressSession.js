const express = require('express');
const session = require('express-session');

const app = express();

// Setup session middleware
app.use(session({
  secret: 'mysecretkey',        
  resave: false,                 
  saveUninitialized: true        
}));

// Route to count visits
app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`<h1>You have visited this page ${req.session.views} times</h1>`);
  } else {
    req.session.views = 1;
    res.send('<h1>Welcome! This is your first visit.</h1>');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
