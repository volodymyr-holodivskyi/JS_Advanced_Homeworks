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
  user:User={
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
    passwordRepeat:true,
    email:true,
    sex:true
  }
  @Output() changeValue = new EventEmitter<boolean>();
  constructor(private service:DataService) { }

  validateForm():boolean{
    this.formValid.firstName=this.service.validateField(this.user.firstName,this.service.RegisterPatterns.firstName);
    this.formValid.lastName=this.service.validateField(this.user.lastName,this.service.RegisterPatterns.lastName);
    this.formValid.login=this.service.validateField(this.user.login,this.service.RegisterPatterns.login);
    this.formValid.password=this.service.validateField(this.user.password,this.service.RegisterPatterns.password);
    this.formValid.email=this.service.validateField(this.user.email,this.service.RegisterPatterns.email);
    this.formValid.sex=this.service.validateField(this.user.sex,this.service.RegisterPatterns.sex);
    this.formValid.passwordRepeat=this.checkPassRepeat();
    console.log();
    let res = Object.values(this.formValid);
    return res.every((e)=>e===true)?true:false;
    
  }

  addUser():void{
    if(this.validateForm()){
      this.service.addUser(this.user);
      this.changeValue.emit(false);
    }
  }
  checkPassRepeat():boolean{
    if(this.PasswordRepeat==='') return false;
    if(this.PasswordRepeat===this.user.password){
      return true;
    }else{
      return false;
    }
  }
  invalidFieldCount():number{
    let res = Object.values(this.formValid);
    return res.filter((e)=>e===false).length;
  }
  ngOnInit(): void {
  }

}
