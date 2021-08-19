const express = require("express");
const { getCountries } = require("../controllers/country-controller");

const countryRouter = express.Router();

countryRouter.get("/",getCountries)

module.exports=countryRouter;