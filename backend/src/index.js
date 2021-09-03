const express = require("express");
const cors = require("cors");
const countryRouter = require("./app/routes/county-router");
const flightsRouter = require("./app/routes/flights-router");
const hotelsRouter = require("./app/routes/hotels-router");
const orderRouter = require("./app/routes/order-router");
const { dbInit } = require("./app/services/db-service");

const corsOption = { origin:'*', credentials:true }
const app =express();
app.use(express.json()); 
app.use(cors(corsOption));
 

dbInit()

app.use("/countries",countryRouter);
app.use("/hotels",hotelsRouter);
app.use("/flights",flightsRouter);
app.use("/order",orderRouter);

app.listen(3000,()=>{
    console.log(`Listen on port 3000`);
})
