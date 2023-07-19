// 連接資料庫
var express = require("express");
var app = express.Router();
var DB = require("../API/DB");

// 安排路由 關聯product資料表才抓得到pid
app.get('/', function (req, res) {
    var msql = "SELECT mid FROM member where tel=?";

    DB.query(
        msql, [req.query.tel], (err, data) => {
            // console.log("我", req.params.tel);
            // console.log("2222",data)
            return res.status(200).json({ data: data });
        });
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
        console.log("你好",req.body.mid)
        // console.log("我", req.params.tel);
        // console.log("2222",data)
        return res.status(200).json({ data: data });
    }
    )
})
module.exports = app;