let express = require("express");
let router = express.Router();

//Routes
router.get("/cars", (req,res) => {
    res.render("cars.ejs");
});

module.exports = router;
