const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`💚💚💚 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//
const letterPositions = function(sentence) {
  const results = {};
  //let placement = index
  for (let index = 0; index < sentence.length; index++) {
    let letter = sentence[index];
    if (letter !== " ") {
      //determine if letter has been seen
      if (letter in results) {
        //if it has been seen then add a new position
        results[letter].push(index);
      } else {
        // if it hasn't been seen then create an array
        results[letter] = [index];
      }
    }
  }

  return results;
};

console.log(letterPositions('Heart'));
console.log(letterPositions('Hello'));
const result = letterPositions("hello");
assertArraysEqual(result['e'], [1]);
assertArraysEqual(result['l'], [2, 3]);