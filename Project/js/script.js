const main = document.querySelector("main");

for (let i = 1; i <= 30; i++) {}
// const date=new Date()
// console.log(date)

let timer = document.querySelector(".timer");
let time = document.querySelector("#time");

setInterval(() => {
  let date = new Date();
  const timing = date.toLocaleTimeString();
  time.innerText = timing;
  // time.append()
  // const lodu=date;
  // // lodu.innerText=date;
  // timer.appendChild(lodu)
}, 1000);

const displayData = (data) => {
  data.map((ele, i) => {
    const div = document.createElement("div");
    div.setAttribute("class", "card card_shadow");
    div.style.width = "16rem";
    const html = `<img src=${
      ele.image
    } class="card-img-top" alt="..." width="100%" height="200px" >
  <div class="card-body">
    <h5 class="card-title">${ele.title}</h5>
    <p class="card-text">${ele.description.slice(0, 30)}...</p>
    <p class="card-text">${ele.price}$</p>
    <button type="button" id="viewProduct" class="btn btn-primary">View</button>
    <button type="button" class="btn btn-warning">Add to Cart</button>
  </div>`;
    div.innerHTML = html;
    // console.log(div)
    div.children[0].children[3].addEventListener("click", () => {
      localStorage.setItem("product", JSON.stringify(ele));
      window.location = "../pages/product.html";
    });
    main.append(div);
  });
  // console.log(data);
};

// fetching
async function fetchdata() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.log(RangeError);
  }
}
fetchdata();

//onclick on view more it will redirect to product page
// setTimeout(() => {
//   const viewProduct = document.querySelector("#viewProduct");
//   viewProduct.forEach((ele) => {
//     ele.addEventListener("click", () => {
//       window.location.href = "product.html";
//     });
//   })
// }, 4000);
