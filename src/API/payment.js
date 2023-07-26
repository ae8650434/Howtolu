// 連接資料庫
var express = require("express");
var app = express.Router();
var DB = require("../API/DB");
const { select } = require("react-cookies");

app.post('/', function (req, res) {
    var today = new Date();
    // console.log("1111",today.slice(0,10))
    var insql =
        "INSERT INTO  `order`(mid,order_number,order_date,use_date,return_date,price,os) VALUES (?,?,?,?,?,?,?)";
    var sesql =
        "SELECT oid FROM `order` WHERE order_number=?";
    var upsql =
        " UPDATE `order` SET `order_number`=? WHERE oid=?";

    var olinsql =
        "INSERT INTO `order_list`(oid,pid,pname,p_img,fid,fname,f_img,p_quantity,f_quantity,p_os,f_os,p_price,f_price)VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";

    // 判斷租借日不等於今天，訂單狀態為 4未完成
    if (req.body.neworder.use_date != today) {
        req.body.neworder.os = 4
    }
    // 把結帳完成的資料 新增至資料庫order裡
    DB.query(
        insql, [req.body.neworder.mid,
        req.body.neworder.order_number,
        today,
        req.body.neworder.use_date,
        req.body.neworder.return_date,
        req.body.neworder.price,
        req.body.neworder.os,

    ], (err, data) => {
        console.log("你好", req.body.neworder.mid)
        console.log("看一下7", err)
        return res.status(200).json({ data: data });
    })


    console.log("看一下js", req.body)

    // 更新資料庫order_number末3碼
    DB.query(
        sesql, [
        req.body.neworder.order_number
    ], (err, data) => {
        // console.log("你好", req.body.mid)
        // console.log("看一下5", (data[0].oid).toString().padStart(3, '0'))
        // console.log("看一下6", data)
        if (err) {
            console.log("看一下7", err);
        } else {
            var ddd = req.body.neworder.order_number + (data[0].oid).toString().padStart(3, '0')
            console.log("ddd", ddd)
            DB.query(
                upsql, [
                ddd,
                data[0].oid
            ], (err, datas) => {
                // console.log("你好", req.body.mid)
                if (err) {
                    console.log("看一下8", err)
                } else {
                    console.log("data[0].oid", data[0].oid)
                    for (let i = 0; i < req.body.newoederList.length; i++) {



                        DB.query(
                            olinsql,
                            [data[0].oid,
                            req.body.newoederList[i].pid,
                            req.body.newoederList[i].pname,
                            req.body.newoederList[i].p_img,
                            req.body.newoederList[i].fid,
                            req.body.newoederList[i].fname,
                            req.body.newoederList[i].f_img,
                            req.body.newoederList[i].p_quantity,
                            req.body.newoederList[i].f_quantity,
                            req.body.newoederList[i].p_os,
                            req.body.newoederList[i].f_os,
                            req.body.newoederList[i].p_price,
                            req.body.newoederList[i].f_price
                            ],
                            (err, data) => {
                                if (err) {

                                    console.log("看一下9", err)
                                } else {
                                    console.log("order & list 成功")
                                    return res.status(200).send("新增成功")
                                }

                            })
                    }
                }
            })
        }

    })

    // console.log("看一下js", req.body)
})

module.exports = app;
