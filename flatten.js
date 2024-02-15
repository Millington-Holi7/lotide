const flatten = function (array) {
  let mainArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (const item of array[i]) {
        mainArray.push(item);
      }
    } else {
      mainArray.push(array[i]);
    }

  }
  return mainArray;
};

module.exports = flatten;

/* test code
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

 AI suggested revisions 
if (Array.isArray(array[i])) {
  mainArray = mainArray.concat(array[i]);
} else {
  mainArray.push(array[i]);
}
*/