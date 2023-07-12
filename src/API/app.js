var express=require("express");
var app= express()
var DB = require("./DB.js");
var selectall=require("./selectall.js")
var select=require("./select.js")
var food=require("./food.js")
var register=require("./register_insert.js")
var login=require("./login_select.js")
var reset=require("./reset.js")
var cors = require("cors");
var expressSession = require("express-session");
app.use( express.static("public")  );
app.use( express.json() );
app.use( express.urlencoded( {extended: true}) );
app.use(cors());
app.use("/product/list",selectall);
app.use("/product",select);
app.use("/register",register);
app.use("/login/member",login);
app.use("/food/list",food);
app.use("/reset",reset);

var session = expressSession({
    secret: 'member',
    resave: true,
    saveUninitialized: true,

    cookie:{
        path:'/',
        httpOnly:true,
        secure:false,
        maxAge: 10 * 1000
        // maxAge: 7 * 24 * 60 * 60 * 1000, // 一星期的毫秒數
    }
});
app.use(session)


app.listen(8000,function(){
    console.log('啟動')
})