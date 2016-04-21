var mongoose = require('mongoose');

var QuestionSchema = mongoose.Schema({
  title: {type: String, required: true},
  body: {type: String, default: 'Whats up with that?'},
  createdAt: { type: Date, default: Date.now() },
  voteCount: Number
});

QuestionSchema.methods.voteUp = function(cb) {
  this.voteCount++;
  this.save(cb);
};

QuestionSchema.methods.voteDown = function(cb) {
  this.voteCount--;
  this.save(cb);
};

var Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
