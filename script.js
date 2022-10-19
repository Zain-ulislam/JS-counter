const increase=document.getElementById("increasebtn");
const decrease=document.getElementById("decreasebtn");
const reset=document.getElementById("resetbtn");
const counter=document.getElementById("counter");



let count=0;

increase.addEventListener("click", ()=>{
    count=count+1;
    counter.innerHTML=count;
});

decrease.addEventListener("click", ()=>{
    
    if(count>0)
    {
        count=count-1;
        
    }
    else{
        
        alert("counter Cant Be Less Than 0")
    }
    counter.innerHTML=count;
});


reset.addEventListener("click", ()=>{
    count=0;
    counter.innerHTML=count;
});