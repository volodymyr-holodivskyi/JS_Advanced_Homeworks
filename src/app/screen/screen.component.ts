import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { DataService } from '../data.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  text:string;
  fontSize:string;
  fontWeight:string;
  fontStyle:string;
  color:string;
  safeText:any;
  backgroundColor:string;
  showEditPanel:boolean=false;
  showStylePanel:boolean=false;
  constructor(private service:DataService,private sanitizer:DomSanitizer) {
    this.text=this.service.text;
    this.safeText=sanitizer.bypassSecurityTrustHtml(this.text);
    this.fontSize=this.service.fontSize;
    this.fontWeight=this.service.fontWeight;
    this.fontStyle=this.service.fontStyle;
    this.color=this.service.color;
    this.backgroundColor=this.service.backgroundColor;
   }
   changeText(text:any){
     this.safeText=text;
   }
   changeFontSize(value:any){
     this.fontSize=value;
   }
   changeFontWeight(value:any){
     this.fontWeight=value;
   }
   changeFontStyle(value:any){
     this.fontStyle=value;
   }
   changeColor(value:any){
     this.color=value;
   }
   changeBackgroundColor(value:any){
     this.backgroundColor=value;
   }
   editPanel(){
    this.showEditPanel=!this.showEditPanel;
    this.showStylePanel=false;
   }
 
   stylePanel(){
     this.showStylePanel=!this.showStylePanel;
     this.showEditPanel=false;
   }
  ngOnInit(): void {
  }

}
