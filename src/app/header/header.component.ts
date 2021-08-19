import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  currentDate=new Date().toLocaleDateString();

  @Output() setDate = new EventEmitter<string>();
  constructor(private httpService:HttpService) { }

  changeDate(value:string){
    this.setDate.emit(value);
  }

  ngOnInit(): void {
    
    this.currentDate=this.httpService.transformDate(this.currentDate);

    
  }

}
