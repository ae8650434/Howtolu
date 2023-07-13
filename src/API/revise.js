var DB = require("../API/DB");
var express = require("express");
var app = express.Router();

app.get(':mail', (req,res) => {
    var mail = req.params.mail;
    console.log(mail)
})



module.exports = app;
