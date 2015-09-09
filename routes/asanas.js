var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/postures');
var asanaCollection = db.get('postures')

router.get('/asanas', function(req, res, next) {
  asanaCollection.find({}, function (err, records) {
    res.render('asanas/index', {allAsanas: records});
  });
});

router.get('/asanas/new', function(req, res, next) {
  res.render('asanas/new');
});

router.post('/asanas', function (req, res, next) {
  asanaCollection.insert({englishName: req.body.englishName, sanskritName: req.body.sanskritName, url: req.body.url, backBend: req.body.backBend, forwardBend: req.body.forwardBend});
  res.redirect('/asanas')
});

router.get('/asanas/:id', function (req, res, next) {
  asanaCollection.findOne({_id: req.params.id}, function (err, record) {
    res.render('asanas/show.hbs', {thePosture: record});
  });
});

module.exports = router;
