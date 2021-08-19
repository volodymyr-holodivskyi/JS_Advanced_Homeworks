const mysql= require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    password:'olehdno200799',
    user:'root',
    database:'touristagency'
}).promise();

function getHotels(startDate,endDate,selectedCountries){
    if(startDate===endDate){
        endDate='9999-12-31';
    }
    return connection.execute(`SELECT hotels.hotelName,hotels.SlotsCount,hotels.City,hotels.startDate,hotels.endDate FROM hotels
            inner join country
            on hotels.CountryName=country.name
            where hotels.startDate>'${startDate}' and hotels.endDate<='${endDate}' and ${selectedCountries}`)
            .then(([rows,fields])=>rows)
            .catch(err=>err)
}

module.exports={
    getHotels
}