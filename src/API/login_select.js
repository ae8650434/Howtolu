// 連接資料庫
var DB = require("../API/DB");
var express = require("express");
var app = express.Router();
var bcrypt = require("bcrypt");
var session = require("express-session");



app.post("/", (req, res) => {
  // 用變數抓取前端資料
  var account = req.body.account;
  var password = req.body.password;
  var remember = req.body.remember;

  console.log('Account:', account);
  console.log('Password:', password);

  // 在这里执行其他操作，例如查询数据库、验证账号密码等

  // 返回响应给前端
  // res.send('Received account and password');

  // console.log('Hello')
  //
  var sql = "SELECT * FROM member WHERE tel = ?";
  DB.query(sql, [account], (err, data) => {

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
      
      if (remember == 0) {
        req.session = data[0];
        req.session.userName = data[0].name;
        req.session.userPassword = hashedPassword;
      }
      // 密码正确的情况
      // 执行其他操作或返回成功响应
      // req.session = data[0];
      // req.session.userName = data[0].name;
      // req.session.userPassword = hashedPassword;
      // 登录成功，返回成功响应
      return res.status(200).json({ message: "Login successful" });
      // res.redirect('http://localhost:3000/');
    } else {
      // 密码不正确的情况
      return res.status(401).json({ error: "Invalid Password" });
    }
  });
});

module.exports = app;
