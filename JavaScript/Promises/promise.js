// console.log("frist");
// setTimeout(() => {
//   console.log("second");
// }, 2000);
// console.log("third");

//2) promise concept
// // const token = prompt("Enter the token");
// const status = new Promise((resolve, rejct) => {
//   const token = 123;
//   if (token == "123") {
//     resolve("accepted");
//   } else {
//     rejct("rejected");
//   }
// });

// status
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("always");
//   });

// //API call
// const data = fetch("https://api.github.com/users");
// data.then((serverResponse) => {
//   // console.log(serverResponse.json());
//   const finalData = serverResponse.json();
//   finalData.then((result) => {
//     console.log(result);
//   });
// });

//3) async await concept
const fetchData = async () => {
  const serverResponse = await fetch("https://api.github.com/users");
  const data = await serverResponse.json();
  console.log(data);
};

fetchData();
