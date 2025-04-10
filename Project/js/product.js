const currentItem = JSON.parse(localStorage.getItem("product"));

const img = document.querySelector(".imimage_containerg");
const dtls = document.querySelector(".details");
img.innerHTML = `<img src=${currentItem.image} alt="product" width="80%" height="500px" />`;
dtls.innerHTML = `<h1>${currentItem.title}</h1>
<p>${currentItem.description}</p>
<p>${currentItem.price}$</p>
<p>Rating: ${currentItem.rating.rate} (${currentItem.rating.count})</p>
<button type="button" class="btn btn-warning">Buy now</button>`;

const back = document.querySelector(".backbtn");
back.addEventListener("click", () => {
  localStorage.removeItem("currentItem");
  window.location = "../pages/index.html";
});
