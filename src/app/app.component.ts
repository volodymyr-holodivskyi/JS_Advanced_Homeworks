import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv';
  changeMode:boolean=false;
  valueChange(value:boolean){
    this.changeMode=value;
  }
}
