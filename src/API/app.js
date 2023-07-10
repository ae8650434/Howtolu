var express=require("express");
var app= express()
var DB = require("./DB.js");
var selectall=require("./selectall.js")
var select=require("./select.js")

app.use("/product/list",selectall)
app.use("/product",select)


app.listen(8000,function(){
    console.log('啟動')
})