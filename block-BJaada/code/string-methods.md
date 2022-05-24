Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
   - Parameter: string data type
   - Return: uppercase of the string
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toUpperCase(); //'ARYA STARK'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toUpperCase() // 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG'
     let houseName = 'Starks';
     houseName.toUpperCase(); //'STARKS'
     ```
   - `toUpperCase` returns the value of the string converted to upper case  

3. `toLowerCase`
   - Parameter: string data type
   - Return: lowercase of the string
   - Example:
     ```js
     let name = 'ARYA STARK';
     name.toUpperCase(); //'arya stark'
     let sentance = 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG';
     sentance.toUpperCase() // ' a quick brown fox jumped over a lazy dog'
     let houseName = 'STARKS';
     houseName.toUpperCase(); //'starks'
     ```
   - `toLowerCase` returns the value of the string converted to lower case  

4. `trim`

    - Parameter: string data type
   - Return: string without whitespace 
   - Example:
     ```js
     let name = '   ARYA STARK           ';
     name.trim(); // 'ARYA STARK'
     let sentance = '                A QUICK BROWN FOX JUMPED OVER A LAZY DOG   ';
     sentance.trim() // 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG'
     let houseName = '    STARKS                   ';
     houseName.trim(); //'STARKS'
     ```
   - The `trim()` method removes whitespace from both ends of a string and returns a new string, without modifying the original string.


5. `trimEnd`
  - Parameter: string data type
   - Return: string without whitespace from the end
   - Example:
     ```js
     let name = '   ARYA STARK           ';
     name.trim(); // '    ARYA STARK'
     let sentance = '                A QUICK BROWN FOX JUMPED OVER A LAZY DOG         ';
     sentance.trim() // 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG'
     let houseName = '    STARKS                   ';
     houseName.trim(); //'     STARKS'
     ```
   - The `trim()` method removes whitespace from ends of a string and returns a new string, without modifying the original string.

6. `trimStart`
    - Parameter: string data type
   - Return: string without whitespace from the start
   - Example:
     ```js
     let name = '   ARYA STARK           ';
     name.trim(); // 'ARYA STARK            '
     let sentance = '                A QUICK BROWN FOX JUMPED OVER A LAZY DOG     ';
     sentance.trim() // 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG         '
     let houseName = '    STARKS                   ';
     houseName.trim(); //'STARKS                   '
     ```
   - The `trim()` method removes whitespace from start of a string and returns a new string, without modifying the original string.

7. `concat`
   - Parameter: One or more strings to concatenate to str. (string data type)
   - Return: A new string containing the combined text of the strings provided.
   - Example:
     ```js
     let str1 = "somanshu";
     let str2 = "grover";
     str1.concat("  ", str2); // 'somanshu  grover'
     str1.concat(" 56 ", str2); // 'somanshu 56 grover'
     str1.concat(" eeeeee ", str2); // 'somanshu eeeeee grover'
     ```
   - The `concat()` method concatenates the string arguments to the calling string and returns a new string.



8. `endsWith`
    - Parameter:The characters to be searched for at the end of str.(string data type)
    - length: If provided, it is used as the length of str. Defaults to str.length.
   - Return: true if the given characters are found at the end of the string; otherwise, false.
   - Example:
     ```js
     let str1 = "somanshu";
     let str2 = "grover";
     let str3 = str1 + str2 // 'somanshugrover'
     str3.endsWith(`r`); // true
     str3.endsWith(`R`); // false
     str3.endsWith(`o`, 11); // true
     ```
   - The `endsWith()` method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

9. `includes`
    - Parameter:A string to be searched for within str.(string data type)
    - position: The position within the string at which to begin searching for searchString. (Defaults to 0.)
   - Return: true if the search string is found anywhere within the given string; otherwise, false if not.
   - Example:
     ```js
     let sentance = 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG';
     sentance.includes(`fox`) //false
    sentance.includes(`FOX`) // true
    sentance.includes(`lazy DOG`) // false
     ```
   - The `includes()` method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

10. `indexOf`
    - Parameter:Substring to search for. (string data type)
    - position: The method returns the index of the first occurrence of the specified substring at a position greater than or equal to position, which defaults to 0. 
   - Return: The index of the first occurrence of searchString found, or -1 if not found.
   - Example:
     ```js
     let sentance = 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG';
     sentance.indexOf(`DOG`); // 37
    sentance.indexOf(`dog`); // -1
    sentance.indexOf(`BROWN`); // 8
     ```
   - The `indexOf()` method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring. Given a second argument: a number, the method returns the first occurrence of the specified substring at an index greater than or equal to the specified number.


11. `lastIndexOf`
   
    - Parameter:Substring to search for. (string data type)
    - position: The method returns the index of the first occurrence of the specified substring at a position greater than or equal to position, which defaults to 0. 
   - Return: The index of the first occurrence of searchString found, or -1 if not found.
   - Example:
     ```js
     let sentance = 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG';
     sentance.lastIndexOf(`n`); //-1
    sentance.lastIndexOf(`O`); //38
    sentance.lastIndexOf(`A`); // 33
     ```
   - The `lastIndexOf()` method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the last occurrence of the specified substring. Given a second argument: a number, the method returns the last occurrence of the specified substring at an index less than or equal to the specified number.

12. `padEnd`
     - Parameter:
     targetLength-
     The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.
     padString Optional
     The string to pad the current str with. If padString is too long to stay within targetLength, it will be truncated: for left-to-right languages the left-most part and for right-to-left languages the right-most will be applied. The default value for this parameter is " " (U+0020).
   - Return: A String of the specified targetLength with the padString applied at the end of the current str.


   - Example:
     ```js
     let name = `Somanshu Grover`;
     name.padEnd(10); // 'Somanshu Grover'
     name.padEnd(19); //'Somanshu Grover    '
     name.padEnd(22, `.`); //'Somanshu Grover.......'
     name.padEnd(22, `/`); //'Somanshu Grover///////'
     name.padEnd(22, `g`); //'Somanshu Groverggggggg'
     ```
   - The `padEnd()` method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

13. `padStart`
     - Parameter:
     targetLength-
     The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.
     padString Optional
     The string to pad the current str with. If padString is too long to stay within targetLength, it will be truncated: for left-to-right languages the left-most part and for right-to-left languages the right-most will be applied. The default value for this parameter is " " (U+0020).
   - Return: A String of the specified targetLength with the padString applied at the end of the current str.


   - Example:
     ```js
     let name = `Somanshu Grover`;
     name.padStart(10); // 'Somanshu Grover'
     name.padStart(19);//'    Somanshu Grover'
     name.padStart(22, `.`);//'.......Somanshu Grover'
     name.padStart(22, `/`);//'///////Somanshu Grover'
     name.padStart(22, `g`);//'gggggggSomanshu Grover'
     ```
   - The `padStart()` method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.


14. `repeat`
     - Parameter:An integer between 0 and +Infinity, indicating the number of times to repeat the string. (number data type)
   - Return:A new string containing the specified number of copies of the given string.
   - Example:
     ```js
     let name = "Somanshu Grover";
    name.repeat(2); //'Somanshu GroverSomanshu Grover'
    name.repeat(5); // 'Somanshu GroverSomanshu GroverSomanshu GroverSomanshu GroverSomanshu Grover'
    name.repeat(0); //''
     ```
   - The `repeat()` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

15. `replace`
    - Parameter:A string that is to be replaced by newSubstr. It is treated as a literal string and is not interpreted as a regular expression. Only the first occurrence will be replaced.
   - Return:A new string, with some or all matches of a pattern replaced by a replacement.
   - Example:
     ```js
     sentance.replace("DOG", "monkey"); // 'A QUICK BROWN FOX JUMPED OVER A LAZY monkey'
    sentance.replace("FOX", "elephant"); //'A QUICK BROWN elephant JUMPED OVER A LAZY DOG'
    sentance.replace("FOX", "human"); //'A QUICK BROWN human JUMPED OVER A LAZY DOG'
    sentance.replaceAll("O", "human"); //'A QUICK BRhumanWN FhumanX JUMPED humanVER A LAZY DhumanG'
     ```
   - The `replace()` method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced.

16. `slice`
     - Parameter: a string which is extracted from that number paramter ie number
   - Return:A new string containing the extracted section of the string.
   - Example:
     ```js
     sentance.slice(23); //'D OVER A LAZY DOG'
    sentance.slice(35);//'Y DOG'
    sentance.slice(15);//'OX JUMPED OVER A LAZY DOG'
     ```
   -The `slice()` method extracts a section of a string and returns it as a new string, without modifying the original string.

17. `split`
    - Parameter: a string which is to be converted into array number and string
   - Return:An Array of strings, split at each point where the separator occurs in the given string.
   - Example:
     ```js
     name.split(" ");//(2) ['Somanshu', 'Grover']
    name.split("", 10);//(10) ['S', 'o', 'm', 'a', 'n', 's', 'h', 'u', ' ', 'G']
    name.split("u");//(2) ['Somansh', ' Grover']
     ```
   - The `split()` method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

18. `substring`

    - Parameter: indexStart -     The index of the first character to include in the returned substring.
    indexEnd -The index of the first character to include in the returned substring.
   - Return:A new string containing the specified part of the given string.
   - Example:
     ```js
     name.substring(4);//'nshu Grover'
    name.substring(1);//'omanshu Grover'
    name.substring(1, 9);//'omanshu '
     ```
   - The `substring()` method returns the part of the string between the start and end indexes, or to the end of the string.



