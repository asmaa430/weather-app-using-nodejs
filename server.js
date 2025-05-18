const express = require("express");
const axios  = require("axios");
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Serve the public folder as static files
app.use(express.static("public"));

// Render the index template with default values for weather and error
app.get("/", (req, res) => {
  res.render("index", { weather: null, error: null });
});

// Handle the /weather route
app.get("/weather",async (req, res) => {
  // Get the city from the query parameters
  const city = req.query.city;
  const APIkey = "";

  // Add your logic here to fetch weather data from the API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imprial&appid=${APIkey}`;
  let weather;
  let error = null;
  try{
       const response = await axios.get(url);
       weather = response.data;

  }
  catch(err){
        weather = null;
        error = err;
  }
  // Render the index template with the weather data and error message
  res.render("index", { weather, error });
});

// Start the server and listen on port 3000 or the value of the PORT environment variable
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});