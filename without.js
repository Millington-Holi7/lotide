const without = function (array, exempt) {
  const newArray = [];
  for (const element of array) {
    if (!exempt.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};
module.exports = without;

/*
console.log(without([1, 2, 3], [1]));
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/