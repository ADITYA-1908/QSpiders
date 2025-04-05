// console.log("frist");
// setTimeout(() => {
//   console.log("second");
// }, 2000);
// console.log("third");

const token = prompt("Enter the token");
const status = new Promise((resolve, rejct) => {
  if (token == "123") {
    resolve("accepted");
  } else {
    rejct("rejected");
  }
});

status
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("always");
  });
