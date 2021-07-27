import { Component, OnInit, Output, Input ,EventEmitter } from '@angular/core';

import { AboutService } from '../about.service';
import { AppComponent } from '../app.component';
import { EditProjectComponent } from '../edit-project/edit-project.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  projects:any;
  @Input() projectCount:number;
  @Input() onEdit:boolean;
  editor=new EditProjectComponent(new AboutService,new AppComponent);
  @Output() changeValue = new EventEmitter<number>();
  constructor(private service:AboutService,private component:AppComponent) {
      this.projects=this.service.about.projects;
      this.projectCount=this.service.getSize();
      this.onEdit=this.component.changeMode;
   }
   showEditPanel(index:number){
    this.projects[index].onEdit=!this.projects[index].onEdit;
    this.projects[index].showCheckmark=false;
   }
   sendValues(index:number,name:string,description:string){
    this.editor.setValues(index,name,description);
  }
  valueChange(count:any){
    this.projectCount=count;
    this.changeValue.emit(this.projectCount)
   }
  ngOnInit(): void {
  }

}
