
exports.render = function (req,res) {



 
  res.render('index',{title:req.session.lastVisit});
};
