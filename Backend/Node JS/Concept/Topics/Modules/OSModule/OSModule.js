const os = require("os");

//	Returns information about the operating system's platform
console.log("operating system:" + os.platform());

//Laptop Arch-ram
console.log("Architecture: " + os.arch());
//Laptop type- win linux
console.log("OS is: " + os.type());

//return total in memory
console.log("Total Memory: " + os.totalmem());

//return total in memory space is there
console.log("Vacent Memory: " + os.freemem());

//retun laptop version
console.log("Vacent Memory: " + os.version());

//retun no of CPU
// console.log(os.cpus());

//retun in which date OS in release
console.log("Relese Date:" + os.release());

//retun Home directoy path
console.log("you are in directory:" + os.homedir());

//give the internet details
// console.log(os.networkInterfaces());
