const enventory:{id:number,name:string,quantity:number}[]=[{id:1,name:"cap",quantity:20},{id:2,name:"shirt",quantity:10},{id:3,name:"shoes",quantity:50}];
let store=""
let ht=document.getElementById("items") as HTMLElement;
for(let item of enventory){
    store+=`<div class="card" style="background-color:orangered; border-color:darkblue;" id="display">
    <div class="card-body">
      <h4 class="card-title text-white">Name:${item.name}</h4>
      <p class="card-text text-white">Quantity:${item.quantity}</p>
      <div class="d-flex justify-content-center"><button onClick="purchase(${item.id})" class="btn btn-primary">Buy</button></div>
      <small class="text-white" id="alert"></small>
    </div>
  </div>`
}
ht.innerHTML=store;
function purchase(id:number):void{
    for (let item of enventory) {
        if(id==item.id){
            if(item.quantity>5){
                item.quantity--;
                alert("item purchased")
                
            }
            else{
                alert(`reorder  ${item.name}`);
            }
        }
    }
    ht.innerHTML=``;
    for(let item of enventory){
        ht.innerHTML+=`<div class="card" style="background-color:orangered; border-color:darkblue;">
        <div class="card-body">
          <h4 class="card-title text-white">Name:${item.name}</h4>
          <p class="card-text text-white">Quantity:${item.quantity}</p>
          <div class="d-flex justify-content-center"><button onClick="purchase(${item.id})" class="btn btn-primary">Buy</button></div>
          <small class="text-white" id="alert"></small>
        </div>
      </div>`;
    }
}
