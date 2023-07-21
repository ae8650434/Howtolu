var DB = require("../API/DB");
var express = require("express");
var app = express.Router();

var sql = 'SELECT * FROM member WHERE tel = ?'
var osql = 'SELECT * FROM `order` LEFT JOIN member ON `order`.mid = member.mid where member.mid = ?'
app.get('/', (req,res) => {
    var tel = req.query.account
    console.log('777',tel)
    DB.query(sql, [tel], (err, data) => {
        if(err) {
            console.log(err)
            return res.status(500).send('error')
        }else{
            console.log(data)
            DB.query(osql, [data[0].mid], (err, result) => {
            if (err) {
                console.log(err)
                return res.status(500).send('error')
            }else if(result.length == 0){
                return res.status(401).send('沒有歷史訂單')
            }
            else{
                return res.status(200).json({data: result})
            }
            })
        }
    })
})

app.get('/order_list', (req,res) => {
    var order_number = req.query.order_number
    console.log('3333',order_number)
    console.log(typeof order_number)
    var olsql = 'SELECT * FROM `order` LEFT JOIN `order_list` ON `order`.oid = `order_list`.oid WHERE `order_number` = ?'
    DB.query(olsql, [order_number], (err, data) => {
        if(err) {
            return res.status(500).send('error')
        }else {
            return res.status(200).json(data)
        }
    })
}) 

module.exports = app;