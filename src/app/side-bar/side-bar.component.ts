import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country-model';
import { HttpService } from '../http.service';
import { Hotel } from '../models/hotel-model';
import { Flight } from '../models/flight-model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input() date:string=new Date().toLocaleDateString();
  currentDate:string=new Date().toLocaleDateString();
  @Output() countryTable = new EventEmitter<Country[]>();
  @Output() hotelsTable = new EventEmitter<Hotel[]>();
  @Output() flightsTable = new EventEmitter<Flight[]>();
  @Input() selectedCountries:Country[]=[];
  @Input() selectedHotels:Hotel[]=[];
  modalMessage:string='';
  modal:boolean=false;
  countries:Country[]=[];
  hotels:Hotel[]=[];
  flights:Flight[]=[];
  constructor(private httpService:HttpService) { }

  showCountryTable(){
    this.httpService.getCountries(this.currentDate,this.date).subscribe((data:Country[])=>{
      this.countries=data
      this.countryTable.emit(this.countries);
    });
    
    
  }
  showHotelsTable(){
    if(this.selectedCountries.length>0){
      let selectedCountriesToHttpParam=[];
      for (const country of this.selectedCountries) {
        selectedCountriesToHttpParam.push(country.name);
      }
       this.httpService.getHotels(this.currentDate,this.date,selectedCountriesToHttpParam.join(',')).subscribe((data:Hotel[])=>{ 
        this.hotels=data
        this.hotelsTable.emit(this.hotels)});
      
      
    }else{
      this.modal=true;
      this.modalMessage='Спочатку оберіть країну в яку хочете відправитись у подорож !';
    }
  }
  showFlightsTable(){
    if(this.selectedHotels.length>0){
    let selectedHotelsToHttpParam=[];
      for (const hotel of this.selectedHotels) {
        selectedHotelsToHttpParam.push(hotel.city);
      }
    this.httpService.getFlights(this.currentDate,this.date,selectedHotelsToHttpParam.join(',')).subscribe((data:Flight[])=>{
      this.flights=data
      this.flightsTable.emit(this.flights)});
    
    }else{
      this.modal=true;
      this.modalMessage='Будь ласка, спочатку оберіть країну та готель';
    }
  }

  hideModal(){
    this.modal=false;
  }
  ngOnInit(): void {
    this.currentDate=this.httpService.transformDate(this.currentDate);
    Hotel.prototype.transformDate('з 2021-08-19 до 2021-08-23')
  }

}
