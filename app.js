// ---------------------- INIT -------------------------
//general
let express = require("express");
let mongoose = require("mongoose");
let ejs = require("ejs");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");

//mongoose - local connect
mongoose.connect("mongodb://localhost:27017/car_dealership", {useNewUrlParser: true, useUnifiedTopology: true});

//models

//routes
let indexRoute = require("./routes/index.js");

//app set up
let app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

//local varaibles
//Constant variables
const port = process.env.PORT || 3000;

// ---------------------- ROUTES -------------------------
app.use(indexRoute);

// ---------------------- LISTEN -------------------------
app.listen(port, () => {
  console.log("Listening on port " + port);
});
