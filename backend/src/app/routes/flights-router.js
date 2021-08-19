const express = require("express");
const { getFlights } = require("../controllers/flights-controller");

const flightsRouter = express.Router();

flightsRouter.get("/",getFlights)

module.exports=flightsRouter;