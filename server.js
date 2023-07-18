// Express Server
const express = require("express");
const studentRoutes = require('./src/student/routes')

const app = express();
const port = 3000;

// Middleware allows us to post and get json
app.use(express.json());

// Home Room
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Use that path to hit the using api route
app.use('/api/v1/students', studentRoutes);

// Listening message
app.listen(port, () => console.log(`app listening on port ${port}`));
