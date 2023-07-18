var DB = require("../API/DB");
var express = require("express");
var app = express.Router();
var bcrypt = require("bcrypt");

app.get('/', (req, res) => {
    var account = req.query.account
    console.log(account)
    var sql = 'SELECT * FROM member WHERE tel = ?'
    DB.query (sql, [account], (err,data) => {
        if(err) {
           return res.status(500).send('Error')
        }

        if(data.length === 0) {
            return res.status(401).send('未登入')
        }else {
            return res.status(200).json({userdata: data[0]});
        }
    })

})


module.exports = app;