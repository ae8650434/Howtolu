// 連接資料庫
var express = require("express");
var app = express.Router();
var DB = require("../API/DB");

app.post('/', function (req, res) {
    // var today = new Data();
    // var insql =
    //     "INSERT INTO  order(mid,order_date,use_date,return_date,price,os) VALUES (?,?,?,?,?,?)";
    // if (req.body.use_date != today) {
    //     req.body.os = 4
    // }
    // DB.query(
    //     insql, [req.body.mid,
    //     today,
    //     req.body.use_date,
    //     req.body.return_date,
    //     req.body.price,
    //     req.body.os,

    // ], (err, data) => {
    //     console.log("你好", req.body.mid)
    //     console.log("看一下7", data)
    //     return res.status(200).json({ data: data });
    // }
    // )
    console.log("看一下js",req.body)
})
module.exports = app;