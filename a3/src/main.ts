interface emloyee{
  id: number
  fname:string
  lname: string
  address:string
  salary: number
}
class emp implements emloyee{
  id: number
  fname:string
  lname: string
  address:string
  salary: number
  constructor(id:number,first:string,last:string,add:string,s:number){
    this.id=id;
    this.fname=first;
    this.lname=last;
    this.address=add;
    this.salary=s;
  }
}
const array:emp[]=[]
$('#btn').click(function () {
  let id=$('#uid').val();
  let fname=$('#fname').val();
  let lname=$('#lname').val();
  let address=$('#address').val();
  let w=$('#wage').val()
  let e2=new emp(id,fname,lname,address,w)
  array.push(e2)
  console.log(array)
  let output:string=""
  for(let item of array)
  {
      output+=`<tr><td>${item.id}</td> <td>${item.fname}</td><td> ${item.lname}</td><td>${item.address}</td><td>${item.salary}</td></tr>`
  }
  console.log(output)
  $('#table').html(output)
})
function find(id: number) {
  console.log(id);
 let bool:boolean=false;
  for (let i = 0; i < array.length; i++) {
    if (id == i || id == array[i].id ) {
      document.getElementById(
        "show"
      )!.innerHTML = `the found emloyee is ${array[i].fname}  ${array[i].lname}`;
        bool=true;
        break;
    }
  }
  if(bool==false)
  {
    document.getElementById(
        "show"
      )!.innerHTML = `data not found`;
  }
}
$("#search").click(function f(): void {
  let input: HTMLInputElement | any = document.getElementById("semp");
   const id = input!.value;
   if(id!="")
   {
    find(id);
    
   }
   else
   {
     alert("enter id")
   }
  
 })
