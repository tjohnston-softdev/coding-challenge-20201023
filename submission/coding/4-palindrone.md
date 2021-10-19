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
  var preparedOriginal = str.replace(removeRegex, "");
  
  var preparedReverse = "";
  var palindromeRes = false;

  preparedOriginal = preparedOriginal.toLowerCase();
  preparedReverse = getReverse(preparedOriginal);

  if (preparedOriginal === preparedReverse)
  {
    palindromeRes = true;
  }

  return palindromeRes;
}


// Reverses string
function getReverse(s)
{
  var cList = s.split("");
  var reverseRes = "";

  cList.reverse();
  reverseRes = cList.join("");
  return reverseRes;
}
   
// keep this function call here 
console.log(PalindromeTwo(readline()));
```

---

**Previous:** [Question 3](./3-time_string.md)  
**Next:** [Question 5](./5-arith_geo_seq.md)

[Coding Questions](./readme.md)  
[Return to Index](../../readme.md)
