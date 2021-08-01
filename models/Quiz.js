// models/Quiz.js - quiz model
// import packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// QuestionSchema
const QuestionSchema = new Schema({
  description: String,
  options: [String],
  correctAnswer: Number
});
// QuizSchema
const QuizSchema = new Schema({
  title: String,
  subject: String,
  topic: String,
  questions: [QuestionSchema]
});
// model
const Quiz = mongoose.model('Quiz', QuizSchema);
// export
module.exports = Quiz;
