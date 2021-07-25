import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() request:any;
  @Input() responce:boolean=false;
  @Output() modalRespond=new EventEmitter<boolean>();
  constructor() {}
  agree(){
    this.responce=true;
    this.modalRespond.emit(this.responce)
  }
  disagree(){
    this.responce=false;
    this.modalRespond.emit(this.responce)
  }
  ngOnInit(): void {
  }

}
