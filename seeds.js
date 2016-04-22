var db = require('./db');
var Question = require('./models/question');

Question.remove({}, function(){

  Question.create([
    {title: "How do birds work?", body: "They can fly right?", voteCount: 30, category: ['Animals']},
    {title: "How can I name a hurricane?", voteCount: 20, category: ['Nature', 'Natural Disasters']},
    {title: "Why's coding gotta be so hard?", body: "Just do what I want.", voteCount: 50, category: ['Computer Programming']}
  ], function(err, questions){
    if (err) console.log(err);
    console.log('seeded ' + questions.length + ' questions');
    process.exit();
  });

});

var q = new Question({
  title: "Methods",
  body: "Method in Mongoose are a crazy thing!",
  voteCount: 2,
  category: ['Computer Programming']
});
q.save();
q.voteDown();

