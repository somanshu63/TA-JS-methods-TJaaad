Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
    - parametr: any string to sepearate each value like , - anything
    - return: a string of array elements joined with the parameter passed to it
    - example-
    ```js
    console.log(array.join(''));//somanshugroverstudyaltcampus
    console.log(array.join(' ')); //somanshu grover study altcampus
    console.log(array.join('-'));// somanshu-grover-study-altcampus
    console.log(array.join('8')); //somanshu8grover8study8altcampus
    console.log(array.join('g'));//somanshuggrovergstudygaltcampus

    ```
    - `join()` this is used to convert array into string with anything between them like , - 4 f ie comma number or string anything

3. `flat`
    - parametr: a number(of layer to be flattened) like 1 or 2 or 5
    - return: a new array with subarray concatenated to the first and showed in 1layer
    - example-
    ```js
    let array1 = ['somanshu', ['grover', 'study', ['altcampus']]];
    console.log(array1.flat(3));//['somanshu', 'grover', 'study', 'altcampus']
    let array2 = [5, 4 ,[65, [34, 798, [54,90]]]]; 
    console.log(array2.flat(4));//[5, 4, 65, 34, 798, 54, 90]
    console.log(array1.flat(10));//  ['somanshu', 'grover', 'study', 'altcampus']
    ```
    - `flat()` this is used to flat the array ie to make the array in one layer rather than showing up in different layers in itself

4. `push`
    - parametr: element to be added in the array
    - return: array with the element added to the last index 
    - example-
    ```js
    let array1 = ['somanshu', 'grover', 'study', 'altcampus'];
    console.log(array1.push('software'));//['somanshu', 'grover', 'study', 'altcampus', 'software']
    console.log(array1.push('development'));// ['somanshu', 'grover', 'study', 'altcampus', 'software', 'development']
    let array2 =[5, 4, 65, 34, 798, 54, 90];
    console.log(array2.push(98));
    // [5, 4, 65, 34, 798, 54, 90, 98]
    ```
    - `push()` this is used to add the element to the last index of an array

5. `indexOf`
    - parametr: element to be located in the array
    - return: the index of element
    - example-
    ```js
    let array1 = ['somanshu', 'grover', 'study', 'altcampus'];
    console.log(array1.indexOf('soft'));//-1
    console.log(array1.indexOf('software'));// 4
    let array2 =[5, 4, 65, 34, 798, 54, 90];
    console.log(array2.indexOf(798));// 4
    ```
    - `indexOf()` this is used to find the index of the element and if the element is not there it will return -1

6. `lastIndexOf`
    - parametr: element(last number) to be located in the array
    - return: the last index of element
    - example-
    ```js
    const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
    console.log(animals.lastIndexOf('Dodo'));// 3
    console.log(animals.lastIndexOf('Tiger'));// 1
    console.log(animals.lastIndexOf('software'));//-1
    ```
    - `lastIndexOf()` this is used to find the last index of the element if element is more than once and if the element is not there it will return -1

7. `includes`
    - parametr: element to find in the array
    - return: true or false
    - example-
    ```js
    console.log(animals.includes('Dodo'));//true
    console.log(animals.includes('software'));// false
    console.log(animals.includes('peng'));//false
    ```
    - `includes()` this is used to find if the element is present or not 

8. `reverse`
    - parametr:  array to be reversed
    - return: reverse of an array
    - example-
    ```js
    console.log(animals.reverse());//['Dodo', 'Penguin', 'Tiger', 'Dodo']
    console.log(array1.reverse());// ['development', 'software', 'altcampus', 'study', 'grover', 'somanshu']
    console.log(array2.reverse());//[98, 90, 54, 798, 34, 65, 4, 5]
    ```
    - `reverse()`this is used to reverse the array ie the element at index 0 will be the last now and viceversa 
 
9. `every`
    - parametr:  function to test
    - return: true or false
    - example-
    ```js
    const isBelow1000 = (currentValue) => currentValue < 1000;
    console.log(array2.every(isBelow1000));//true
    const isBelow500 = (currentValue) => currentValue < 500;
    console.log(array2.every(isBelow500));// false
    const isbig2 = (currentValue) => currentValue > 2;
    console.log(array2.every(isbig2));//true
    ```
    - `every()`this is used to test all elements in array pass with the function/method or condition or not

10. `shift`
    - parametr:  
    - return: the first removed element
    - example-
    ```js
    array2 =[98, 90, 54, 798, 34, 65, 4, 5];
    console.log(array2.shift());//98
    array1 = ['software', 'altcampus', 'study', 'grover', 'somanshu']
    console.log(array1.shift());// development
    animals = ['Dodo', 'Penguin', 'Tiger', 'Dodo']
    console.log(animals.shift());//Dodo
    ```
    - `shift()`this is used to remove the first element of the array and return it

11. `splice`
    - parametr:  start-count, delete-count, elements
    - return: an array with replaced element
    - example-
    ```js
    console.log(animals.splice(2, 1, "dog"));//['Dodo'] 
    //animals = ['Penguin', 'Tiger', 'dog']
    console.log(array2.splice(3, 2, "splice"));//[34, 65]
    //array2 = [90, 54, 798, 'splice', 4, 5]
    console.log(array1.splice(1, 1, "replaced"));// ['altcampus']
    //array1 = 'software', 'replaced', 'study', 'grover', 'somanshu']
    ```
    - `splice()`this is used to replaceor add the elements in an array with the help of start count and delete count

12. `find`

    - parametr:  callback-fn, element, index, array
    - return: first-element or undefined
    - example-
    ```js
    let array2 =  [90, 54, 798, 'splice', 4, 5]
    const isBelow1000 = (currentValue) => currentValue < 1000;
    console.log(array2.find(isBelow1000));//90
    const isBelow500 = (currentValue) => currentValue > 500;
    console.log(array2.find(isBelow500));//798
    const isbig2 = (currentValue) => currentValue > 'spli'; console.log(array2.every(isbig2));//false
    ```
    - `find()`this is used to find the firstelement in array using testing callback function

13. `unshift`
    - parametr: element
    - return: new array with element
    - example-
    ```js
    let array2 =  [90, 54, 798, 'splice', 4, 5]
   console.log(array2.unshift(1000));//[1000, 90, 54, 798, 'splice', 4, 5]
    console.log(array2.unshift(10));//[10, 1000, 90, 54, 798, 'splice', 4, 5]
    console.log(array2.unshift('1hg0'));// ['1hg0', 10, 1000, 90, 54, 798, 'splice', 4, 5]
    ```
    - `unshift()`this is used to add 1 or more element to the starting of the array

14. `findIndex`
    - parametr:  callback-fn, element, index, array
    - return: index of first-element or undefined
    - example-
    ```js
    let array2 =  ['1hg0', 10, 1000, 90, 54, 798, 'splice', 4, 5]
    const isBelow1000 = (currentValue) => currentValue < 1000;
    console.log(array2.findIndex(isBelow1000));//1
    const isabove900 = (currentValue) => currentValue > 900;
    console.log(array2.findIndex(isabove900));//2
    const isbig2 = (currentValue) => currentValue > 'spli'; 
    console.log(array2.findIndex(isbig2));//6
    ```
    - `findindex()`this is used to find index of the firstelement in array using testing callback function

15. `filter`
    - parametr:  callback-fn, element, index, array
    - return: a new array with elements that passed the test
    - example-
    ```js
    let array2 =  ['1hg0', 10, 1000, 90, 54, 798, 'splice', 4, 5]
    const isBelow1000 = (currentValue) => currentValue < 1000;
    console.log(array2.filter(isBelow1000));//[10, 90, 54, 798, 4, 5]
    const isabove900 = (currentValue) => currentValue > 900;
    console.log(array2.filter(isabove900));//[1000]
    const isbig2 = (currentValue) => currentValue > 'spli'; 
    console.log(array2.filter(isbig2));//['splice']
    ```
    - `filter()`this is used to create a new array with the filtered elements that is with those who passed the test

16. `flat`
    - parametr: a number(of layer to be flattened) like 1 or 2 or 5
    - return: a new array with subarray concatenated to the first and showed in 1layer
    - example-
    ```js
    let array1 = ['somanshu', ['grover', 'study', ['altcampus']]];
    console.log(array1.flat(3));//['somanshu', 'grover', 'study', 'altcampus']
    let array2 = [5, 4 ,[65, [34, 798, [54,90]]]]; 
    console.log(array2.flat(4));//[5, 4, 65, 34, 798, 54, 90]
    console.log(array1.flat(10));//  ['somanshu', 'grover', 'study', 'altcampus']
    ```
    - `flat()` this is used to flat the array ie to make the array in one layer rather than showing up in different layers in itself


17. `forEach`
    - parametr:  callback-fn, element, index, array
    - return: undefined
    - example-
    ```js
    let array2 =  ['1hg0', 10, 1000, 90, 54, 798, 'splice', 4, 5]
    const isBelow1000 = (currentValue) => currentValue < 1000;
    console.log(array2.forEach(isBelow1000));//undefined
    const isabove900 = (currentValue) => currentValue > 900;
    console.log(array2.forEach(isabove900));//undefined
    const isbig2 = (currentValue) => currentValue > 'spli'; 
    console.log(array2.forEach(isbig2));//undefined
    ```
    - `forEach()` this is used to test a function for each element

18. `map`
    - parametr:  callback-fn, element, index, array
    - return: a new array with the resulted elements
    - example-
    ```js
    array2 = [1000, 90, 54, 798];
    let mul = (num) => (num * 2);
    console.log(array2.map(mul));// [2000, 180, 108, 1596]
    let add = (num) => (num + 2);
    console.log(array1.map(add));//['software2', 'replaced2', 'study2', 'grover2', 'somanshu2']
    console.log(animals.map(add));//['Penguin2', 'Tiger2', 'dog2']
    ```
    - `map()` this is used to create a new array with the result of function

19. `pop`
    - parametr:  
    - return: the removed last element
    - example-
    ```js
    array2 = [1000, 90, 54, 798];
    array1 =  ['software', 'replaced', 'study', 'grover', 'somanshu'];
    animals = ['Penguin', 'Tiger', 'dog'];
    console.log(array2.pop());// 798
    console.log(array1.pop());//somanshu
    console.log(animals.pop());//dog
    ```
    - `pop()` this is used to remove the last element of the array

20. `reduce`
    - parametr:  callback fn, initial value
    - return: the sum of all the elements in an array
    - example-
    ```js
    array2 = [1000, 90, 54, 798];
    let initialvalue = 0;
    let sumwithinitial = array2.reduce((previousvalue, currentvalue) => previousvalue + currentvalue, initialvalue);
    console.log(sumwithinitial);//1942
   
    ```
    - `reduce()` this is used to return the sum of all elements in an array

21. `slice`
    - parametr:  start, end
    - return: A new array containing the extracted elements.
    - example-
    ```js
    array2 = [1000, 90, 54, 798];
    array2.slice(1,3);//[90, 54]
    array2.slice(1);//[90, 54, 798]
    array2.slice(0, 2);// [1000, 90]   
    ```
    - `slice()` this is used to return the copy of array from and to the index passed to it

22. `some`
     - parametr:  callback-fn, element, index, array
    - return: true(if atleast 1 value passes the test) or false
    - example-
    ```js
    array2 = [1000, 90, 54, 798];
   let num = (num) => (num % 2 == 0);
   array2.some(num);//true
    let num = (num) => (num % 5 == 0);
    array2.some(num);//true
    let num = (num) => (num % 11 == 0);
    array2.some(num);//false
    ```
    - `some()` this is used to test if atleast 1 element passes the test or not

