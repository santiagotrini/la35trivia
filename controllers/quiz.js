// controllers/quiz.js - quiz controller
// import model
const Quiz = require('../models/Quiz');
// exports
// GET /api/quizzes
exports.all = (req, res, next) => {
  Quiz
    .find()
    .exec((err, quizzes) => {
      res.status(200).json(quizzes);
    });
};
// GET /api/quizzes/:id
exports.one = (req, res, next) => {
  Quiz
    .findById(req.params.id)
    .exec((err, quiz) => {
      res.status(200).json(quiz);
    });
};
// POST /api/quizzes
exports.create = (req, res, next) => {
  const { title, subject, topic, difficulty, questions } = req.body;
  const quiz = new Quiz({
    title, subject, topic, difficulty, questions
  });
  quiz.save((err, quiz) => {
    res.status(201).json(quiz);
  });
};
// DELETE /api/quizzes/:id
exports.delete = (req, res, next) => {
  Quiz
    .findByIdAndRemove(req.params.id)
    .exec((err, quiz) => {
      res.status(200).json({ msg: 'Quiz deleted' });
    });
};
// PUT /api/quizzes/:id
exports.update = (req, res, next) => {
  const { title, subject, topic, difficulty, questions } = req.body;
  const quiz = { title, subject, topic, difficulty, questions };
  const options = {
    new: true,
    omitUndefined: true
  };
  Quiz
    .findByIdAndUpdate(req.params.id, quiz, options)
    .exec((err, quiz) => {
      res.status(200).json(quiz);
    });
};
