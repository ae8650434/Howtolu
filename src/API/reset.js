var DB = require("../API/DB");
var express = require("express");
var app = express.Router();

app.get('/:mid', function (req, res) {
    var sql = 'SELECT * FROM email_random where mid=?';
    // console.log("我想看一下",req.params)
    DB.query(
        sql, [req.params.mid], function (err, data) {
            if (err) {
                res.send("無法查詢資料");
            } else {
                res.json(data);
            }
        }
        )
        
})

module.exports = app;