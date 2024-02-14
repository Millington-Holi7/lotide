const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should return an empty [] array if input array is less then 2 elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("should return the middle 2 elements if the array is even numbers", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("should return the middle element if the array is odd numbers", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });

  it("make sure the original array was not altered by the middle function", () => {
    const words = ["hello", "world", "lighthouse"];
    const originalLength = words.length;
    middle(words);
    assert.strictEqual(words.length, originalLength);
  });

});




