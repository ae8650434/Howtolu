var express = require('express');
var app = express();
var DB = require('../API/DB');

DB.query('select * from car',function(err,cart){
    if(err) throw err;
    console.log(cart)
})



module.exports = app;