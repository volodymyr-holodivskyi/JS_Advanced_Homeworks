import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

import { AboutService } from '../about.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  projects:any;
  projectCount:number;
  showModalEdit:boolean=false;
  showModalDelete:boolean=false;
  projectName:string='';
  projectDescription:string='';
  @Input() index:number=0;
  @Input() name:string='';
  @Input() description: string='';
  @Input() type:string='';
  checkmark:boolean=false;
  @Input() onEdit:boolean;
  @Output() changeValue = new EventEmitter<number>();
  constructor(private service:AboutService,private component:AppComponent) {
      this.projects=this.service.about.projects;
      this.projectCount=this.service.getSize();
      this.onEdit=this.component.changeMode;
   }
   showEditPanel(){
    if(this.onEdit===false){
      this.onEdit=true;
      this.checkmark=false;
    }else{
      this.onEdit=false;
      this.checkmark=false;
    }
   }
   showModalEditPanel(projectName:string,projectDescription:string){
    if(this.showModalEdit===false){
      this.showModalEdit=true;
      this.projectName=projectName;
      this.projectDescription=projectDescription;
    }else{
      this.showModalEdit=false;
    }
   }
   showModalDeletePanel(){
    if(this.showModalDelete===false){
      this.showModalDelete=true;

    }else{
      this.showModalDelete=false;
    }
   }

  setValues(index:number,name:string,description:string){
    this.index=index;
    this.name=name;
    this.description=description;
  }
   showCheckmark(){
        this.checkmark=true;
      }
   
   editProject(type:string,index:number,name:string,description:string){
     if(type==='project'){
      this.service.editProject(index,name,description);
      this.checkmark=false;
      this.onEdit=false;
     }
     if(type==='skill'){
      this.service.editSkill(index,name,description);
      this.checkmark=false;
      this.onEdit=false;
     }
   }
   removeProject(type:string,index:number){
     if(type==='project'){
      this.service.removeProject(index);
      this.projectCount=this.service.getSize();
      this.changeValue.emit(this.projectCount);
     }
    if(type==='skill'){
      this.service.removeSkill(index);
    }
   }
   valueChange(responce:any){
    if(responce===false){
      this.showModalDelete=false;
      this.showModalEdit=false;
    }else if(this.showModalEdit===true){
      this.editProject(this.type,this.index,this.projectName,this.projectDescription)
    }else if(this.showModalDelete===true){
      this.removeProject(this.type,this.index);
    }
   }
   ngOnInit(){}
}
