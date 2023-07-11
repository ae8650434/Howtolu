var express=require("express");
var app= express()
var DB = require("./DB.js");
var selectall=require("./selectall.js")
var select=require("./select.js")
var register=require("./register_insert.js")
var login=require("./login_select.js")
var cors = require("cors");
app.use( express.static("public")  );
app.use( express.json() );
app.use( express.urlencoded( {extended: true}) );
app.use(cors());
app.use("/product/list",selectall)
app.use("/product",select)
app.use("/register",register)
app.use("/login/member",login)


var login = require('./login_select.js')
app.use('/login', login)

app.listen(8000,function(){
    console.log('啟動')
})