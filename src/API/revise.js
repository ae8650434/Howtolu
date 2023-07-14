var DB = require("../API/DB");
var express = require("express");
var app = express.Router();
var bcrypt = require("bcrypt");

app.get("/", (req, res) => {
  // console.log('2222',req.session)
  // console.log('revise',req.session.reset.mid)
//   var password = req.body.password;

//   var sql = "SELECT * FROM member WHERE mid = ?";
//   var msql = "UPDATE member SET password = ? WHERE mid = ?";
//   DB.query(sql, [], (err, data) => {
//     console.log("2222", req.session);
//     console.log("revise", req.session.reset.mid);
//     if (err) {
//       console.log(err);
//     }
//     if (data.length == 0) {
//       return res.status(500).send("error");
//     } else {
//       const saltRounds = 10;
//       bcrypt.hash(password, saltRounds, (err, hash) => {
//         if (err) {
//           console.error(err);
//           res.status(500).send("Error during password hashing");
//           return;
//         }

//         DB.query(msql, [hash, req.session.reset.mid], (err, respone) => {
//         if (err) {
//           console.log(err);
//         } else {
//           return res.status(200).send("success");
//         }
//       });
//       });
//     }
//   });
});

module.exports = app;
