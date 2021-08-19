export class Flight{
    companyName:string;
    slotsCount:number;
    route:string;
    flightDate:string;
    checkStatus:boolean=false;
    constructor(companyName:string,slotsCount:number,route:string,flightDate:string){
        this.companyName=companyName;
        this.slotsCount=slotsCount;
        this.route=route;
        this.flightDate=this.transformDate(flightDate);
    }
    transformDate(string:string){
        let arr=string.split("-");
        let day = parseInt(arr[2]);
        day++;
        arr[2]=day.toString();
        return arr.join("-");
    }
}