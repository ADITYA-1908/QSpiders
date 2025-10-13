let count=0;
let display=document.querySelector("#dis");
let btn=document.querySelector("#count").addEventListener("click",()=>{
    display.innerText=++count;

})