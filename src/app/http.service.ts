import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {}

  sendOrder(data:any){
    console.log(data);
    return this.http.post('http://localhost:3000',data)
  }

}
