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

questions.update = function(req, res) {
  // console.log(req.params.id);
  console.log(req.query.vote);
  Question.findById(req.params.id, function(err, question) {
    if(err) {
      throw err;
    }

    if(req.query.vote === 'up') {
      console.log('up');
      question.voteUp(function(err, question) {
        if(err) {
          return res.json(err);
        }
        return res.json(question);
      });
    }

    if(req.query.vote === 'down') {
      console.log('down');
      question.voteDown(function(err, question) {
        if(err) {
          return res.json(err);
        }
        return res.json(question);
      });
    }
  });
};

module.exports = questions;
