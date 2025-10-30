const express=require('express');
const { studentHome, studentAbout } = require('../Controller/StudentController');
const studentRouter=express.Router();

studentRouter.get('/',studentHome)

studentRouter.get('/about',studentAbout)

module.exports=studentRouter;