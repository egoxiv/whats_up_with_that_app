var db = require('./db');
var Question = require('./models/question');

Question.remove({}, function(){

  Question.create([
    {title: "How do birds work?", body: "They can fly right?", voteCount: 30},
    {title: "How can I name a hurricane?", voteCount: 20},
    {title: "Why's coding gotta be so hard?", body: "Just do what I want.", voteCount: 50}
  ], function(err, questions){
    if (err) console.log(err);
    console.log('seeded ' + questions.length + ' questions');
    process.exit();
  });

});

var q = new Question({
  title: "Methods",
  body: "Method in Mongoose are a crazy thing!",
  voteCount: 2
});
q.save();
q.voteDown();

