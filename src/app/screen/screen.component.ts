import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit,ViewChild,ElementRef,AfterViewInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  @ViewChild('textContent') textContent: ElementRef;

  text:string;
  fontSize:string;
  fontWeight:string;
  fontStyle:string;
  fontFamily:string;
  color:string;
  passError:boolean=false;
  backgroundColor:string;
  textDecoration:string;
  passwordField:string='';
  showEditPanel:boolean=false;
  showStylePanel:boolean=false;
  showBlock:boolean=false;
  password:string;
  constructor(private service:DataService,private elementRef:ElementRef) {
    this.textContent=this.elementRef.nativeElement.querySelector('.textContent');
    this.text=this.service.text;
    this.fontSize=this.service.fontSize;
    this.fontWeight=this.service.fontWeight;
    this.fontStyle=this.service.fontStyle;
    this.fontFamily=this.service.fontFamily;
    this.color=this.service.color;
    this.backgroundColor=this.service.backgroundColor;
    this.textDecoration=this.service.textDecoration;
    this.password=this.service.password;
   }
   changeText(text:any){
    this.textContent.nativeElement.innerHTML=text;
   }
   changeFontSize(value:any){
     this.fontSize=value;
   }
   changeFontWeight(value:any){
     this.fontWeight=value;
   }
   block(){
     this.showBlock=!this.showBlock;
   }
   unlock(value:any){
     if(value===this.password){
       this.showBlock=false;
       this.passwordField='';
       this.passError=false;
     }else{
       this.passError=true;
     }
   }
   showError(){
     this.passError=!this.passError;
   }
   changeFontStyle(value:any){
     this.fontStyle=value;
   }
   changeFontFamily(value:any){
     this.fontFamily=value;
   }
   changeColor(value:any){
     this.color=value;
   }
   changeBackgroundColor(value:any){
     this.backgroundColor=value;
   }
   changeTextDecoration(value:any){
     this.textDecoration=value;
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
  ngAfterViewInit(){
    this.textContent.nativeElement.innerHTML=this.text;
  }
}