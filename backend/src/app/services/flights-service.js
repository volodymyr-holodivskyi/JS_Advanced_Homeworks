const mysql= require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    password:'olehdno200799',
    user:'root',
    database:'touristagency'
}).promise();

function getFlights(startDate,endDate,city){
    if(startDate===endDate){
        endDate='9999-12-31';
    }
    return connection.execute(`SELECT * FROM flights
    where FlightDate between '${startDate}' and '${endDate}' and route regexp '${city}' and SlotsCount>0`)
            .then(([rows,fields])=>rows)
            .catch(err=>err)
}

module.exports={
    getFlights
}