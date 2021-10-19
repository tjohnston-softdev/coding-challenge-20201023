### Coding Question 2 - Capitalize the first letter of each word in a given string

**Input:** the quick brown fox jumps over the lazy dog.  
**Output:** The Quick Brown Fox Jumps Over The Lazy Dog.

```javascript
function LetterCapitalize(str) { 

  var wordList = str.split(" ");
  
  var wordIndex = 0;
  var currentOriginalWord = "";
  var currentFirstChar = "";
  var currentOtherChars = "";
  
  for (wordIndex = 0; wordIndex < wordList.length; wordIndex = wordIndex + 1)
  {
    currentOriginalWord = wordList[wordIndex];
    currentFirstChar = currentOriginalWord.charAt(0);
    currentOtherChars = currentOriginalWord.substring(1);

    currentFirstChar = currentFirstChar.toUpperCase();
    currentOtherChars = currentOtherChars.toLowerCase();

    wordList[wordIndex] = currentFirstChar + currentOtherChars;
  }

  str = wordList.join(" ");
  return str; 

}
   
// keep this function call here 
console.log(LetterCapitalize(readline()));
```

---

**Previous:** [Question 1](./1-reverse_string.md)  
**Next:** [Question 3](./3-time_string.md)

[Coding Questions](./readme.md)  
[Return to Index](../../readme.md)
