// 引用express套件
var express = require("express");
// 設置路由
var app = express.Router();
// 請求連線資料庫
var DB = require("./DB.js");

// 設置路由

app.get('/', function (req, res) {
    var sql = 'SELECT * FROM ((car left JOIN product ON car.pid = product.pid) LEFT JOIN member ON car.mid = member.mid )left JOIN food ON car.fid = food.fid';
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

app.delete('/', function (req, res) {
    var sql = 'DELETE FROM car';
    DB.query(sql, function (err) {
        if (err) {
            res.status(500).send("刪除失敗");
        } else {
            res.send("成功刪除");
        }
    });
});

app.delete('/:foodId', function (req, res) {
    var foodId = req.params.foodId;
    var sql = 'DELETE FROM car WHERE fid = ?';
    DB.query(sql, [foodId], function (err, result) {
        if (err) {
            res.status(500).send("刪除失敗");
        } else {
            res.send("成功刪除");           
        }
    });
});


module.exports = app;