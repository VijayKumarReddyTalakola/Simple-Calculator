const input = document.querySelectorAll(".val");
const clear = document.querySelector(".AC");
const del = document.querySelector(".DEL");
const evaluate = document.querySelector(".equal");
const output = document.querySelector(".text");

input.forEach((val)=>{
    val.addEventListener("click",()=>{
        output.value += val.value ;
    })
})

clear.addEventListener("click",()=>{
    output.value = "";
})

del.addEventListener("click",()=>{
    output.value = output.value.slice(0,-1);
})

evaluate.addEventListener("click",()=>{
    try{
        output.value = eval(output.value);
    }catch(e){
        alert(e);
    }
})