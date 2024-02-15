const letterPositions = function (sentence) {
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
module.exports = letterPositions;

/* test code
console.log(letterPositions('Heart'));
console.log(letterPositions('Hello'));
const result = letterPositions("hello");
assertArraysEqual(result['e'], [1]);
assertArraysEqual(result['l'], [2, 3]);
*/