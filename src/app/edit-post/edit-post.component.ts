import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

import { Post } from '../data.service';
import { User } from '../data.service';
import { DataService } from '../data.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  @Input() index:number=-1;
  Epost:Post={
    theme:'',
    text:'',
    date:'',
    author:''
  }
  @Output() editedPost = new EventEmitter<Post[]>();
  constructor(private dataService:DataService) {
   
   }
  editPost(theme:string,text:string):void{
    this.Epost.date=new Date().toLocaleString('en-GB');
    this.Epost.theme=theme;
    this.Epost.text=text;
    this.dataService.editPost(this.index,this.Epost);
    this.Epost={
      theme:'',
      text:'',
      date:'',
      author:''
    }
    this.editedPost.emit(this.dataService.posts);
  }
  checkValidity(input:string):boolean{
    return input.length>0?true:false;
  }
  ngOnInit(): void {
      this.Epost=this.dataService.posts[this.index];
  } 

}
