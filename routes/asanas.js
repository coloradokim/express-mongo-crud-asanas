var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/postures');
var asanaCollection = db.get('postures')

router.get('/asanas', function(req, res, next) {
  res.render('asanas/index');
});

router.get('/asanas/new', function(req, res, next) {
  res.render('asanas/new');
});

router.post('asanas', function (req, res, next) {
  asanaCollection.insert({englishName: req.body.englishName, sanskritName: req.body.sanskritName, url: req.body.url, backBend: req.body.backBend, forwardBend: req.body.forwardBend});
  res.redirect('/asanas')
});

module.exports = router;
