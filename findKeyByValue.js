// take in an object and the value that we need to find
//scan the object for the value that matches
// if no match found, return undefined.

const findKeyByValue = function (object, expected) {
  for (let key in object) {
    let value = object[key];

    if (value === expected) {
      return key;
    }
  }

};

module.exports = findKeyByValue;


/* Test code

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/