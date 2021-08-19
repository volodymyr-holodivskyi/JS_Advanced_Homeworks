export class Country{
    name:string;
    travelStatus:string;
    hotelsCount:number;
    toursCount:number;
    checkStatus:boolean=false;
    constructor(name:string,travelStatus:number,hotelsCount:number,toursCount:number){
        this.name=name;
        this.travelStatus=this.numToBool(travelStatus);
        this.hotelsCount=hotelsCount;
        this.toursCount=toursCount;
    }
    numToBool(value:number){
        return value===1?'Доступна':'Недоступна';
    }
}