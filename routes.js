var express = require('express')
const router=express.Router();
var bodyParser = require('body-parser'); 
var Teacher=require('./Data/teacher.js');
var teacherFunctions=require('./Data/teacherFunctions.js');
router.get('/', (req, res) => {
  //  res.sendFile('index.html', {
  //    root: '/views'
  //  });
    res.send("dfdfd")

});
router.post('/submit', function (req, res, next) {
    console.log("inside submit")
      // let formData = req.body;
      // let command =req.body.command;
      // let files = req.files;
      let name ="sudeepa";
      let age=45;
      let grade= "7";
      let subject="science";
      let newTeacher = new Teacher({"name":name,"age":age,"grade":grade,"subject":subject});

      newTeacher.save(function (err){
         if (err) return console.error(err);
      });
      console.log("saved")
    
  });
  router.get('/getByYear', (req, res) => {
    let grade= "7";
    console.log(teacherFunctions.findByGrade(grade));
  
  });
module.exports = router;