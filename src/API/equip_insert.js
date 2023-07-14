// 連接資料庫
var DB = require("../API/DB");
var express = require("express");
var app = express.Router();

// 安排路由 關聯product資料表才抓得到pid
app.post('/', function (req, res) {
// var mid = 
    // var csql =
    //     "SELECT * FROM (car left JOIN product ON car.pid = product.pid ) LEFT JOIN member ON car.mid = member.mid where mid=?";
    var msql = "SELECT * FROM member where tel=?";
    // var sql =
    //     "INSERT INTO car(mid,pid, c_day, use_date, return_date, quantity) VALUES (?,?,?,?,?,?)"
    DB.query(msql,[req.session.howtolu.tel],(err, data) => {

        console.log("123456",req.session.howtolu.tel);
        // console.log("2222",data)
    })


})