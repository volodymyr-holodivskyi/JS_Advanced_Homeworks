import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import { User } from '../data.service';
import { RegisterFormValid } from '../data.service';
import { DataService } from '../data.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User<string>={
    firstName:'',
    lastName:'',
    login:'',
    password:'',
    email:'',
    sex:''
  }
  PasswordRepeat:string='';

  formValid:RegisterFormValid={
    firstName:true,
    lastName:true,
    login:true,
    password:true,
    email:true,
    sex:true,
    passwordRepeat:true
  }
  @Output() changeValue = new EventEmitter<boolean>();
  constructor(private dataService:DataService) { }

  validateForm():boolean{
    
    for (const key in this.formValid) {
      if (Object.prototype.hasOwnProperty.call(this.formValid, key)) {
        if(key==='passwordRepeat') continue;
        this.formValid[key]=this.dataService.validateField(this.user[key],this.dataService.RegisterPatterns[key])
        
      }
    }
    this.formValid.passwordRepeat=this.checkPassRepeat();
    let res = Object.values(this.formValid);
    return res.every(e=>e);
    
  }

  addUser():void{
    if(this.validateForm()){
      this.dataService.addUser(this.user);
      this.changeValue.emit(false);
    }
  }
  checkPassRepeat():boolean{
   return this.PasswordRepeat===this.user.password;
  }
  invalidFieldCount():number{
    let res = Object.values(this.formValid);
    return res.filter(e=>!e).length;
  }
  ngOnInit(): void {
  }

}
