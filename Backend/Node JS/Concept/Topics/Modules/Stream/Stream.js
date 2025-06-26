const fs = require("fs");

//!read the file wit stream
// const readable = fs.createReadStream("./FileSystem.txt", "UTF-8");

// readable.on("data", (chunk) => {
//   console.log(chunk);
// });

// //!write the data with stream

// const writable = fs.createWriteStream("output.txt", "utf-8");

// writable.write("First line of data\n");
// writable.write("Second line of data\n");
// writable.close();

//!write the data with stream

// const append = fs.createWriteStream("output.txt", { flags: "a" }, "utf-8");

// append.write(" line 1 of data\n");
// append.write("ine 2 of data\n");
// append.close();

//! how to  take a copy of the one file to another 
// const readStream = fs.createReadStream("./FileSystem.txt");
// const writeStream = fs.createWriteStream("./output.txt");
// readStream.pipe(writeStream);
// console.log("coping Done");


//! how to  take a copy and append  of the one file to another 
// const readStream = fs.createReadStream("./FileSystem.txt");
// const writeStream = fs.createWriteStream("./output.txt", { flags: "a" }); // 'a' for append

// readStream.pipe(writeStream);

// readStream.on("end", () => {
//   console.log("Appending Done");
// });

//!count no of checater in a file 
// const fs = require("fs");

// let count = 0;
// const readStream = fs.createReadStream("./FileSystem.txt", "utf-8");
// readStream.on("data", (chunk) => {
//   count += chunk.length;
//   console.log("Total characters in file:", count);
// });
// readStream.on("end", () => {
//   console.log("Total characters in file:", count);
// });


//!  read file in chunk
const readStream = fs.createReadStream("./Theory.txt", {highWaterMark:100,encoding"utf-8"});
