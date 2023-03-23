interface demo{
    id:number
    name:string;
    userId:string;
}
function printDemo(obj:demo):void{
        console.log(`${obj.id} ${obj.name} ${obj.userId}`)
}
let data1:demo={id:1,name:"luffy",userId:"monkey.D.Luffy"}
printDemo(data1);