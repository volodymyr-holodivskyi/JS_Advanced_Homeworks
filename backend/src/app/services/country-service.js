const mysql= require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    password:'olehdno200799',
    user:'root',
    database:'touristagency'
}).promise();

function getCountries(startDate,endDate){
    if(startDate===endDate){
        endDate='9999-12-31';
    }
    return connection.execute(`SELECT country.name,country.travelStatus,country.toursCount,count(hotels.startDate>'${startDate}' and hotels.endDate <='${endDate}') as hotelsCount FROM country
            inner join hotels
            on hotels.CountryName=country.name
            where hotels.startDate>'${startDate}' and hotels.endDate<='${endDate}'
            group by hotels.CountryName`)
            .then(([rows,fields])=>rows)
            .catch(err=>err)
}

module.exports={
    getCountries
}