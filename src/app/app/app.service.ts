import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  products=[
    {
      name:"n1",
      price:10,
      expirationDate:new Date(2021,0,23).toLocaleDateString('en-GB'),
   },
    {
      name:"n2",
      price:20,
      expirationDate:new Date(2021,8,3).toLocaleDateString('en-GB'),
   },{
      name:"n3",
      price:30,
      expirationDate:new Date(2021,9,13).toLocaleDateString('en-GB'),
     },
     {
      name:"n4",
      price:40,
      expirationDate:new Date(2021,6,21).toLocaleDateString('en-GB'),
     },
     {
      name:"n5",
      price:50,
      expirationDate:new Date(2021,4,19).toLocaleDateString('en-GB'),
     },
     {
      name:"n6",
      price:60,
      expirationDate:new Date(2021,6,19).toLocaleDateString('en-GB'),
     },
  ]
}
