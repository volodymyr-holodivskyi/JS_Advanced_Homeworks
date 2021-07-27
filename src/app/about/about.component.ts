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
      this.editName=!this.editName;
      this.saveNewName=false;
    }
    if(type==='email'){
      this.editEmail=!this.editEmail;
      this.saveNewEmail=false;
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
        this.changeName(this.firstName,this.lastName);
        this.showModalName=false;
      }else if(this.showModalEmail===true){
        this.changeEmail(this.email);
        this.showModalEmail=false;
      }
     }
     modalName(firstName:string,lastName:string){
      this.showModalName=!this.showModalName;
      this.firstName=firstName;
      this.lastName=lastName;
     }
     modalEmail(email:string){
      this.showModalEmail=!this.showModalEmail;
      this.email=email;
     }
  ngOnInit(): void {
  }

}
