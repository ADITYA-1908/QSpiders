const fs = require("fs");

// //1)reading file in Node js
// const res = fs.readFile("Demo.txt", (err, data) => {
//   console.log(data.toString());
// });

// //2)writing a file in Node.js
// const res = fs.writeFile("Demo.txt", "hello", (err, data) => {
//   if (err) {
//     console.error("Error writing to file:", err);
//   } else {
//     console.log("File written successfully!");
//   }
// });

// //3) Append a data in a file
// fs.appendFile("Demo.txt", "Aditya", (data, err) => {
//   if (err) {
//     console.log("File not appended", err);
//   } else {
//     console.log("File append successfully");
//   }
// });

// // // 4)Rename a file
// fs.rename("Demo.txt", "FileSystem.txt", (data, err) => {
//   if (err) {
//     console.log("File is not renamed", err);
//   } else {
//     console.log("File rename successfully");
//   }
// });

// // 5)Open files

//open in write format
// fs.open("example.txt", "w", (err, file) => {
//   if (err) {
//     console.error("Error opening file:", err);
//   } else {
//     console.log("File created or opened:", file);
//   }
// });

// //open in Read format
// fs.open("example.txt", "r", (err, file) => {
//   if (err) {
//     console.error("Error opening file:", err);
//   } else {
//     console.log("File created or opened:", file);
//   }
// });

// // //6)Delete a file
// fs.unlink("example.txt", (err) => {
//   if (err) {
//     console.log("file is not present");
//   }
//   console.log("file deleted successfully");
// });
