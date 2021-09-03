const url=require("url");
const countryService=require("../services/country-service")

function getCountries(req,res){
    let urlRequest=url.parse(req.url, true);
    let startDate = urlRequest.query.startDate;
    let endDate=urlRequest.query.endDate;
    return countryService.getCountries(startDate,endDate)
            .then(rows=>{ console.log(rows);
                return res.status(200).json(rows)})
            .catch(err=>res.status(500).json(err));
}

module.exports={
    getCountries
}