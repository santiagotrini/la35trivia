// routes/score.js - score router
// import packages
const express = require('express');
const passport = require('passport');
// router instance
const router = express.Router();
// import controller
const controller = require('../controllers/score');
// API endpoints
router
  .route('/api/scores')
  .get(passport.authenticate('jwt', { session: false }), controller.all)
  .post(passport.authenticate('jwt', { session: false }), controller.create);
// export
module.exports = router;
