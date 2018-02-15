// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var teacherSchma = new Schema({
  name : String,
  age : Number,
  grade:String,
  subject :String
});
var Teacher = mongoose.model('teacher', teacherSchma);
module.exports = Teacher;


exports.findByGrade=function(garde){
    module.exports.Teacher.find({ grade: grade }, function(err, gradeRes) {
        if (err) throw err;
      

        console.log(gradeRes);
      });
}
exports.findAllByName=function(name){
    module.exports.Teacher.find({ name : name }, function(err, teacher) {
        if (err) throw err;

        console.log(teacher);
      });
}