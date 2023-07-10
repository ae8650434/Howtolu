var express=require("express");
var app= express()
var DB = require("./DB.js");
var selectall=require("./selectall.js")
var select=require("./select.js")
var register=require("./register_insert.js")
app.use("/product",select)
app.use("/product/list",selectall)
app.use("/register",register)

app.listen(8000,function(){
    console.log('啟動')
})