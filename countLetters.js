const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//take in a sentence as a string
// retrun a count of each letter as an object
const countLetters = function(sentence) {
  const count = {};
  for (const key of sentence) {
    if (key !== " ") {
      if (count[key]) {

        count[key] += 1;
      } else {
        count[key] = 1;
      }
    }
  }
  return count;
};
console.log(countLetters('love heather'));

let result = countLetters('love heather');
assertEqual(result['l'], 1);
assertEqual(result['o'], 1);
assertEqual(result['v'], 1);
assertEqual(result['h'], 2);
assertEqual(result['e'], 3);
assertEqual(result['r'], 1);
assertEqual(result['t'], 1);


//assertEqual(countLetters('Heart'), { H: 1, e: 1, a: 1, r: 1, t: 1 }); // will not work as assertEqual can't compare objects. Only strings, numbers
//take in a sentence as a string
// retrun a count of each letter as an object