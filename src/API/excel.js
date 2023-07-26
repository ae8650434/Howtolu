// 引用express套件
var express = require("express");
// 設置路由
var app = express.Router();
// 請求連線資料庫
var DB = require("./DB.js");

// 設置路由
app.get('/', function (req, res) {
    var sql = 'SELECT * FROM product';
    DB.query(
        sql, function (err, data) {
            if (err) {
                res.send("無法查詢資料");
            } else {
                res.send(JSON.stringify(data));

            }
        }
    )
})

app.post('/tocar', function (req, res) {
    var insql =
        "INSERT INTO car(mid,pid, c_day, use_date, return_date, quantity) VALUES (?,?,?,?,?,?)"
    DB.query(
        insql, [req.body.mid,
        req.body.pid,
        req.body.c_day,
        req.body.use_date,
        req.body.return_date,
        req.body.quantity,
    ], (err, data) => {
        console.log("你好", req.body.mid)
        // console.log("我", req.params.tel);
        // console.log("2222",data)
        return res.status(200).json({ data: data });
    }
    )
})

module.exports = app;