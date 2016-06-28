
exports.render = function (req,res) {




  res.render('index',{teacher : req.teacher? req.teacher.teacher_id :''});
};
