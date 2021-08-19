import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Country } from '../models/country-model';
import { Flight } from '../models/flight-model';
import { Hotel } from '../models/hotel-model';

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
  countries:Country[]=[];
  hotels:Hotel[]=[];
  flights:Flight[]=[];
  selectedCountries:Country[]=[];
  selectedHotels:Hotel[]=[];
  selectedFlights:Flight[]=[];
  countryPageNumber:number=0;
  hotelPageNumber:number=0;
  flightPageNumber:number=0;
  elemsOnPage:number=10;
  countriesToRender:Country[]=[];
  hotelsToRender:Hotel[]=[];
  flightsToRender:Flight[]=[];
  modal:boolean=false;
  modalMessage:string='';
  orderResponse:string='';
  constructor(private httpService:HttpService) { }

  showCountryTable(value:Country[]){
    this.countries=value;
    this.countryTable=true;
    this.hotelsTable=false;
    this.flightsTable=false;
    this.render('country');
    this.modal=false;
    
  }
  showHotelsTable(value:Hotel[]){
    this.hotels=value;
    this.countryTable=false;
    this.flightsTable=false;
    this.hotelsTable=true;
    this.render('hotel');
    this.modal=false;
  }
  showFlightsTable(value:Flight[]){
    this.flights=value;
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
    switch(type){
      case "country":this.countries[index].checkStatus=!this.countries[index].checkStatus;break;
      case 'hotel':this.hotels[index].checkStatus=!this.hotels[index].checkStatus;break;
      case 'flight':this.flights[index].checkStatus=!this.flights[index].checkStatus;break;
    }
  }
  select(type:string){
    switch(type){
      case 'country':this.selectedCountries=[];
      for (const country of this.countries) {
        if(country.checkStatus){
          this.selectedCountries.push(country);
        }
      };break;
      case 'hotel':this.selectedHotels=[];
      for (const hotel of this.hotels) {
        if(hotel.checkStatus){
          this.selectedHotels.push(hotel);
        }
      };break;
      case 'flight':this.selectedFlights=[];
      for (const flight of this.flights) {
        if(flight.checkStatus){
          this.selectedFlights.push(flight);
        }
        this.modal=true;
        this.modalMessage='Замовити обраний тур?';
      };break;
    }
  }
  render(type:string){
    switch(type){
      case 'country':this.countriesToRender=[];
           for(let i=0;i<this.elemsOnPage&&this.elemsOnPage*this.countryPageNumber+i<this.countries.length;i++){
            this.countriesToRender.push(this.countries[this.elemsOnPage*this.countryPageNumber+i])
           }
      break;
      case 'hotel':this.hotelsToRender=[];
           for(let i=0;i<this.elemsOnPage&&this.elemsOnPage*this.hotelPageNumber+i<this.hotels.length;i++){
            this.hotelsToRender.push(this.hotels[this.elemsOnPage*this.hotelPageNumber+i])
           }
      break;
      case 'flight':this.flightsToRender=[];
           for(let i=0;i<this.elemsOnPage&&this.elemsOnPage*this.flightPageNumber+i<this.flights.length;i++){
            this.flightsToRender.push(this.flights[this.elemsOnPage*this.flightPageNumber+i])
           }
           this.modal=true;
           this.modalMessage='Замовити обраний тур?';
      break;
    }
  
    
  }
  nextPage(type:string){
    switch(type){
      case 'country': if(this.countryPageNumber<Math.round(this.countries.length/this.elemsOnPage)){
        this.countryPageNumber++;
        this.render(type);
      }break;
      case 'hotel': if(this.hotelPageNumber<Math.round(this.hotels.length/this.elemsOnPage)){
        this.hotelPageNumber++;
        this.render(type);
      }break;
      case 'flight': if(this.flightPageNumber<Math.round(this.flights.length/this.elemsOnPage)){
        this.flightPageNumber++;
        this.render(type);
        this.modal=false;
      }break;
    }
    
    
  }
  prevPage(type:string){
    switch(type){
      case 'country':if(this.countryPageNumber>=1){
        this.countryPageNumber--;
        this.render(type);
      }break;
      case 'hotel':if(this.hotelPageNumber>=1){
        this.hotelPageNumber--;
        this.render(type);
      }break;
      case 'flight':if(this.flightPageNumber>=1){
        this.flightPageNumber--;
        this.render(type);
        this.modal=false;
      }break;
    }
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
