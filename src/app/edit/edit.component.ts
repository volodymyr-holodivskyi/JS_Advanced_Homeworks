import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() editMode:boolean;
  @Output() changeValue = new EventEmitter<boolean>();
  constructor() {
    this.editMode=false;
   }
   changeMode(){
     if(this.editMode===false){
       this.editMode=true;
     }else{
       this.editMode=false;
     }
     this.changeValue.emit(this.editMode);
   }
  ngOnInit(): void {
  }

}
