var DB = require("../API/DB");
var express = require("express");
var app = express.Router();
var bcrypt = require("bcrypt");

app.post("/:mail", (req, res) => {
  var password = req.body.password;
  var mail = req.params.mail
  console.log('2222',mail)
  console.log('33333',password)

  var sql = "SELECT * FROM member WHERE mail = ?";
  var msql = "UPDATE member SET password = ? WHERE mid = ?";
  DB.query(sql, [mail], (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data.length == 0) {
      return res.status(500).send("error");
    } else {
      const saltRounds = 10;
      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error during password hashing");
          return;
        }

        DB.query(msql, [hash, data[0].mid], (err, respone) => {
        if (err) {
          console.log(err);
        } else {
          return res.status(200).send("success");
        }
      });
      });
    }
  });
});

module.exports = app;
