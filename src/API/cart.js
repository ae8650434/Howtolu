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
    var msql = 'SELECT * FROM member WHERE tel = ?'
    var sql = 'DELETE FROM car where mid = ?';
    var account = req.query.account
    console.log('account', account)
    DB.query(msql, [account], (err, result) => {
        if (err) {
            console.log('1')
            res.status(500).json("查詢會員失敗");
        } else {
            if (result.length === 0) {
                console.log('2')
                res.status(404).json("找不到會員資料");
            } else {
                console.log('result', result)
                DB.query(sql, [result[0].mid], function (err) {
                    if (err) {
                        console.log('X')
                        res.status(500).json("刪除失敗");
                    } else {
                        console.log('O')
                        res.status(200).json("成功刪除");
                    }
                });
            }
        }
    });
});

//單一刪除裝備(含MySQL)
app.delete('/pid/:ProductId/:account', function (req, res) {
    var ProductId = req.params.ProductId;
    var account = req.params.account
    console.log('accountp', account)
    var msql = 'SELECT * FROM member WHERE tel = ?'
    var sql = 'DELETE FROM car WHERE pid = ? && mid = ?' ;
    DB.query(msql, [account], (err, data) => {
        if(err) {
            console.log(err)
        }else {
            DB.query(sql, [ProductId, data[0].mid], function (err, result) {
                if (err) {
                    res.status(500).json("刪除失敗");
                } else {
                    res.status(200).json("成功刪除");           
                }
            });
        }
    })
    
});

//單一刪除食材(含MySQL)
app.delete('/fid/:foodId/:account', function (req, res) {
    var foodId = req.params.foodId;
    var account = req.params.account
    console.log('accountf', account)
    var msql = 'SELECT * FROM member WHERE tel = ?'
    var sql = 'DELETE FROM car WHERE fid = ? && mid = ?';
    DB.query(msql, [account], (err, data) => {
        if(err) {
            console.log(err)
        }else {
            DB.query(sql, [foodId, data[0].mid], function (err, result) {
                if (err) {
                    res.status(500).json("刪除失敗");
                } else {
                    res.status(200).json("成功刪除");           
                }
            });
        }
    })
    
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