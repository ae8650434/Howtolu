// 引用express套件
var express = require("express");
// 設置路由
var app = express.Router();
// 請求連線資料庫
var DB = require("./DB.js");
const { resolve } = require("path");

// 設置路由
app.get('/', async (req, res) => {

    // console.log('看:',req.query) 
    var sql = 'SELECT * FROM `product` WHERE p_img = ? ';
    var insql = 'INSERT INTO `car`( `mid`, `pid`, `c_day`, `use_date`, `return_date`, `quantity`) VALUES (?, ?, ?, ?, ?, ?)';
    var midsql = 'SELECT `mid` FROM `member` WHERE tel = ?';

    DB.query(
        midsql, [req.query.mid], async (err, data) => {
            if (err) {
                res.send("無法查詢資料");
            } else {
                // res.send(JSON.stringify(data));  
                console.log('000', data)
            }
            for (let i = 0; i < req.query.items.length; i++) {
                await new Promise((resolve, reject) => {
                    const p_img = req.query.items[i]['圖片'];
                    const quantity = req.query.items[i]['數量(填入數字即可)'];
                    // console.log('img:',req.query.items[i])
                    DB.query(
                        sql, [p_img], async (err, datass) => {
                            console.log('88:', datass)
                            if (err) {
                                res.send("無法查詢資料");
                            } else {
                                // res.send(JSON.stringify(data));                            
                            }
                            console.log('數量', data[0].mid)
                            console.log('數量', datass[0].pid)
                            console.log('數量', req.query.excelStartDate)
                            console.log('數量', req.query.excelEndDate)

                            DB.query(
                                insql, [
                                data[0].mid,
                                datass[0].pid,
                                3,
                                req.query.excelStartDate,
                                req.query.excelEndDate,
                                quantity
                            ], (err, data) => {
                                if (err) reject(err);
                                else resolve(data);
                            }

                            )


                        }
                    )
                })
            }
            res.status(200).send('新增成功');
        }
    )
})

module.exports = app;