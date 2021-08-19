const express = require("express");
const dbService = require('./app/services/db-service');
const countryRouter = require("./app/routes/county-router");
const flightsRouter = require("./app/routes/flights-router");
const hotelsRouter = require("./app/routes/hotels-router");
const orderRouter = require("./app/routes/order-router");

const app =express();
app.use(express.json()); 



app.use("/countries",countryRouter);
app.use("/hotels",hotelsRouter);
app.use("/flights",flightsRouter);
app.use("/order",orderRouter);

app.listen(3000,()=>{
    console.log(`Listen on port 3000`);
})
