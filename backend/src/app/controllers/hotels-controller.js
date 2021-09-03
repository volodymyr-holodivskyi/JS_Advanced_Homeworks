const url=require("url");
const hotelsService=require("../services/hotels-service")

function getHotels(req,res){
    let urlRequest=url.parse(req.url, true);
    let startDate = urlRequest.query.startDate;
    let endDate=urlRequest.query.endDate;
    let selectedCountries=urlRequest.query.selectedCountries.split(',');
    let countriesToSql='';
    for(let i=0;i<selectedCountries.length;i++){
        if(i===selectedCountries.length-1){
            countriesToSql+=`hotels.CountryName='${selectedCountries[i]}'`;
        }else{
            countriesToSql+=`hotels.CountryName='${selectedCountries[i]}' or `;
        }
    }
    return hotelsService.getHotels(startDate,endDate,countriesToSql)
                        .then(rows=>{ console.log(rows);
                         return res.status(200).json(rows)})
                        .catch(err=>res.status(500).json(err));
}

module.exports={
    getHotels
}