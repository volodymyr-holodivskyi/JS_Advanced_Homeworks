import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-add-panel',
  templateUrl: './add-panel.component.html',
  styleUrls: ['./add-panel.component.css']
})
export class AddPanelComponent implements OnInit {
  showTablePanel:boolean=true;
  showListPanel:boolean=false;
  @Output() createList = new EventEmitter<string>();
  @Output() createTable = new EventEmitter<string>();
  @Output() showPanel = new EventEmitter<boolean>();
  constructor(private service:DataService) { }
  showAddPanel(type:string){
    if(type==='table'){
      this.showTablePanel=true;
      this.showListPanel=false;
    }
    if(type==='list'){
      this.showListPanel=true;
      this.showTablePanel=false;
    }
  }
  addList(count:string,style:string){
    let list=this.service.addList(+count,style);
    this.createList.emit(list);
    this.showPanel.emit(false);
  }
  addTable(rowCount:string,cellCount:string,cellWidth:string,cellHeight:string,borderWidth:string,borderType:string,borderColor:string){
    let table=this.service.addTable(+rowCount,+cellCount,+cellWidth,+cellHeight,+borderWidth,borderType,borderColor);
    this.createTable.emit(table);
    this.showPanel.emit(false);
  }
  ngOnInit(): void {
  }

}
