const Score = require('../models/Score');

exports.all = (req, res, next) => {
  Score
    .find()
    .populate('quiz', 'title')
    .populate('user', 'username')
    .exec((err, scores) => {
    res.status(200).json(scores);
  });
};

exports.userScores = (req, res, next) => {
  Score
    .find({ user: req.params.user })
    .populate('quiz', 'title')
    .populate('user', 'username')
    .sort({ quiz: 1, score: -1 })
    .exec((err, scores) => {
      res.status(200).json(scores);
    });
};

exports.create = (req, res, next) => {
  const score = new Score({
    user: req.user._id,
    quiz: req.body.quiz,
    score: req.body.score
  });
  score.save((err, score) => {
    res.status(201).json(score);
  });
};
