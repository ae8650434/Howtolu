var express=require("express");
var app= express()
var DB = require("./DB.js");
var select=require("./select")
app.use("/product",select)

app.listen(8000,function(){
    console.log('啟動')
})