const express = require("express");
const cors = require("cors");
const genericError = "Sorry, something went wrong!";
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const whitelist = ["http://localhost:4200"]; //Change to the port in which react app is running
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json("Welcome to Docker Application...");
});


// list books route
app.get("/books", (req, res) => {
  res.json([
    { "id": 1, "title": "First book"},
    { "id": 2, "title": "Second book"},
    { "id": 3, "title": "Third book"},
    { "id": 4, "title": "Fourth book"},
    { "id": 5, "title": "Fifth book"},
  ]);
});


// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});