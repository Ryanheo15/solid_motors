let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
    res.render("index.ejs");
});

router.get("*", (req,res) => {
    res.send("Error Page");
});

module.exports = router;
