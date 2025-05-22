//question 2
// dividing the array into two halves using slice method
import { countries } from './countries.js';

let middleIndex = Math.ceil(countries.length / 2);
let firstHalf = countries.slice(0, middleIndex);
let secondHalf = countries.slice(middleIndex);
console.log("First half:", firstHalf);
console.log("Second half:", secondHalf);