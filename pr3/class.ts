// class demo
class c1{
    arg1:string;
    constructor(input:string){
        this.arg1=input;
    }
}
let obj1=new c1("this is class one");

document.getElementById("o/p")!.innerHTML=`${obj1.arg1}`

//inheritance 
class animal{
    moved(steps:number){
        document.getElementById("simple")!.innerHTML=`the human moved ${steps} steps`
        
    }
}
class human extends animal{
    learn(language:string){
        // console.log(`the human learn ${language} language`)
        document.getElementById("inheritance")!.innerHTML=`the human learn ${language} language`
    }
}
let h1=new human();
h1.moved(10);
h1.learn("hindi");
// constuctors
class con{
    name:string;
    age:number;
    constructor(str:string,num:number){
        this.name=str;
        this.age=num;
    }
}
let p1=new con("jhon",23)
document.getElementById("constructor")!.innerHTML=`the value initialize by constructor is ${p1.name} and ${p1.age}`

class mexmple{
    name:string;
    constructor(val:string){
        this.name=val;
    }
    public conc(str2:string){
      this.name=this.name+str2;
    }
}
let v1=new mexmple("string1")
v1.conc("that is")
console.log("the concated string is: "+v1.name)
