const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
  user: Schema.Types.ObjectId,
  quiz: Schema.Types.ObjectId,
  score: Number
});

const Score = mongoose.model('Score', ScoreSchema);

module.exports = Score;
