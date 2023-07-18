// 連接資料庫
var express = require("express");
var app = express.Router();
var DB = require("../API/DB");

// 安排路由 關聯product資料表才抓得到pid
app.get('/', function (req, res) {
    var msql = "SELECT mid FROM member where tel=?";
    // var sql =
    //     "INSERT INTO car(mid,pid, c_day, use_date, return_date, quantity) VALUES (?,?,?,?,?,?)"
    DB.query(
        msql, [req.params.tel], (err, data) => {

            console.log("我", req.params.tel);
            // console.log("2222",data)
            return res.status(200).json({ data: data });
        })

})
module.exports = app;