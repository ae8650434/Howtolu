var express=require("express");
var app= express()
var DB = require("./DB.js");
var select=require("./select")
app.use("/product",select)


var login = require('./login_select.js')
app.use('/login', login)

app.listen(8000,function(){
    console.log('啟動')
})