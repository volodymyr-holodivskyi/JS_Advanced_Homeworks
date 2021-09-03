const mysql= require('mysql2');
const { connection } = require('./db-service');


function getFlights(startDate,endDate,city){
    let sql = startDate!==endDate?`SELECT * FROM flights
    where FlightDate between '${startDate}' and '${endDate}' and route regexp '${city}' and SlotsCount>0`
    :`SELECT * FROM flights
    where FlightDate > '${startDate}' and route regexp '${city}' and SlotsCount>0`
    return connection.execute(sql)
            .then(([rows,fields])=>rows)
            .catch(err=>err)
}

module.exports={
    getFlights
}