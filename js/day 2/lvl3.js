// Question 1
// find the word 'love' in the sentence and count how many times it occurs
let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let wordCount = (sentence.match(/love/gi) || []).length;
console.log(wordCount);