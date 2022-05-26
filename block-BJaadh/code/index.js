// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101);
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(" ");
// - Add two new words in the strings array "called" and "sentance"
strings.push("called", "sentance");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(" ");
// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
strings.includes("is");
// - Find all the words that contain 'is' use string method 'indexOf'
strings.indexOf("is");
// - Check if all the numbers in numbers array are divisible by three use array method (every)
let div = (num) => num % 5 == 0;
numbers.every(div);
// -  Sort Array from smallest to largest
numbers.sort(comparefunction);
function comparefunction(a, b) {
  return a - b;
}
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers  
let largestNumber = (numbers, c=0) => { 
  for(i = 0; i <= c; i++){
      if(numbers[i] > c){
        c = numbers[i];
      }
    }
    return c;
  }
console.log(largestNumber(numbers));

// - Find longest string in strings
function findLongestWord(strings) {
  var longestString = "";
  strings.forEach(function(string) {
    if(string.length > longestString.length) {
      longestString = string;
    }
  });
  return longestString;
}
console.log(findLongestWord(strings));
// - Find all the even numbers
let evenNumbers = numbers.filter(
  elements => elements % 2 == 0
);
console.log(evenNumbers);
// - Find all the odd numbers
let oddNumbers = numbers.filter(
  elements => elements % 2 != 0
);
console.log(oddNumbers);
// - Place a new word at the start of the array use (unshift)
strings.unshift("practice");
// - Make a subset of numbers array [18,9,7,11]
numbers = [1, 12, 4, [18, 9, 7, 11], 3, 101, 5, 6, 9];

// - Make a subset of strings array ['a','collection']
var strings = ['This', 'is',[ 'a', 'collection'], 'of', 'words'];

// - Replace 12 & 18 with 1221 and 1881
numbers[1] = 1221;
numbers[3][0] = 1881;
// - Replace words in strings array with the length of the word
for(i = 0; i < strings.length; i++){
  strings[i] = strings[i].length;
}console.log(strings);
// - Find the sum of the length of words using above question
let initialValue = 0;
let sum = strings.reduce(
  (previousValue, currentValue) => previousValue + currentValue, initialValue
);
console.log(sum);
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J' 
for(i = 0; i < customers.length; i++){
  if(customers[i].firstname.startsWith("J")){
    console.log(`${customers[i].firstname} starts with "J"`);
  }
}
// - Create new array with only first name
let newcustomers = [];
for(i = 0; i < customers.length; i++){
  newcustomers[i] = customers[i].firstname;
}
// - Create new array with all the full names (ex: "Joe Blogs")
let newfullcustomers = [];
for(i = 0; i < customers.length; i++){
  newfullcustomers[i] = customers[i].firstname + " " + customers[i].lastname;
}
// - Sort the array created above alphabetically
newfullcustomers.sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
let newcustomersvowel = [];
for(i = 0; i < customers.length; i++){
  if(customers[i].firstname.includes("a")
  || customers[i].firstname.includes("e")
  || customers[i].firstname.includes("i")
  || customers[i].firstname.includes("o")
  || customers[i].firstname.includes("u")){
    newcustomersvowel.push(customers[i].firstname);
  }
}