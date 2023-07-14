// 引用express套件
var express = require("express");
// 設置路由
var app = express.Router();
// 請求連線資料庫
var DB = require("./DB.js");

// 設置路由

app.get('/', function (req, res) {
    var sql = 'SELECT * FROM product LEFT JOIN product_class ON product.pc_id = product_class.pc_id WHERE 1';
    DB.query(
        sql, function (err, data) {
            if (err) {
                res.send("無法查詢資料");
            } else {
                res.send( JSON.stringify(data) );
            }
        }
        )
        
})

module.exports = app;