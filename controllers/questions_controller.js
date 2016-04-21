var Question = require('../models/question');
var questions = {};

questions.index = function(req, res) {
  Question.find({}, function(err, questions) {
    if (err) return res.json(err);
    res.json(questions);
  });
};

questions.create = function(req, res) {
  console.log(req);
  var question = new Question();
  question.title = req.body.title;
  question.body = req.body.body;
  question.save(function(err) {
    if(err) {
      throw err;
    }
    res.json({message: 'added', success: true});
  });
};

module.exports = questions;
