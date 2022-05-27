let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
let findLongestWord = [...words].sort((a, b) => a.length - b.length).pop();
console.log(findLongestWord);
// - Convert the above array "words" into an array of length of word instead of word.
words.map((word) => word.length);
// - Create a new array that only contains word with atleast one vowel.
let wordsvowel = words.filter((word) => {
  if (word.includes("a")
    || word.includes("e")
    || word.includes("i")
    || word.includes("o")
    || word.includes("u")){
      return true;
    } else { 
      return false;
    }
  })
// - Find the index of the word "rhythm"
words.indexOf("rhythm");
// - Create a new array that contians words not starting with vowel.
let wordsnotvowel = words.filter((word) => {
  if (word.startsWith("a")
    || word.startsWith("e")
    || word.startsWith("i")
    || word.startsWith("o")
    || word.startsWith("u")){
      return false;
    } else { 
      return true;
    }
  })
// - Create a new array that contianse words not ending with vowel
let wordsnotvowelatend = words.filter((word) => {
  if (word.endsWith("a")
    || word.endsWith("e")
    || word.endsWith("i")
    || word.endsWith("o")
    || word.endsWith("u")){
      return false;
    } else { 
      return true;
    }
  })

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function add(accumulator, currentValue) {
  return accumulator + currentValue;
}
let sumArray = function(array) {
  return array.reduce(add); 
}
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let mulby3Numbers = numbers.filter((elements) => elements % 3 == 0);
// - Create a new array that contains only even numbers
let evenNumbers = numbers.filter((elements) => elements % 2 == 0);
// - Create  a new array that contains only odd numbers.
let oddNumbers = numbers.filter((elements) => elements % 2 != 0);
// - Create a new array that should have true for even number and false for odd numbers.
let filterednumbers = numbers.map((elements) => {
  if(elements % 2 == 0){
    return elements = "true";
  } else {
    return elements = "false";
  }
});
// - Sort the above number in assending order.
let sort = numbers.sort((a, b) => a - b);
// - Does sort mutate the original array?
//yes
//but if we clone the array then it wont mutate the original array

// - Find the sum of the numbers in the array.
let sum = numbers.reduce(add);
function add(accumulator, currentValue){
  return accumulator + currentValue;
}
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let sum1 = numbers.reduce(add);
function add(accumulator, currentValue){
  return accumulator + currentValue;
}
let averageNumbers = ((sum, lengthofnumbers) => sum / lengthofnumbers);

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
strings = strings.map((string) => string.length);
let sumOfStringsLength = strings.reduce(add);
function add(accumulator, currentValue){
  return accumulator + currentValue;
}
let averageWordLength = ((sumOfStringsLength, lengthofstrings) => sumOfStringsLength / lengthofstrings);
