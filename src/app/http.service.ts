import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './models/country-model';
import { Hotel } from './models/hotel-model';
import { map } from 'rxjs/operators';
import { Flight } from './models/flight-model';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  transformDate(stringToTransform:string){
    return stringToTransform.split(".").reverse().join("-");
    }
  getCountries(startDate:string,endDate:string):Observable<Country[]>{
    const params=new HttpParams()
                    .set('startDate',startDate)
                    .set('endDate',endDate)
              return this.http.get('http://127.0.0.1:3000/countries',{params}).pipe(
                map((data:any)=>{
                  let countryList=data;
                  return countryList.map(function(country:any):Country{
                   
                    return new Country(country.name,country.travelStatus,country.hotelsCount,country.toursCount)
                  })
                })
              )
  }
  getHotels(startDate:string,endDate:string,selectedCountries:string):Observable<Hotel[]>{
    const params=new HttpParams()
              .set('startDate',startDate)
              .set('endDate',endDate)
              .set('selectedCountries',selectedCountries);
              return this.http.get('http://127.0.0.1:3000/hotels',{params}).pipe(
                map((data:any)=>{
                  let hotelList=data;
                  return hotelList.map(function(hotel:any):Hotel{
                    return new Hotel(hotel.hotelName,hotel.SlotsCount,hotel.City,`з ${hotel.startDate.slice(0,hotel.startDate.indexOf('T'))} до ${hotel.endDate.slice(0,hotel.endDate.indexOf('T'))}`);
                  })
                })
              )}
  getFlights(startDate:string,endDate:string,selectedCities:string):Observable<Flight[]>{
    const params=new HttpParams()
    .set('startDate',startDate)
    .set('endDate',endDate)
    .set('selectedCities',selectedCities);
    return this.http.get('http://127.0.0.1:3000/flights',{params}).pipe(
      map((data:any)=>{
        let flightsList=data;
        return flightsList.map(function(flight:any):Flight{
          return new Flight(flight.companyName,flight.SlotsCount,flight.route,flight.FlightDate.slice(0,flight.FlightDate.indexOf("T")));
        })
      })
    )}
  makeOrder():Observable<string>{
    return this.http.get('http://127.0.0.1:3000/order').pipe(
       map((data:any)=>data)
    )
  }
}
