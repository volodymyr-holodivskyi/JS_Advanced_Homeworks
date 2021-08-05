import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  text:string='<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, praesentium distinctio illum mollitia totam labore autem nostrum repudiandae sint ipsum! Ipsam voluptatem eius, optio nemo beatae deleniti alias culpa saepe expedita aliquam eligendi! Ex soluta officiis necessitatibus quo hic vitae quam dolorem nostrum, libero labore, assumenda temporibus iusto minus aspernatur quia dolores vero consectetur a. Laudantium eius, eligendi suscipit exercitationem autem mollitia magni voluptas nisi hic aliquam error repellat voluptatum fuga ut fugit quae dolores reprehenderit iusto dolor? Voluptatibus unde ipsa atque ducimus! Aperiam labore dolores voluptas nam sunt. Fugiat laborum molestias iusto cupiditate a vel consequuntur tempora, quis officia.</p>';
  fontSize:string='18px';
  fontWeight:string='normal';
  fontStyle:string='normal';
  fontFamily:string='Times New Roman';
  textDecoration:string='none';
  color:string='#ffffff';
  password:string='1234';
  fonts:string[]=['Times New Roman','Arial','Helvetica','Verdana','Tahoma','Courier'];
  fontSizes:number[]=[12,14,16,18,20,22,24];
  addElementTypes:string[]=['p','h1','h2','h3','h4','h5','h6','a'];
  backgroundColor:string='#708090';
  constructor() { }

  editText(text:string){
    return this.text=text;
  }
  changeFontSize(value:string){
    return this.fontSize=value;
  }
  changeColor(value:string){
    return this.color=value;
  }
  changeBackgroundColor(value:string){
    return this.backgroundColor=value;
  }
  changeFontFamily(value:string){
    return this.fontFamily=value;
  }
  changeFontWeight(value:boolean){
    if(value===true){
      return this.fontWeight='bold';
    }else{
     return this.fontWeight='normal';
    }
  }
  changeFontStyle(value:boolean){
    if(value===true){
      return this.fontStyle='italic';
    }else{
      return this.fontWeight='normal';
    }
  }
  changeTextDecoration(value:boolean){
    if(value===true){
      return this.textDecoration='underline';
    }else{
      return this.textDecoration='none';
    }
  }
  addList(listType:string,elemCount:number,listStyle:string){
    if(typeof elemCount!==undefined){
      let list=`<${listType} style="list-style-type:${listStyle}"'>`;
      for(let i=0;i<elemCount;i++){
        list+=`<li>Item№ ${i+1}</li>`;
      }
      list+=`</${listType}>`;
      return list;
    }
    return;
  }
  addTable(rowCount:number,cellCount:number,cellWidth:number,cellHeight:number,borderWidth:number,borderType:string,borderColor:string){
    if(typeof rowCount!==undefined&&typeof cellCount!==undefined&&typeof cellWidth!==undefined&&typeof cellHeight!==undefined&&typeof borderWidth!==undefined){
      let table='<table>';
      for(let i=0;i<rowCount;i++){
        let row=`<tr>`;
        for(let j=0;j<cellCount;j++){
          row+= `<td style="width:${cellWidth}px;height:${cellHeight}px;border:${borderWidth}px ${borderType} ${borderColor}"></td>`;
        }
        row+='</tr>'
        table+=row;
      }
      table+='</table>';
      return table;
    }
    return;
  }
  
}
