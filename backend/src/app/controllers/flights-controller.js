const url=require("url");
const flightsService=require("../services/flights-service")


function getFlights(req,res){
    let urlRequest=url.parse(req.url, true);
    let startDate = urlRequest.query.startDate;
    let endDate=urlRequest.query.endDate;
    let selectedCities=urlRequest.query.selectedCities.split(',');
    let citiesToSql='';
    for(let i=0;i<selectedCities.length;i++){
        if(i===selectedCities.length-1){
            citiesToSql+=`${selectedCities[i]}`;
        }else{
            citiesToSql+=`${selectedCities[i]}|`;
        }
    }
    return flightsService.getFlights(startDate,endDate,citiesToSql)
            .then(rows=>{ console.log(rows);
                return res.status(200).json(rows)})
            .catch(err=>res.status(500).json(err));
}   

module.exports={
    getFlights
}