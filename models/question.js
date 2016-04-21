var mongoose = require('mongoose');

var QuestionSchema = mongoose.Schema({
  title: {type: String, required: true},
  body: {type: String, default: 'Whats up with that?'},
  createdAt: { type: Date, default: Date.now() },
  voteCount: Number
});

QuestionSchema.methods.voteUp = function() {
  this.voteCount++;
  console.log(this.voteCount);
};

QuestionSchema.methods.voteDown = function() {
  this.voteCount--;
  console.log(this.voteCount);
};

var Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
