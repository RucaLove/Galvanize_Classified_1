
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex')
const humps = require('humps')

router.get('/', function(req, res) {
  knex('classifieds')
  .select('id', 'title', 'description', 'price', 'item_image')
    .then((classifieds) => {
      res.json(classifieds);
    })
});

router.get('/:id', function(req, res) {
  knex('classifieds')
  .select('id', 'title', 'description', 'price', 'item_image')
    .then((classifieds) => {
      res.json(classifieds[0]);
    })
});

// router.post('/', function(req, res) {
//   knex('classifieds')
//   .insert({
//     title: req.body.title,
//     description: req.body.desrciption,
//     price: req.body.price,
//     item_image: req.body.itemImage
//   })
//   .returning(["id", "title", "description", "price", "item_image"])
//   .then((classifieds) => {
//     res.json(humps.camelizeKeys(classifieds[0]));
//   })
// });

router.patch('/:id', function(req, res, next) {
  knex('classifieds')
  .update({
    title: req.body.title,
    description: req.body.desrciption,
    price: req.body.price,
    item_image: req.body.itemImage
  })
  .returning(["id", "title", "description", "price", "item_image"])
  .then(classifieds => {
    res.json(classifieds[0])
  })
})

router.delete('/:id', function(req, res, next) {
  knex('classifieds')
  .where('id', req.params.id)
  .del()
  .returning(["id", "title", "description", "price", "item_image"])
  .then(classifieds => {
    res.send(classifieds[0])
  })
})

module.exports = router;
