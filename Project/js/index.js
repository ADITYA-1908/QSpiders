const main=document.querySelector("main")
let maindata=""


const displayData=(data)=>{
    // console.log(data)
    data.map((ele,i)=>{
        // console.log(ele)
        const card=document.createElement("div")
    
        card.setAttribute("class","card col-sm-8 col-md-6 col-lg-4")
        const cardHTML=`<img src=${ele.image} class="card-img-top" alt="..." width="100%" height="300px">
                <div class="card-body">
                  <h5 class="card-title">${ele.title}</h5>
                  <p class="card-text">${ele.description.slice(0,100)}....</p>
                  <p class="card-text">${ele.price}$</p>
                  <button type="button" class="viewproduct btn btn-primary">view</button>
                  <button type="button" class="btn btn-warning">Add to Cart</button>
                </div>`
                card.innerHTML=cardHTML
        // console.log(card.children[1].children[3])
        card.children[1].children[3].addEventListener("click",()=>{
                console.log(ele)
                localStorage.setItem("currentitem",JSON.stringify(ele))
                // logic to navigate to another page
                window.location="../pages/product.html"
        })
        main.append(card)
    })
}


for(let i=0;i<=30;i++){
    
}
const time=document.querySelector("#time")
const currDate=document.querySelector("#date")
setInterval(()=>{
const date= new Date()
time.innerText= date.toLocaleTimeString()
currDate.innerText=date.toLocaleDateString()
},1000)


//! fetching data

async function fetchdata(){
    try {
        const response=await fetch("https://fakestoreapi.com/products")
        const data=await response.json()
        
        displayData(data)
        maindata=data
    } catch (error) {
        console.log(error)
    }
}
fetchdata()

//! filter data

const findtext=document.querySelector(".find")
const form=document.querySelector(".form")
form.addEventListener("submit",(e)=>{
e.preventDefault()
console.log(findtext.value)
console.log(maindata)
const filterdata=maindata.filter((ele)=>ele.category.includes(findtext.value))
main.innerHTML=""
displayData(filterdata)
console.log(filterdata)
})