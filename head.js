const head = function(array) {

  if (array.length !== 0) {
    return array[0];

  } else {
    return undefined;

  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["hello", "lighthouse", "Labs"]), "hello");
assertEqual(head([4]), 1);
assertEqual(head([]), undefined);