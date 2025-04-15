// !cddonditional statement

const atmpassword = 1234;
const savings = 100;
const userPassword = Number(prompt("enter your atm password"));
if (atmpassword === userPassword) {
  const money = Number(prompt("Enter the money"));
  if (money <= savings) {
    alert("Take the money");
  }
  else{
    alert("isufficent money")
  }
} else {
  alert("your passwors is wrong");
}
