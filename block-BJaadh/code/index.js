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
let allIs = string.filter((string) =>
  string.includes("is")
);
// - Find all the words that contain 'is' use string method 'indexOf'
let allIsAgain = string.filter((string) =>
  string.indexOf("is") != -1
);
// - Check if all the numbers in numbers array are divisible by three use array method (every)
let div = (num) => num % 5 == 0;
numbers.every(div);
// -  Sort Array from smallest to largest
[...numbers].sort(comparefunction);
function comparefunction(a, b) {
  return a - b;
}
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers  
let largestNumber = [...numbers].sort((a, b) => a - b).pop();
console.log(largestNumber);

// - Find longest string in strings
let largestString = [...strings].sort((a, b) => a.length - b.length).pop();
console.log(largestString);

// - Find all the even numbers
let evenNumbers = numbers.filter(
  elements => elements % 2 == 0
);
console.log(evenNumbers);
// - Find all the odd numbers
let oddNumbers = numbers.filter((elements) => elements % 2 != 0);
console.log(oddNumbers);
// - Place a new word at the start of the array use (unshift)
strings.unshift("practice");
// - Make a subset of numbers array [18,9,7,11]
[...numbers].slice(3, 7);
// - Make a subset of strings array ['a','collection']
[...strings].slice(3,5);
// - Replace 12 & 18 with 1221 and 1881
numbers.map ((num) => {
  if(num == 12){
    return 1221;
  } else if (num == 18) {
    return 1881;
  } else {
    return num;
  }
}
);

// - Replace words in strings array with the length of the word
strings.map((string) => string.length);

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
let filteredCustomers = customers.filter(customer => customer.firstname.startsWith("J"));
// - Create new array with only first name
let firstnameCustomers = customers.map(customer => customer.firstname);

// - Create new array with all the full names (ex: "Joe Blogs")
let fullnameCustomers = customers.map((customer) => 
  `${customer.firstname} ${customer.lastname}`
  );

// - Sort the array created above alphabetically
[...fullnamecustomers].sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
let customersvowel = customers.filter((customer) => {
  if (customers[i].firstname.includes("a")
    || customers[i].firstname.includes("e")
    || customers[i].firstname.includes("i")
    || customers[i].firstname.includes("o")
    || customers[i].firstname.includes("u")){
      return true;
    } else { 
      return false;
    }
  })