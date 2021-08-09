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
  @Input() user:User={
    firstName:'',
    lastName:'',
    email:'',
    login:'',
    password:'',
    sex:''
  };
  constructor(private service:DataService) {

   }

  logIn(login:string,password:string):void{
    if(this.service.login(login,password)>=0){
      this.index=this.service.login(login,password);
      this.getUser(this.index);
      this.loginSuccess=true;
      this.showModal=false;
      if(this.service.adminLogin(login,password)){
        this.adminMode=true;
      }else{
        this.adminMode=false;
      }
    }else{
    this.index=this.service.login(login,password);
    this.loginSuccess=false;
    this.showModal=true;
    }
  }
  changeValue(value:boolean):void{
    this.showRegisterForm=value;
  }
  processModal(value:boolean):void{
    if(value){
      this.showRegisterForm=true;
      this.showModal=false;
    }else{
      this.showRegisterForm=false;
      this.showModal=false;
    }
  }
 
  
  logOut():void{
    this.loginSuccess=false;
  }
  getUser(index:number):void{
    this.user=this.service.getUser(index);
  }
  ngOnInit(): void {
    this.service.onInit();
    
    
  }

}
