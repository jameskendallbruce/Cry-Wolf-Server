/**
 * Characters
 *
 * Basic JSON schema for Characters in the story
 */

const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  headline: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  ability: {
    type: String
  },
  atk: {
    type: Number,
    default: 0
  },
  def: {
    type: Number,
    default: 0
  },
  mag: {
    type: Number,
    default: 0
  },
  //Used to retrieve the characters image and/or other relevant variables from local project storage
  abbrev: {
    type: String,
    required: true
  }
});

module.exports = Character = mongoose.model('character', CharacterSchema);