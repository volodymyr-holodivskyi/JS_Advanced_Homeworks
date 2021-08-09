import { Component, OnInit } from '@angular/core';

import { Post } from '../data.service';
import { User } from '../data.service';
import { DataService } from '../data.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[];
  currentUser:User;
  onAdminMode:boolean=false;
  showModalRemoveAll:boolean=false;
  showEditPanel:boolean=false;
  editIndex:number=-1;
  constructor(private service:DataService,private loginComponent:LoginComponent) {
    this.currentUser=this.loginComponent.user;
    this.posts=this.service.posts;
    this.onAdminMode=this.loginComponent.adminMode;
   }
   addedPost(value:Post[]):void{
     this.posts=value;
   }
   editedPost(value:Post[]):void{
     this.posts=value;
     this.showEditPanel=false;
   }
   processModalRemoveAll(value:boolean):void{
    if(value){
      this.service.removeAllPosts();
      this.posts=this.service.posts;
      this.showModalRemoveAll=false;
    }else{
      this.showModalRemoveAll=false;
    }
  }
  modalRemoveAll():void{
    this.showModalRemoveAll=true;
  }
  removePost(index:number):void{
    this.service.removePost(index);
  }
  editPanel(index:number):void{
    this.editIndex=index;
    this.showEditPanel=true;
  }

  ngOnInit(): void {
  }

}
