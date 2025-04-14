const currentitem=JSON.parse(localStorage.getItem("currentitem"))
console.log(currentitem)

const image_container=document.querySelector(".image_container")
const details=document.querySelector(".details")
image_container.innerHTML=`<img width="80%" height="500px" src=${currentitem.image}>`
details.innerHTML=`
<h1>${currentitem.title}</h1>
<p>${currentitem.description}</p>
<h3>${currentitem.price}$</h3>
<h4>Rating :${currentitem.rating.rate}⭐</h4>
<button class="btn btn-warning">Buy Now</button>

`

const backbtn=document.querySelector(".backbtn")
backbtn.addEventListener("click",()=>{
    localStorage.removeItem("currentitem")
    window.location="../index.html"
})