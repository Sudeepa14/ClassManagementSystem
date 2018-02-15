var Teacher=require('./teacher.js');
exports.findByGrade=function(grade){
    Teacher.find({ grade: grade }, function(err, gradeRes) {
        if (err) throw err;
      

        console.log(gradeRes);
      });
}
exports.findAllByName=function(name){
    Teacher.find({ name : name }, function(err, teacher) {
        if (err) throw err;

        console.log(teacher);
      });
}