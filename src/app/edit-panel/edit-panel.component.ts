import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.css']
})
export class EditPanelComponent implements OnInit {
  @Input() text:string;
  @Input() fontFamily:string;
  @Output() changeText=new EventEmitter<string>(); 
  @Input()addPanel:boolean=false;
  elements:string[];
  constructor(private service:DataService) {
    this.text=this.service.text;
    this.elements=this.service.addElementTypes;
    this.fontFamily=this.service.fontFamily;
   }
   showAddPanel(){
     this.addPanel=!this.addPanel;
   }
   showPanel(value:any){
     this.addPanel=value;
   }
   sendText(text:string){
     this.text=text;
     this.changeText.emit(text);
   }
   addList(value:any){
     this.text+=value;
   }
   addTable(value:any){
     this.text+=value;
   }
   addElem(value:string){
     this.text+=`<${value}></${value}>`;
   }
  ngOnInit(): void {
  }

}
