var DB = require("../API/DB");
var express = require("express");
var app = express.Router();

var sql = 'SELECT * FROM `order` left join member ON `order`.mid = member.mid WHERE member.mid = ?'
app.get('/order', (req,res) => {
    
})

module.exports = app;