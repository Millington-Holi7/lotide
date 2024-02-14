const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["hello", "lighthouse", "Labs"]), "hello");
assertEqual(head([4]), 1);
assertEqual(head([]), undefined);