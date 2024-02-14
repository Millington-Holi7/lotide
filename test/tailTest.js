const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should return new array length of 2 for ['Hello', 'Lighthouse', 'labs']", () => {
    const result = tail(["Hello", "Lighthouse", "labs"]);
    assert.strictEqual(result.length, 2);
  });

  it("should return 'Lighthouse' at position 0", () => {
    const result = tail(["Hello", "Lighthouse", "labs"]);
    assert.strictEqual(result[0], "Lighthouse");
  });

  it("should return 'labs' at position 1", () => {
    const result = tail(["Hello", "Lighthouse", "labs"]);
    assert.strictEqual(result[1], "labs");
  });

  it("should return 'lighthouse', 'labs' ", () => {
    const words = tail(["Yo Yo", "Lighthouse", "labs"]);
    assert.deepEqual(words, ["Lighthouse", "labs"]);
  });

  it("should return words.length of 2", () => {
    const words = tail(["Yo Yo", "Lighthouse", "labs"]);
    assert.strictEqual(words.length, 2);
  });

});
