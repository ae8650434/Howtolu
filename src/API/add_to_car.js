var DB = require("../API/DB");
var express = require("express");
var app = express.Router();

app.post('/', (req, res) => {
    var sql = 'INSERT INTO `car`(`mid`, `pid`, `fid`, `c_day`, `use_date`, `return_date`, `quantity`) VALUES (?,?,?,?,?,?,?)'
})


module.exports = app;