// 引用express套件
var express = require("express");
// 設置路由
var app = express.Router();
// 請求連線資料庫
var DB = require("./DB.js");

// 設置路由
app.get('/', function (req, res) {
    // var account = req.query.account
    var sql = 'SELECT * FROM ((car left JOIN product ON car.pid = product.pid) LEFT JOIN member ON car.mid = member.mid )left JOIN food ON car.fid = food.fid';
    
            DB.query(
                sql,function (err, data) {
                    if (err) {
                        res.send("無法查詢資料");
                    } else {
                        res.send(JSON.stringify(data));
                    }
                }
            )
    })
    

//一鍵刪除
app.delete('/', function (req, res) {
    var sql = 'DELETE FROM car';
    DB.query(sql, function (err) {
        if (err) {
            res.status(500).json("刪除失敗");
        } else {
            res.status(200).json("成功刪除");
        }
    });
});

//單一刪除裝備(含MySQL)
app.delete('/pid/:ProductId', function (req, res) {
    var ProductId = req.params.ProductId;
    var sql = 'DELETE FROM car WHERE pid = ?' ;
    DB.query(sql, [ProductId], function (err, result) {
        if (err) {
            res.status(500).json("刪除失敗");
        } else {
            res.status(200).json("成功刪除");           
        }
    });
});

//單一刪除食材(含MySQL)
app.delete('/fid/:foodId', function (req, res) {
    var foodId = req.params.foodId;
    var sql = 'DELETE FROM car WHERE fid = ?';
    DB.query(sql, [foodId], function (err, result) {
        if (err) {
            res.status(500).json("刪除失敗");
        } else {
            res.status(200).json("成功刪除");           
        }
    });
});

//更新資料庫'裝備'數量
app.put('/pid/:ProductId', function (req, res){
    var ProductId = req.params.ProductId;
    var newQuantity = req.body.quantity;
    var sql = 'UPDATE car SET quantity = ? WHERE pid = ?';
    DB.query(sql, [newQuantity, ProductId], function (err, result) {
        if (err) {
            res.status(500).json("更新失敗");
        } else {
            res.status(200).json("成功更新數量");
        }
    })
})

//更新資料庫'食材'數量
app.put('/fid/:FoodId', function (req, res){
    var FoodId = req.params.FoodId;
    var newQuantity = req.body.quantity;
    var sql = 'UPDATE car SET quantity = ? WHERE fid = ?';
    DB.query(sql, [newQuantity, FoodId], function (err, result) {
        if (err) {
            res.status(500).json("更新失敗");
        } else {
            res.status(200).json("成功更新數量");
        }
    })
})


module.exports = app;