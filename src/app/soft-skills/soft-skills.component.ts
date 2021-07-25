import { Component, OnInit,Input } from '@angular/core';

import { AboutService } from '../about.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit {
  @Input() onEdit:boolean;
  skills:any;
  constructor(private service:AboutService,private component:AppComponent) {
    this.skills=this.service.about.softSkills;
    this.onEdit=this.component.changeMode;
   }

   showDesc(index:number){
     if(this.skills[index].showDescription===true){
       return this.skills[index].showDescription=false;
     }
     return this.skills[index].showDescription=true;
   }
   
   showEditPanel(index:number){
    if(this.skills[index].onEdit===false){
      this.skills[index].onEdit=true;
      this.skills[index].showCheckmark=false;
    }else{
      this.skills[index].onEdit=false;
      this.skills[index].showCheckmark=false;
    }
   }  
  ngOnInit(): void {
  }

}
