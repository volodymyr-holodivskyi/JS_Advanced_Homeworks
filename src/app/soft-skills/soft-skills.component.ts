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
     this.skills[index].showDescription=!this.skills[index].showDescription;
   }
   
   showEditPanel(index:number){
    this.skills[index].onEdit=!this.skills[index].onEdit;
    this.skills[index].showCheckmark=false;
    
   }  
  ngOnInit(): void {
  }

}
