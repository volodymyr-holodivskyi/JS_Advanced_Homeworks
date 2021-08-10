import { Injectable, Type } from '@angular/core';

export interface User<Type>{
  [firstName:string]:Type,
  lastName:Type,
  login:Type,
  password:Type,
  email:Type,
  sex:Type
}

export interface RegisterFormValid extends User<boolean>{
  passwordRepeat:boolean,
}
interface RegisterPatterns extends User<RegExp>{
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
  RegisterPatterns:RegisterPatterns={
    firstName:/[A-Z][a-z]+/,
    lastName:/[A-Z][a-z]+/,
    login:/[a-zA-Z]+/,
    password:/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
    email:/[\w_\.-]+\@[a-z]+\.[a-z]+/,
    sex:/[a-z]+/
  }

  users:User<string>[]=[
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
  constructor() { }
   login(login:string,password:string):number{
     for (const user of this.users) {
       if(login===user.login&&password===user.password){
         return this.users.indexOf(user);
       }
     }
     return -1;
   }
   adminLogin(login:string,password:string){
     return login==='admin'&&password==='admin';
   }
   onInit():void{
    this.posts=localStorage.posts?JSON.parse(localStorage.posts):[];
   }
   addUser(newUser:User<string>):void{
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
   getUser(index:number):User<string>{
     return this.users[index];
   }
   validateField(field:string,pattern:RegExp):boolean{
     return pattern.test(field)?true:false;
   }
}
