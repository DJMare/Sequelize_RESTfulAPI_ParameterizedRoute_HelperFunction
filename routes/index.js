var express = require('express');
var router = express.Router();
// Require mysql2
const mysql = require('mysql2');
// Require models
const models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Add parameteried get() route with helper function
router.get('/actors/:id', function(req, res, next) {
  models.actor
    .findByPk(parseInt(req.params.id), {
      include: [{ model: models.film }]
    })
    .then(actorsFound => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(actorsFound));
    })
});

module.exports = router;
