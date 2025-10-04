const choices = ["stone", "paper", "scissor"];
let op = document.querySelectorAll("button");
function play(userChoice) {
  const compChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = "";

  if (userChoice === compChoice) {
    result = `Draw! Both chose ${userChoice}`;
    document.body.style.backgroundColor = "white";
  } else if (
    (userChoice === "stone" && compChoice === "scissor") ||
    (userChoice === "paper" && compChoice === "stone") ||
    (userChoice === "scissor" && compChoice === "paper")
  ) {
    result = `You Win! You chose ${userChoice}, Computer chose ${compChoice}`;
    document.body.style.backgroundColor = "green";
    document.body.style.color = "red";
  } else {
    result = `You Lose! You chose ${userChoice}, Computer chose ${compChoice}`;
    document.body.style.backgroundColor = "red";
  }

  let text = document.getElementById("result");
  text.innerText = result;
  document.body.style.color = "yellow";
}
