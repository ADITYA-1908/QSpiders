const main = document.querySelector("main");
for (let i = 1; i <= 30; i++) {
  const card = document.createElement("div");

  card.setAttribute("class", "card col-lg-4 col-sm-8 col-md-6 ");
  const cardHtml = `
   <img
          src="./assets//images/card-img.jfif"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
  `;
  card.innerHTML = cardHtml;
  main.appendChild(card);
}
