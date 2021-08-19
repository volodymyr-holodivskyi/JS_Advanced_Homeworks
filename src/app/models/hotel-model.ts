export class Hotel{
    name:string;
    slotsCount:number;
    city:string;
    availableDates:string;
    checkStatus:boolean=false;
    constructor(name:string,slotsCount:number,city:string,availableDates:string){
        this.name=name;
        this.slotsCount=slotsCount;
        this.city=city;
        this.availableDates=this.transformDate(availableDates);
    }
    transformDate(string:string){
        let substr1=string.slice(2,string.indexOf(' до'));
        let substr2=string.slice(string.indexOf('до ')+3);
        let arr1=substr1.split('-');
        let arr2=substr2.split('-');
        let day1=parseInt(arr1[2]);
        let day2=parseInt(arr2[2]);
        day1++;
        day2++;
        arr1[2]=day1.toString();
        arr2[2]=day2.toString();
        return `з ${arr1.join('-')} до ${arr2.join('-')}`;
    }
}