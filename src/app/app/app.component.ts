import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
class Product{
  name:string;
  price:number;
  expirationDate:string;
  constructor(name:string,price:number,expirationDate:string){
    this.name=name;
    this.price=price;
    this.expirationDate=expirationDate;
   
}}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products : Product[];
  warning='warning';
  error='error';
  condition:boolean=false;
  constructor(private service:AppService) {
    this.products=this.service.products;
   }
   trackExpire(index:number,product:Product){
    let toArr=product.expirationDate.split('/');
    let date=new Date(+toArr[2],(+toArr[1])-1,+toArr[0]).getTime()
    let currTime=new Date().getTime();
    if((date-currTime)<0 ){
      return true;
    }
    return false;
   }
   trackWarning(index:number,product:Product){
    let toArr=product.expirationDate.split('/');
    let date=new Date(+toArr[2],(+toArr[1])-1,+toArr[0]).getTime()
    let currTime=new Date().getTime();
    if(((date-currTime)<=172800000)&&(date-currTime)>=0 ){
      return true;
    }
    return false;
   }
  ngOnInit(): void {
    }

}
