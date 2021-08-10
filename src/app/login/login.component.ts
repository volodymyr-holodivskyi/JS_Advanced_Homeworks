import { Component, OnInit,Input } from '@angular/core';

import { DataService } from '../data.service';
import { User } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  index:number=-1;
  loginSuccess:boolean=false;
  showModal:boolean=false;
  
  @Input() showRegisterForm:boolean=false;
  @Input() adminMode:boolean=false;
  @Input() user:User<string>={
    firstName:'',
    lastName:'',
    email:'',
    login:'',
    password:'',
    sex:''
  };
  constructor(private dataService:DataService) {

   }

  logIn(login:string,password:string):void{
    if(this.dataService.login(login,password)>=0){
      this.index=this.dataService.login(login,password);
      this.getUser(this.index);
      this.loginSuccess=true;
      this.showModal=false;
      this.adminMode=this.dataService.adminLogin(login,password);
    }else{
    this.index=this.dataService.login(login,password);
    this.loginSuccess=false;
    this.showModal=true;
    }
  }
  changeValue(value:boolean):void{
    this.showRegisterForm=value;
  }
  processModal(value:boolean):void{
    this.showRegisterForm=value?true:false;
    this.showModal=false;
  }
 
  
  logOut():void{
    this.loginSuccess=false;
  }
  getUser(index:number):void{
    this.user=this.dataService.getUser(index);
  }
  ngOnInit(): void {
    this.dataService.onInit();
    
    
  }

}
