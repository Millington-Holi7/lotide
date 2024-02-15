
const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item); // testing purposes
    console.log('item AFTER: ', callback(item)); // testing purposes
    console.log('---'); // testing prposes
    results.push(callback(item));
  }
  return results;
}
module.exports = map;

/* test code 
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])
assertArraysEqual(results1, ['g', 'd', 't', 'm', 't'])
*/