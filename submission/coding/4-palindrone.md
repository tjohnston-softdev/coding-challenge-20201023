### Coding Question 4 - Check whether a given string is a palindrome

**Input:** tacocat  
**Output:** true

```javascript
/*
  Main function
  Only alphanumeric characters affect palindrome.
*/

function PalindromeTwo(str) { 
  var removeRegex = /[^A-Za-z0-9]/gi;
  var preparedOriginal = "";
  
  var preparedReverse = "";
  var palindromeRes = false;

  
  // Prepare input string by removing casing and unaffected characters.
  preparedOriginal = str.replace(removeRegex, "");
  preparedOriginal = preparedOriginal.toLowerCase();
  
  // Reverses input string.
  preparedReverse = getReverse(preparedOriginal);

  
  if (preparedOriginal === preparedReverse)
  {
    // Reverse matches original.
	palindromeRes = true;
  }

  return palindromeRes;
}


// Reverses string
function getReverse(str)
{
  var charList = str.split("");
  var reverseRes = "";

  charList.reverse();
  reverseRes = charList.join("");
  return reverseRes;
}


// Example output
var outputValue = PalindromeTwo("tacocat");
console.log(outputValue);
```

---

**Previous:** [Question 3](./3-time_string.md)  
**Next:** [Question 5](./5-arith_geo_seq.md)

[Coding Questions](./readme.md)  
[Return to Index](../../readme.md)
