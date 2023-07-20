var DB = require("../API/DB");
var express = require("express");
var app = express.Router();
var bcrypt = require("bcrypt");
var multer = require("multer");
var path = require("path");
var fs = require('fs');

app.get("/", (req, res) => {
  var account = req.query.account;
  console.log(account);
  var sql = "SELECT * FROM member WHERE tel = ?";
  DB.query(sql, [account], (err, data) => {
    if (err) {
      return res.status(500).send("Error");
    }

    if (data.length === 0) {
      return res.status(401).send("未登入");
    } else {
      return res.status(200).json({ userdata: data[0] });
    }
  });
});

var insertm =
  "UPDATE member SET password = ? , mail = ?, name = ?, gender = ?, address = ?, m_img = ?, WHERE mid = ?";
// 定义 multer 存储配置
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/image'));
    },
    filename: function (req, file, cb) {
      const user = req.body.user;
      const first = user.m_img.split('/')[1];
      const second = first.split(';')[0]; // 副檔名
      const newFileName = `0${user.mid}.${second}`; 
      cb(null, newFileName);
    }
  });
  
  // 创建 multer 实例
  const upload = multer({ storage });

app.post("/member", upload.single("m_img"), (req, res) => {
    
  const user = req.body.user;
  console.log("222", req.body);
  console.log("333", user);
  var first = user.m_img.split("/")[1];
  console.log("444", first);
  var second = first.split(";")[0]; // 副檔名
  
  console.log("555", second);
  var newFileName = `0${user.mid}.${second}`;
  console.log('666',req.file)
  const targetPath = path.join(__dirname, "../public/image", newFileName);

  // 将文件移动到指定目录
  fs.renameSync(req.file.path, targetPath);

  // 密碼加密
  const saltRounds = 10;
  bcrypt.hash(user.new_password, saltRounds, (err, hash) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error during password hashing");
      return;
    }
    console.log(hash);

    DB.query(
      insertm,
      [
        hash,
        user.mail,
        user.name,
        user.gender,
        user.address,
        newFileName,
        user.mid,
      ],
      (err, result) => {
        if (err) {
          return res.status(500).send("Error");
        } else {
          console.log(result);
          return res.status(200).send("新增成功");
        }
      }
    );
  });
});

module.exports = app;
