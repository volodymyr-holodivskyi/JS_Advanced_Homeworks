const Calculator=(function(){
    let separators = /[\-\+\/*\^]/; 
    Array.prototype.top=function(){
        return this[this.length-1];
    }
    function calculate(str){
        let arr = str.split(' ');
        let numbersStack=[];
        let operatorsStack=[];
        for (const e of arr) {
            if(e===''){
                arr.splice(arr.indexOf(e),1);
            }
        }
            for(let i=0;i<arr.length;i++){
               let prevOP=operatorsStack.top();
                if(arr[i]==='+'||arr[i]==='-'||arr[i]==='*'||arr[i]==='/'||arr[i]==='^'){
                       if(operatorsStack.length===0 || prevOP==='('){
                           operatorsStack.push(arr[i]);
                           continue;
                       }
                       if(operatorsStack.length!==0 && (getPriority(arr[i]) > getPriority(prevOP))){
                        operatorsStack.push(arr[i]);
                        continue;
                       }
                       if(operatorsStack.length!==0 && (getPriority(arr[i]) <= getPriority(prevOP))){
                           if(Maths(numbersStack,operatorsStack)===false){
                                return 0;
                           }
                            operatorsStack.push(arr[i]);
                            continue;
                       }
                      }
                if(arr[i]==='('){
                    operatorsStack.push(arr[i]);
                    continue;
                }
                if(arr[i]===')'){
                    while(operatorsStack.top()!=='('){
                        if(Maths(numbersStack,operatorsStack)===false){
                            return 0;
                       }
                    }
                    operatorsStack.pop();
                }
                else {
                    numbersStack.push(+arr[i]);
                }
                }
                while(operatorsStack.length>0){
                    if(Maths(numbersStack,operatorsStack)===false){
                        return 0;
                   }
                }
           return numbersStack[0]?numbersStack[0]:0; 
    }
    function normalizeInput(str){
        let arr=str.split('');
        let i = 0;
        let flag = true;
        while(i<arr.length){
            if(arr[i]==='-' && !separators.test(arr[i+1]) && arr[i-1]==='('){
                arr[i]=' '+arr[i];
                i++;
                continue;
            }
            if(arr[i]==='-' && !separators.test(arr[i-1]) && arr[i+1]==='('){
                arr[i]=' '+arr[i]+' ';
                i++;
                continue;
            }
            if(arr[i]==='-' && flag && !separators.test(arr[i+1])){
                arr[i].concat(arr[i+1]);
                i++;
                continue;
            }
            if(separators.test(arr[i])){
                if(separators.test(arr[i+1])){
                arr[i]=' '+arr[i]+' ';
                i++;
                continue;
                }
                if(!separators.test(arr[i+1])&&separators.test(arr[i-1])){
                arr[i]=arr[i]+' ';
                i++;
                continue;
                }
                if(!separators.test(arr[i+1])&&!separators.test(arr[i-1]))
                arr[i]=' '+arr[i]+' ';
                i++;
                continue;
            }
            if((arr[i]==='('||arr[i]===')')&&(arr[i-1]==='('||arr[i-1]===')')&&(arr[i+1]==='('||arr[i+1]===')')){
                arr[i]=arr[i]+' ';
                i++;
                continue;
            }
            if(arr[i]==='(' && separators.test(arr[i+1]) && separators.test(arr[i-1])){
                arr[i]=arr[i];
                i++;
                continue;
            }
            if(arr[i]==='(' && i===0){
                arr[i]=arr[i]+' ';
                 i++;
                 continue;
            }
            if(arr[i]===')'&& arr[i+1]==undefined){
                arr[i]=' '+arr[i];
                i++;
                continue;
            }
            if(arr[i]===')'&& separators.test(arr[i+1])&&arr[i-1]===')'){
                arr[i]=arr[i];
                i++;
                continue;
            }
            if(arr[i]===')'&& !separators.test(arr[i+1])&&!separators.test(arr[i-1])){
                arr[i]=' '+arr[i];
                i++;
                continue;
            }
            if(arr[i]===')'&& separators.test(arr[i+1])&&!separators.test(arr[i-1])){
                arr[i]=' '+arr[i];
                i++;
                continue;
            }
            
            if(arr[i]==='(' && !separators.test(arr[i+1]) && separators.test(arr[i-1])){
                arr[i]=arr[i]+' ';
                i++;
                continue;
            }
            else {
                flag=false;
            }
        i++;
        } 
        str=arr.join('');
        return str;
    }
    function getPriority(Ch){
        if (Ch === '^') return 3;
        if (Ch === '+' || Ch === '-')return 1;
        if (Ch === '*' || Ch === '/')return 2;
         return 0;
    }
    function Maths(Stack_n,Stack_o){
        let a,b,c;
        a=Stack_n.pop();
        switch(Stack_o.top()){
            case '+':
                b=Stack_n.pop();
                c=a+b;
                Stack_n.push(c);
                Stack_o.pop();
                break;
            case '-':
                b=Stack_n.pop();
                c=b-a;
                Stack_n.push(c);
                Stack_o.pop();
                break;
            case '*':
                b=Stack_n.pop();
                c=a*b;
                Stack_n.push(c);
                Stack_o.pop();
                break;
             case '/':
                b=Stack_n.pop();
                c=b/a;
                Stack_n.push(c);
                Stack_o.pop();
                break;
            case '^':
                b=Stack_n.pop();
                c=Math.pow(b,a);
                Stack_n.push(c);
                Stack_o.pop();
                break;
            default:return false;
        }
        return true;
    }
    return{
        normalizeInput:normalizeInput,
        calculate:calculate
    }
}())

    const screen=document.querySelector('.screen');
    const inputBtns=document.querySelectorAll('.char');
    const delBtn=document.querySelector('.delBtn');
    const allClrBtn=document.querySelector('.allClrBtn');
    const getResBtn=document.querySelector('.getResBtn');
    inputBtns.forEach(btn=>{
        btn.addEventListener('click',function(){
            screen.textContent+=btn.textContent;
        })
    })
    delBtn.addEventListener('click',function(){
        let text=screen.textContent.slice(0,-1);
        screen.textContent=text;
    })
    allClrBtn.addEventListener('click',function(){
        screen.textContent='';
    })
    getResBtn.addEventListener('click',function(){
        let input=Calculator.normalizeInput(screen.textContent);
        let res=Calculator.calculate(input);
        screen.textContent=res;
    })
