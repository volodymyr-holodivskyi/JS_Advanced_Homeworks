import { Injectable } from '@angular/core';

interface Skill{
  name:string,
  description:string,
  showDescription:boolean,
  onEdit:boolean,
  showCheckmark:boolean,
  type:string
}

interface Project{
  name:string,
  description:string,
  onEdit:boolean,
  showCheckmark:boolean,
  type:string
}

interface About{
  firstName:string,
  lastName:string,
  email:string,
  softSkills:Array<Skill>,
  projects:Array<Project>
}

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  about:About;
  constructor() {
    this.about={
      firstName:"Volodymyr",
      lastName:'Holodivskyi',
      email:"volodymyrholodivskyi@gmail.com",
      softSkills: [
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
     if(firstName.trim()&&lastName.trim()){
      return this.about.firstName=firstName,
              this.about.lastName=lastName;
     }return false;
   }
   editEmail(email:string){
     if(email.trim()){
      return this.about.email=email;
     }
     return false;
   }
   getProjects(){
     return this.about.projects;
   }
   addProject(name:string,description:string){
    if(!name||!description){
     return false;
    }
    else{
     let newProject:Project={
       name:name,
       description:description,
       onEdit:false,
       showCheckmark:false,
       type:"project"
     }
     return this.about.projects.push(newProject);
    }
  }
  editProject(index:number,name:string,description:string){
    if(!name||!description){
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
    if(!name||!description){
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
