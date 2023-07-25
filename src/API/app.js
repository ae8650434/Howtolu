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
var foodC=require("./food_class.js")
var cart=require("./cart.js")
var food_detail=require("./food_detail.js")
var revise = require('./revise.js')
var info = require('./info.js')
var equip_insert = require('./equip_insert.js')
var food_insert = require('./food_insert.js')
var order = require('./order.js')
var add_to_cart = require('./add_to_car.js')
var download_history_order = require ('./download_history_order.js')

var cors = require("cors");
var payment = require('./payment.js');
app.use( express.static("public")  );
app.use( express.json() );
app.use( express.urlencoded( {extended: true}) );
app.use(cors());


app.use("/product/list",selectall);
app.use("/cart",cart);
app.use("/product",select);
app.use("/productclass",productc);
app.use("/foodclass",foodC);
app.use("/register",register);
app.use("/login",login);
app.use("/food/list",food);
app.use("/food",food_detail);
app.use("/reset",reset);
app.use('/revise', revise);
app.use('/info', info);
app.use('/mid',equip_insert);
app.use('/mid',food_insert);
app.use('/order', order)
app.use('/add_to_cart', add_to_cart)

app.use('/download_excel', download_history_order)
app.use('/toorder',payment);



app.listen(8000,function(){
    console.log('啟動')
})