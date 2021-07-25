import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

import { AboutService } from '../about.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  @Input() projectCount:number;
  @Output() changeValue = new EventEmitter<number>();
  wannaAdd:boolean=false;
  constructor(private service:AboutService) { 
    this.projectCount=this.service.getSize();
  }
  ngOnInit(): void {
  }
  addProject(name:string,description:string){
    this.service.addProject(name,description);
    this.projectCount=this.service.getSize();
    this.changeValue.emit(this.projectCount);
    this.wannaAdd=false;
  }
  showAddForm(){
    if(this.wannaAdd===false){
     return this.wannaAdd=true;
    }
    return this.wannaAdd=false;
  }
}
