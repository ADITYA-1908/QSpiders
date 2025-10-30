const express=require('express');
const app=express();
const fs=require('fs');
const cookieParser=require('cookie-parser');
const studentRouter = require('./Router/StudentRouter');
app.use(cookieParser());
app.use(express.json());

// function m1(request,response,next)
// {
//     console.log('Deepak');
//     request.name="Hello World";
//     next();
// }

// function m2(request,response,next)
// {
//     console.log('Nahak');
//     request.name="Hello JSP";
//     next();
// }
// app.get('/',m1,m2,(request,response)=>{
//     console.log(request.name);
//     return response.json({message:"This in Home"})
// })

// app.use('/about',m2,m1)

// app.get('/about',(request,response)=>{
//     console.log(request.name);
//     return response.json({message:"This in Home"})
// })

// function verify(request,response,next)
// {
//     const {token}=request.cookies;
//     if(token)
//     {
//         next();
//     }
//     else
//     {
//         return response.json({message:"Something went wrong"});
//     }
// }
// app.use(verify);
// app.get('/',(request,response)=>{
//     let data=JSON.parse(fs.readFileSync('./user.json','utf-8'));
//     return response.json(data);
// })


// APPLICATION LAYER MIDDLEWARE

// function m3(req,res,next)
// {
//     console.log("Hello World")
//     next();
// }

// app.use(m3); 
// app.get('/',(req,res)=>{
//     res.end('<h1>This is Home Page</h1>')
// })

// app.get('/about',(req,res)=>{
//     res.end('<h1>This is About Page</h1>')
// })


// ROUTER MIDDLEWARE

// app.use('/api/student',studentRouter)

//ERROR HANDLING MIDDLEWARE

// app.get('/',(req,res)=>{
//     throw new TypeError("Error is There");
//     return res.end('<h1>This is Home Page</h1>')
// })
// app.use((err,req,res,next)=>{
//     return res.end("<h1>SERVICE UNAVAILABLE</h1>")
// })

//INBUILT MIDDLEWARE
app.use(express.urlencoded());
app.get('/',(req,res)=>{
    console.log(req.body);
    return res.json({message:"Encoded Data Printed"});
})
app.listen(8000,()=>{
    console.log("http://localhost:8000");
})