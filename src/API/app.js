var express=require("express");
var app= express()
var DB = require("./DB.js");
var selectall=require("./selectall.js")
var select=require("./select.js")
var food=require("./food.js")
var register=require("./register_insert.js")
var login=require("./login_select.js")
var reset=require("./reset.js")
var productc=require("./product_class.js")
var cart=require("./cart.js")
var food_detail=require("./food_detail.js")
var revise = require('./revise.js')
var cors = require("cors");
app.use( express.static("public")  );
app.use( express.json() );
app.use( express.urlencoded( {extended: true}) );
app.use(cors());



app.use("/product/list",selectall);
app.use("/cart",cart);
app.use("/product",select);
app.use("/productclass",productc);
app.use("/register",register);
app.use("/login/member",login);
app.use("/food/list",food);
app.use("/food",food_detail);
app.use("/reset",reset);
app.use('revise', revise)


app.listen(8000,function(){
    console.log('啟動')
})