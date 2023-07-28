// 連接資料庫
var express = require("express");
var app = express.Router();
var DB = require("../API/DB");

// 安排路由 關聯product資料表才抓得到pid
app.get('/', function (req, res) {
    var msql = "SELECT mid FROM member where tel=?";

    DB.query(
        msql, [req.query.tel], (err, data) => {

            console.log("我", req.params.tel);
            // console.log("2222",data)
            return res.status(200).json({ data: data });
        });
})

app.post('/foodadd', function (req, res) {
    var cmaql = 'SELECT * FROM car WHERE mid = ? && fid = ?'
    var insql =
        "INSERT INTO car(mid,fid, quantity) VALUES (?,?,?)"
    var updatesql = 'UPDATE car SET quantity = ? WHERE mid = ? && fid = ?'
    DB.query(cmaql, [req.body.mid,req.body.fid], (err, result) => {
        if(err) {
            console.log(err)
        }else if (result.length == 0) {
            console.log('result',result)
            DB.query(
                insql, [req.body.mid,
                req.body.fid,
                req.body.quantity,
            ], (err, data) => {
                if(err) {
                    console.log(err)
                }else {
                    return res.status(200).json({ data: data });
                }
            }
            )
        }else {
            console.log('result',typeof result[0].quantity)
            console.log('result2',typeof parseFloat(req.body.quantity))
            DB.query(updatesql, [(result[0].quantity + parseFloat(req.body.quantity)),req.body.mid,req.body.fid], (err, results) => {
                if(err){
                    console.log(err)
                }else {
                    return res.status(200).json({ data: results }); 
                }
            })
        }
    })
    
})
module.exports = app;