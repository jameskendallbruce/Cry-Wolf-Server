/**
 * routes/api/characters.js
 *
 * Basic routing for handling our character database
 * routing for basic CRUD operations
 * */

const express = require('express');
const router = express.Router();

// Load Character model
const Character = require('../../models/Characters');

// @route GET api/characters/test
// @description tests characters route
// @access Public
router.get('/test', (req, res) => res.send('characters route testing!'));

// @route GET api/characters
// @description Get all characters
// @access Public
router.get('/', (req, res) => {
  Character.find()
    .then(characters => res.json(characters))
    .catch(err => res.status(404).json({ nocharactersfound: 'No Characters found' }));
});

// @route GET api/characters/:id
// @description Get single character by id
// @access Public
router.get('/:id', (req, res) => {
  Character.findById(req.params.id)
    .then(character => res.json(character))
    .catch(err => res.status(404).json({ nocharacterfound: 'No Character found' }));
});

// @route GET api/characters
// @description add/save character
// @access Public
router.post('/', (req, res) => {
  Character.create(req.body)
    .then(character => res.json({ msg: 'Character added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this character' }));
});

// @route GET api/characters/:id
// @description Update character
// @access Public
router.put('/:id', (req, res) => {
  Character.findByIdAndUpdate(req.params.id, req.body)
    .then(character => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/characters/:id
// @description Delete character by id
// @access Public
router.delete('/:id', (req, res) => {
  Character.findByIdAndRemove(req.params.id, req.body)
    .then(character => res.json({ mgs: 'Character entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a character' }));
});

module.exports = router;