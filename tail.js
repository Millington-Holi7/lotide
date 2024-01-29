const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }
};
const tail = function(words) {
  if (words.length > 0) {
    return words.slice(1);
  } else {
    return [];
  }
};

const result = tail(["Hello", "Lighthouse", "labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "labs");

const words = ["Yo Yo", "Lighthouse", "labs"];
tail(words);
assertEqual(words.length, 3);