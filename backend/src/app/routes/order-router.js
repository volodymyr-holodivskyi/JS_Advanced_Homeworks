const express = require("express");


const orderRouter = express.Router();

orderRouter.get("/",function(req,res){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    return res.status(200).json("Замовлення отримано, очікуйте відповіді оператора");
})

module.exports=orderRouter;