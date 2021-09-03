const mysql= require('mysql2');
const { connection } = require('./db-service');


function getCountries(startDate,endDate){
    let sql = startDate!==endDate?`SELECT country.name,country.travelStatus,country.toursCount,count(hotels.startDate>'${startDate}' and hotels.endDate <='${endDate}') as hotelsCount FROM country
    inner join hotels
    on hotels.CountryName=country.name
    where hotels.startDate>'${startDate}' and hotels.endDate<='${endDate}'
    group by hotels.CountryName`
    :`SELECT country.name,country.travelStatus,country.toursCount,count(hotels.startDate>'${startDate}') as hotelsCount FROM country
    inner join hotels
    on hotels.CountryName=country.name
    where hotels.startDate>'${startDate}'
    group by hotels.CountryName`
    console.log(sql);
    return connection.execute(sql)
            .then(([rows,fields])=>rows)
            .catch(err=>err)
}

module.exports={
    getCountries 
}