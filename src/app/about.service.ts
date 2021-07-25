import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  about:any;
  constructor() {
    this.about={
      firstName:"Volodymyr",
      lastName:'Holodivskyi',
      email:"volodymyrholodivskyi@gmail.com",
      softSkills:[
        {
          name:"skill1",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fugit!",
          showDescription:true,
          onEdit:false,
          showCheckmark:false,
          type:"skill"
        },
        {
          name:"skill2",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fugit!",
          showDescription:false,
          onEdit:false,
          showCheckmark:false,
          type:"skill"
        },{
          name:"skill3",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fugit!",
          showDescription:false,
          onEdit:false,
          showCheckmark:false,
          type:"skill"
        },
      ],
      projects:[
        {
          name:"project1",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur suscipit maiores ut accusamus eligendi natus maxime? Dolore ipsa nemo quis laborum rem aliquid et at, illo iure ab tenetur. Maxime.",
          onEdit:false,
          showCheckmark:false,
          type:"project"
        },
        {
          name:"project2",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur suscipit maiores ut accusamus eligendi natus maxime? Dolore ipsa nemo quis laborum rem aliquid et at, illo iure ab tenetur. Maxime.",
          onEdit:false,
          showCheckmark:false,
          type:"project"
        },
        {
          name:"project3",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur suscipit maiores ut accusamus eligendi natus maxime? Dolore ipsa nemo quis laborum rem aliquid et at, illo iure ab tenetur. Maxime.",
          onEdit:false,
          showCheckmark:false,
          type:"project"
        },
      ]
    }
   }
   editName(firstName:string,lastName:string){
     if(typeof firstName.trim()!==undefined&&typeof lastName.trim()!==undefined){
       this.about.firstName=firstName;
       this.about.lastName=lastName;
     }
   }
   editEmail(email:string){
     if(typeof email.trim()!==undefined){
       this.about.email=email;
     }
   }
   getProjects(){
     console.log(this.about.projects);
     return this.about.projects;
   }
   addProject(name:string,description:string){
    if(typeof name===undefined||typeof description===undefined || name===undefined || description===undefined || name===''|| description===''){
     return false;
    }
    else{
     let newProject={
       name:name,
       description:description,
       onEdit:false,
       showCheckmark:false
     }
     return this.about.projects.push(newProject);
    }
  }
  editProject(index:number,name:string,description:string){
    if(typeof name===undefined||typeof description===undefined || name===undefined || description===undefined || name===''|| description===''||typeof index===undefined){
      return false;
     }else{
       this.about.projects[index].name=name;
       this.about.projects[index].description=description;
       return this.about.projects[index];
     }
  }
  getSize(){
    return this.about.projects.length;
  }
  removeProject(index:number){
    if(typeof index!==undefined){
      return this.about.projects.splice(index,1);
    }
    return false;
  }
  editSkill(index:number,name:string,description:string){
    if(typeof name===undefined||typeof description===undefined || name===undefined || description===undefined || name===''|| description===''||typeof index===undefined){
      return false;
     }else{
       this.about.softSkills[index].name=name;
       this.about.softSkills[index].description=description;
       return this.about.softSkills[index];
     }
  }
  removeSkill(index:number){
    if(typeof index!==undefined){
      return this.about.softSkills.splice(index,1);
    }
    return false;
  }
   
}
