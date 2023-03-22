const empdata:{id:number,name:string,city:string,doj:Date}[]=[
    {id:2307,name:"Damian",city:"Mumbai",doj:new Date("9,8,2020")},
    {id:2307,name:"Espona",city:"Pune",doj:new Date("12,7,2020")},
    {id:2307,name:"Bhuvan",city:"Mumbai",doj:new Date("5,6,2021")},
    {id:2307,name:"Nick",city:"Ahmedabad",doj:new Date("3,4,2022")},
    {id:2307,name:"Roma",city:"Delhi",doj:new Date("28,7,2023")}
];
console.log("----------person who lives in mumbai and joined after 2020--------")

empdata.map((val)=>{
    let d=new Date();
        d.setFullYear(2020)
        if(val.city.toLowerCase()=="mumbai" && val.doj.getFullYear()> d.getFullYear())
        {
            console.log(val);
        }
})
console.log("----------person who joined after 2020--------")
empdata.map((emp)=>{
    let d=new Date();
    d.setFullYear(2020)
    if(emp.doj.getFullYear()> d.getFullYear())
    {
        console.log(emp)
    }
})
