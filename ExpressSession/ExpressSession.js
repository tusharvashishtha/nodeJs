const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// About route
app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
