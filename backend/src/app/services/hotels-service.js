const mysql= require('mysql2');
const { connection } = require('./db-service');


function getHotels(startDate,endDate,selectedCountries){
    
    let sql=startDate!==endDate?`SELECT hotels.hotelName,hotels.SlotsCount,hotels.City,hotels.startDate,hotels.endDate FROM hotels
    inner join country
    on hotels.CountryName=country.name
    where hotels.startDate>'${startDate}' and hotels.endDate<='${endDate}' and ${selectedCountries}`
    :`SELECT hotels.hotelName,hotels.SlotsCount,hotels.City,hotels.startDate,hotels.endDate FROM hotels
    inner join country
    on hotels.CountryName=country.name
    where hotels.startDate>'${startDate}' and ${selectedCountries}`
    return connection.execute(sql)
            .then(([rows,fields])=>rows)
            .catch(err=>err)
}

module.exports={
    getHotels
}