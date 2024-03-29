const takeUntil = function (array, callback) {
  const results = [];


  for (let i = 0; i < array.length; i++) {
    let data = array[i];

    if (callback(data)) {
      break;
    } else {
      results.push(data);
    }
  }
  return results;
};

module.exports = takeUntil;

/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
*/