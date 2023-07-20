var DB = require("../API/DB");
var express = require("express");
var app = express.Router();

var sql = 'SELECT * FROM member WHERE tel = ?'
var osql = 'SELECT * FROM `order` WHERE mid = ?'
app.get('/', (req,res) => {
    var tel = req.query.account
    console.log('777',tel)
    DB.query(sql, [tel], (err, data) => {
        if(err) {
            console.log(err)
            return res.status(500).send('error')
        }else if (data.length == 0){
            return res.status(401).send('沒有歷史訂單')
        }else{
            console.log(data)
            DB.query(osql, data[0].mid, (err, result) => {
            if (err) {
                console.log(err)
                return res.status(500).send('error')
            }else {
                return res.status(200).json({data: result})
            }
            })
        }
    })
})

module.exports = app;