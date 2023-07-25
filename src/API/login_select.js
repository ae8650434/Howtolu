// 連接資料庫
var DB = require("../API/DB");
var express = require("express");
var app = express.Router();
var bcrypt = require("bcrypt");



app.post("/", function(req, res) {
  // 用變數抓取前端資料
  var account = req.body.account;
  var password = req.body.password;


  // 在这里执行其他操作，例如查询数据库、验证账号密码等

  // 返回响应给前端
  
  var sql = "SELECT * FROM member WHERE tel = ?";
  DB.query(sql, [account], (err, data) => {
    console.log('1111' , data)
    // res.json(data)
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }
  
    if (data.length === 0) {
      // 用户不存在的情况
      console.log('用戶不存在')
      console.log(account)
      console.log(password)
      return res.status(404).send("User Not Found");
    }
    console.log('444',password)
    console.log('888',account)
    var hashedPassword = data[0].password;
    console.log('555',hashedPassword)
    var isPasswordMatched = bcrypt.compareSync(password, hashedPassword);
    if (isPasswordMatched) {
      // 登录成功，返回成功响应
      console.log('222')
      return res.status(200).send('success');
    } else {
      // 密码不正确的情况
      console.log('333',isPasswordMatched)
      return res.status(401).send('帳號或密碼錯誤');
    }
  });
});

module.exports = app;
