const express = require("express");
const { getHotels } = require("../controllers/hotels-controller");

const hotelsRouter = express.Router();

hotelsRouter.get("/",getHotels)

module.exports=hotelsRouter;