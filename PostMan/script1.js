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



const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


const userRoutes = require('./routes/userRoutes');


app.use('/api/users', userRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the Express App!');
});


app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
