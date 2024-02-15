// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require('./eqArrays');
const map = require('./map');
const flatten = require('./flatten');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const takeUntil = require('./takeUntil');
const without = require('./without');
const eqObjects = require('./eqObjects');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  eqArrays: eqArrays,
  map: map,
  flatten: flatten,
  countLetters: countLetters,
  countOnly: countOnly,
  letterPositions: letterPositions,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  takeUntil: takeUntil,
  without: without,
  eqObjects: eqObjects

};