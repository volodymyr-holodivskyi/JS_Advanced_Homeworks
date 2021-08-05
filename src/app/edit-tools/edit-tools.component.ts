import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-tools',
  templateUrl: './edit-tools.component.html',
  styleUrls: ['./edit-tools.component.css']
})
export class EditToolsComponent implements OnInit {
  @Input() showEditPanel:boolean=false;
  @Input() showStylePanel:boolean=false;
  @Input() fontSize:string;
  @Input() fontWeight:string;
  @Input() text:string;
  @Input() fontStyle:string;
  @Input() color:string;
  @Input() backgroundColor:string;
  @Input() fontFamily:string;
  @Input() textDecoration:string;
  @Output() changeFontSize = new EventEmitter<string>();
  @Output() changeText = new EventEmitter<string>();
  @Output() changeFontWeight = new EventEmitter<string>();
  @Output() changeFontStyle = new EventEmitter<string>();
  @Output() changeColor = new EventEmitter<string>();
  @Output() changeBackgroundColor = new EventEmitter<string>();
  @Output() changeFontFamily = new EventEmitter<string>();
  @Output() changeTextDecoration = new EventEmitter<string>();
  constructor(private service:DataService) { 
    this.text=this.service.text;
    this.fontSize=this.service.fontSize;
    this.fontWeight=this.service.fontWeight;
    this.fontStyle=this.service.fontStyle;
    this.color=this.service.color;
    this.backgroundColor=this.service.backgroundColor;
    this.fontFamily=this.service.fontFamily;
    this.textDecoration=this.service.textDecoration;
  }

  weightChange(value:any){
    this.fontWeight=value;
    this.changeFontWeight.emit(value);
  }
  fontChange(value:any){
    this.fontSize=value;
    this.changeFontSize.emit(value);
  }
  styleChange(value:any){
    this.fontStyle=value;
    this.changeFontStyle.emit(value);
  }
  textChange(text:any){
    this.text=text;
    this.changeText.emit(text);
  }
  colorChange(value:any){
    this.color=value;
    this.changeColor.emit(value);
  }
  familyChange(value:any){
    this.fontFamily=value;
    this.changeFontFamily.emit(value);
  }
  backgroundColorChange(value:any){
    this.backgroundColor=value;
    this.changeBackgroundColor.emit(value);
  }
  decorationChange(value:any){
    this.textDecoration=value;
    this.changeTextDecoration.emit(value);
  }
  ngOnInit(): void {
  }

}
