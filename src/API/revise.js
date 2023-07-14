var DB = require("../API/DB");
var express = require("express");
var app = express.Router();


app.get('/', (req,res) => {
    console.log('2222',req.session)
    console.log('revise',req.session.reset.mid)
    // var sql = "SELECT * FROM member WHERE mid = ?"
    // DB.query(sql, [req.session.howtolu.mid], (err, data) => {
        // console.log('2222',req.session)
        // console.log('revise',req.session.howtolu.mid)
    // })
})



module.exports = app;
