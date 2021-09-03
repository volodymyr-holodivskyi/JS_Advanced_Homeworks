import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Country } from '../models/country-model';
import { Flight } from '../models/flight-model';
import { Hotel } from '../models/hotel-model';

interface BookData<type1,type2,type3>{
  [key:string]:type1|type2|type3,
  country:type1,
  hotel:type2,
  flight:type3
}


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  countryTable:boolean=false;
  hotelsTable:boolean=false;
  flightsTable:boolean=false;
  date=new Date().toLocaleDateString();
  elemsOnPage:number=10;
  
  storage:BookData<Country[],Hotel[],Flight[]>={
    country:[],
    hotel:[],
    flight:[]
  }
  selected:BookData<Country[],Hotel[],Flight[]>={
    country:[],
    hotel:[],
    flight:[]
  }
  toRender:BookData<Country[],Hotel[],Flight[]>={
    country:[],
    hotel:[],
    flight:[]
  }
  page:BookData<number,number,number>={
    country:0,
    hotel:0,
    flight:0
  }
  modal:boolean=false;
  modalMessage:string='';
  orderResponse:string='';
  constructor(private httpService:HttpService) { }

  showCountryTable(value:Country[]){
    this.storage.country=value;
    this.countryTable=true;
    this.hotelsTable=false;
    this.flightsTable=false;
    this.render('country');
    this.modal=false;
    
  }
  showHotelsTable(value:Hotel[]){
    this.storage.hotel=value;
    this.countryTable=false;
    this.flightsTable=false;
    this.hotelsTable=true;
    this.render('hotel');
    this.modal=false;
  }
  showFlightsTable(value:Flight[]){
    this.storage.flight=value;
    this.countryTable=false;
    this.hotelsTable=false;
    this.flightsTable=true;
    this.render('flight');
    this.modal=false;
  }
  setDate(value:string){
    this.date=value;
  }
 
  setChecked(type:string,index:number){
    this.storage[type][index].checkStatus=!this.storage[type][index].checkStatus;
  }
 
  select(type:string){
    let arr:Array<any>=[]
    for (const item of this.storage[type]) {
            if(item.checkStatus){
              arr.push(item)
            }
  }
  this.selected[type]=arr;
}


  render(type:string){
    this.toRender[type]=[];
    for(let i=0;i<this.elemsOnPage&&this.elemsOnPage*this.page[type]+i<this.storage[type].length;i++){
      this.toRender[type][i]=this.storage[type][this.elemsOnPage*this.page[type]+i];
    }
  }

  nextPage(type:string){
      if(this.page[type]<Math.fround(this.storage[type].length/this.elemsOnPage)&&this.storage[type].length>this.elemsOnPage){
        this.page[type]++;
        this.render(type);
      }
    }

  prevPage(type:string){
    if(this.page[type]>=1){
      this.page[type]--;
      this.render(type);
    }
  }

  book(){
    this.select('flight');
    this.modal=true;
    this.modalMessage='Замовити обраний тур?';
  }

  hideModal(){
    this.modal=false;
    this.orderResponse='';
  }
  makeOrder(){
    this.httpService.makeOrder().subscribe((data:string)=>{
      this.orderResponse=data;
      this.modalMessage=this.orderResponse;
    })
  }
  ngOnInit(): void {
    this.date=this.httpService.transformDate(this.date);
  }

}
