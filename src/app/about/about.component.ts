import { Component, OnInit ,Input ,Output, EventEmitter } from '@angular/core';

import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info:any;
  projectCount:number;
  @Input() onEdit:boolean=false;
  editName:boolean=false;
  saveNewName:boolean=false;
  editEmail:boolean=false;
  saveNewEmail:boolean=false;
  showModalName:boolean=false;
  showModalEmail:boolean=false;
  firstName:string='';
  lastName:string='';
  email:string='';
  constructor(private service:AboutService) {
    this.info=this.service.about;
    this.projectCount=this.service.getSize();
   }
  valueChange(count:any){
   this.projectCount=count;
  }
  showEditPanel(type:string){
    if(type==='name'){
      if(this.editName===false){
        this.editName=true;
        this.saveNewName=false;
      }else if(this.editName=true){
        this.editName=false;
        this.saveNewName=false;
      }
    }
    if(type==='email'){
      if(this.editEmail===false){
        this.editEmail=true;
        this.saveNewEmail=false;
      }else if(this.editEmail=true){
        this.editEmail=false;
        this.saveNewEmail=false;
      }
    }
  }
  showNameCheck(){
    this.saveNewName=true;
  }
  showEmailCheck(){
    this.saveNewEmail=true;
  }
    changeName(firstName:string,lastName:string){
      this.service.editName(firstName,lastName);
      this.editName=false;
      this.saveNewName=false;
    }
    changeEmail(email:string){
      this.service.editEmail(email);
      this.editEmail=false;
      this.saveNewEmail=false;
    }
    showModal(responce:any){
      if(responce===false){
        this.showModalName=false;
        this.showModalEmail=false;
      }else if(this.showModalName===true){
        this.changeName(this.firstName,this.lastName)
      }else if(this.showModalEmail===true){
        this.changeEmail(this.email);
      }
     }
     modalName(firstName:string,lastName:string){
      if(this.showModalName===false){
        this.showModalName=true;
        this.firstName=firstName;
        this.lastName=lastName;
      }else{
        this.showModalName=false;
      }
     }
     modalEmail(email:string){
      if(this.showModalEmail===false){
        this.showModalEmail=true;
        this.email=email;
      }else{
        this.showModalEmail=false;
      }
     }
  ngOnInit(): void {
  }

}
