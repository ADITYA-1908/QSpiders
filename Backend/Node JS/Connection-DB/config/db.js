const mongoose = require("mongoose")
const dburl = "mongodb://localhost:27017/quantum"
const connectDB= async () =>{
   try {
    await mongoose.connect(dburl)
    console.log("db connected")
} catch (error) {
       console.log("db connection function failed")
    process.exit(1) // stop all sys and asys work 
   }
}

module.exports=connectDB
