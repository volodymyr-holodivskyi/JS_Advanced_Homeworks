import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import { Post } from '../data.service';
import { User } from '../data.service';
import { DataService } from '../data.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  currentUser:User<string>;
  post:Post={
    theme:'',
    text:'',
    date:'',
    author:''
  }
  @Output() addedPost = new EventEmitter<Post[]>();
  constructor(private dataService:DataService,private loginComponent:LoginComponent) {
    this.currentUser=this.loginComponent.user;
   }

  addPost():void{
    this.post.date=new Date().toLocaleString('en-GB');
    this.post.author=this.currentUser.firstName+' '+this.currentUser.lastName;
    this.dataService.addPost(this.post);
    this.post={
      theme:'',
      text:'',
      date:'',
      author:''
    }
    this.addedPost.emit(this.dataService.posts);
  }
  ngOnInit(): void {
  }

}
