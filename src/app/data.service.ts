import { Injectable } from '@angular/core';

export interface User{
  firstName:string,
  lastName:string,
  login:string,
  password:string,
  email:string,
  sex:string
}
export interface RegisterFormValid{
  firstName:boolean,
  lastName:boolean,
  login:boolean,
  password:boolean,
  passwordRepeat:boolean,
  email:boolean,
  sex:boolean
 
}

export interface Post{
  theme:string,
  text:string,
  date:string,
  author:string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  RegisterPatterns={
    firstName:/[A-Z][a-z]+/,
    lastName:/[A-Z][a-z]+/,
    login:/[a-zA-Z]+/,
    password:/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
    email:/[\w_\.-]+\@[a-z]+\.[a-z]+/,
    sex:/[a-z]+/
  }

  users:User[]=[
    {
      firstName:'admin',
      lastName:'',
      login:'admin',
      password:'admin',
      email:'',
      sex:''
    },
    {
      firstName:'ivan',
      lastName:'ivanov',
      login:'iv123',
      password:'Iv123',
      email:'ii@gmail.com',
      sex:'male'
    },
    {
      firstName:'petro',
      lastName:'petriv',
      login:'pp123',
      password:'Pp123',
      email:'pp@gmail.com',
      sex:'male'
    }, {
      firstName:'kama',
      lastName:'bullet',
      login:'kamabullet',
      password:'qwe123ZXC',
      email:'kama@gmail.com',
      sex:'male'
    },
  ];
  posts:Post[]=[];
  constructor() {

   }
   login(login:string,password:string):number{
     for (const user of this.users) {
       if(login===user.login&&password===user.password){
         return this.users.indexOf(user);
       }
     }return -1;
   }
   adminLogin(login:string,password:string){
     if(login==='admin'&&password==='admin'){
       return true;
     }return false;
   }
   onInit():void{
    localStorage.posts?this.posts=JSON.parse(localStorage.posts):this.posts=[];
   }
   addUser(newUser:User):void{
     this.users.push(newUser);
     localStorage.setItem('users',JSON.stringify(this.users));
   }
   addPost(newPost:Post):void{
     this.posts.unshift(newPost);
     localStorage.setItem('posts',JSON.stringify(this.posts));
   }
   editPost(index:number,newPost:Post):void{
    this.posts[index]=newPost;
    localStorage.setItem('posts',JSON.stringify(this.posts));
   }
   removePost(index:number):void{
     this.posts.splice(index,1);
     localStorage.setItem('posts',JSON.stringify(this.posts));
     this.posts=JSON.parse(localStorage.posts)
   }
   removeAllPosts():void{
     localStorage.removeItem('posts');
     this.posts=[];
   }
   getUser(index:number):User{
     return this.users[index];
   }
   validateField(field:string,pattern:RegExp):boolean{
     return pattern.test(field)?true:false;
   }
}
