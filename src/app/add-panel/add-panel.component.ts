import { Component, OnInit,Output,EventEmitter,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';

export class Settings{
  constructor(public rowCount: string,
      public cellCount: string,
      public cellWidth: string,
      public cellHeight: string,
      public borderWidth: string,
      public borderType: string,
      public borderColor:string){}
}
export class List{
  constructor(public listType:string,
      public elemCount:string,
      public markType:string){}
}

@Component({
  selector: 'app-add-panel',
  templateUrl: './add-panel.component.html',
  styleUrls: ['./add-panel.component.css']
})
export class AddPanelComponent implements OnInit {
  @ViewChild('example') example: ElementRef;

  showTablePanel:boolean=true;
  showListPanel:boolean=false;
  showNumericList:boolean=false;
  showMarkedList:boolean=false;
  showExampleScreen:boolean=true;
  table:string|undefined;
  list:string|undefined;
  showExample:boolean=false;
  faDesktop=faDesktop;
  @Output() createList = new EventEmitter<string>();
  @Output() createTable = new EventEmitter<string>();
  @Output() showPanel = new EventEmitter<boolean>();
  settings:Settings=new Settings('','','','','','solid','');
  List:List=new List('','','')
  listType:string='';
  constructor(private service:DataService,private elementRef:ElementRef) { 
    this.example=this.elementRef.nativeElement.querySelector('.example');
   }
  showAddPanel(type:string){
    if(type==='table'){
      
      this.showTablePanel=true;
      this.showListPanel=false;
    }
    if(type==='list'){
      this.showListPanel=true;
      this.showTablePanel=false;
      this.showNumericList=false;
      this.showMarkedList=false;
    }
  }
  exampleShow(type:boolean){
    if(type){
      this.table=this.service.addTable(+this.settings.rowCount,+this.settings.cellCount,+this.settings.cellWidth,+this.settings.cellHeight,+this.settings.borderWidth,this.settings.borderType,this.settings.borderColor);
      this.example.nativeElement.innerHTML=this.table;
      console.log(this.table);
    }
    if(!type){

      this.list=this.service.addList(this.listType,+this.List.elemCount,this.List.markType);
      this.example.nativeElement.innerHTML=this.list;
    }
    
  }
  showListType(type:string){
    if(type==='ol'){
      this.showNumericList=true;
      this.showMarkedList=false;
      this.listType=type;
      this.List.markType='decimal';
    }
    if(type==='ul'){
      this.showNumericList=false;
      this.showMarkedList=true;
      this.listType=type;
      this.List.markType='circle';
    }
  }
  exampleHide(){
    this.showExampleScreen=!this.showExampleScreen;
  }
  addList(listType:string,count:string,style:string){
    this.list=this.service.addList(listType,+count,style);
    this.createList.emit(this.list);
    this.showPanel.emit(false);
  }
  addTable(rowCount:string,cellCount:string,cellWidth:string,cellHeight:string,borderWidth:string,borderType:string,borderColor:string){
    this.table=this.service.addTable(+rowCount,+cellCount,+cellWidth,+cellHeight,+borderWidth,borderType,borderColor);
    this.createTable.emit(this.table);
    this.showPanel.emit(false);
  }
  ngOnInit(): void {
  }

}

