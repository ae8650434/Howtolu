// 連接資料庫
var DB = require("../API/DB");
var express = require("express");
var app = express.Router();
var bcrypt = require("bcrypt");



app.post("/", express.urlencoded(), function(req, res) {
  // 用變數抓取前端資料
  var account = req.body.account;
  var password = req.body.password;
  var remember = req.body.isComplete;

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
      return res.status(404).json({ error: "User Not Found" });
    }
  
    var hashedPassword = data[0].password;
    var isPasswordMatched = bcrypt.compareSync(password, hashedPassword);
    if (isPasswordMatched) {
      console.log('555',remember)
      if (remember == 0) {
        req.session.howtolu= data[0];
        console.log('12345',req.session)
      }
      // 登录成功，返回成功响应
      return res.status(200).json({ message: "Login successful" });
    } else {
      // 密码不正确的情况
      return res.status(401).json({ error: "Invalid Password" });
    }
  });
});

module.exports = app;
