import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-style-panel',
  templateUrl: './style-panel.component.html',
  styleUrls: ['./style-panel.component.css']
})
export class StylePanelComponent implements OnInit {

  @Output() changeFontSize = new EventEmitter<string>();
  @Output() changeFontWeight = new EventEmitter<string>();
  @Output() changeFontStyle = new EventEmitter<string>();
  @Output() changeColor = new EventEmitter<string>();
  @Output() changeBackgroundColor = new EventEmitter<string>();
  showColorPanel:boolean=false;
  showBGColorPanel:boolean=false;
  constructor(private service: DataService) { }
  sendFontSize(value:any){
    this.service.changeFontSize(value);
    this.changeFontSize.emit(value);
  }
  sendFontWeight(value:any){
    this.changeFontWeight.emit(this.service.changeFontWeight(value));
  }
  sendFontStyle(value:any){
    this.changeFontStyle.emit(this.service.changeFontStyle(value));
  }
  sendColor(value:any){
    this.service.changeColor(value);
    this.changeColor.emit(value);
  }
  sendBackgroundColor(value:any){
    this.service.changeBackgroundColor(value);
    this.changeBackgroundColor.emit(value);
  }
  colorPanel(){
    this.showColorPanel=!this.showColorPanel;
    this.showBGColorPanel=false;
  }
  backgroundColorPanel(){
    this.showBGColorPanel=!this.showBGColorPanel;
    this.showColorPanel=false;
  }
  ngOnInit(): void {
  }

}
