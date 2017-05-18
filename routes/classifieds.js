
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex')


router.get('/', function(req, res) {
  knex('classifieds')
  .select(['id', 'title', "description", "price", "item_image"])
    .then((classifieds) => {
        res.json(classifieds);
    })
    .catch((err) => {
        next(err);
    });
});

router.get('/:id', function(req, res) {
  knex('classifieds')
  .select(['id', 'title', "description", "price", "item_image"])
    .then((classifieds) => {
        res.json(classifieds[0]);
    })
    .catch((err) => {
        next(err);
    });
});

// router.post('/', function(req, res) {
//   knex('classifieds')
//   .insert({
//     title: req.body.title,
//     description: req.body.desrciption,
//     price: req.body.price,
//   })
//   .then(function(classifieds) {
//     res.send(classifieds[0]);
//   }).catch(function(err) {
//     res.send(err);
//   });
// });

module.exports = router;
