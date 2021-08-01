const Score = require('../models/Score');

exports.all = (req, res, next) => {
  Score.find().exec((err, scores) => {
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
