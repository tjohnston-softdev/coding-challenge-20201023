### Coding Question 6 - Get longest substring containing a given number of unique characters

**Input:** "4thequickbrownfoxjumpsoverthelazydog"  
**Output:** "ownfo"

```javascript
function KUniqueCharacters(str) { 

  var firstChar = str.charAt(0);
  var k = Number(firstChar);

  // Main loop variables
  var startIndex = 1;
  var searchIndex = null;
  var currentEnd = -1;
  var currentSubstring = "";

  // Sub loop variables
  var currentCharacter = "";
  var currentUnique = [];
  var currentUsed = false;
  var canContinue = false;

  // Result
  var longestSubstring = "";


  for (startIndex = 1; startIndex < str.length; startIndex = startIndex + 1)
  {
    searchIndex = startIndex;
    currentEnd = -1;
    currentSubstring = "";

    currentCharacter = "";
    currentUnique = [];
    currentUsed = false;
    canContinue = true;

    while (searchIndex >= startIndex && searchIndex < str.length && canContinue === true)
    {
      currentCharacter = str.charAt(searchIndex);
      currentUsed = currentUnique.includes(currentCharacter);

      if (currentUsed !== true && currentUnique.length === k)
      {
        canContinue = false;
      }
      else if (currentUsed !== true)
      {
        currentUnique.push(currentCharacter);
      }

      searchIndex = searchIndex + 1;
    }

    if (currentUnique.length === k && searchIndex === str.length)
    {
      currentSubstring = str.substring(startIndex);
    }
    else if (currentUnique.length === k)
    {
      currentEnd = searchIndex - 1;
      currentSubstring = str.substring(startIndex, currentEnd);
    }

    if (currentSubstring.length > longestSubstring.length)
    {
      longestSubstring = currentSubstring;
    }

  }


  return longestSubstring;
}
   
// keep this function call here 
console.log(KUniqueCharacters(readline()));
```

---

**Previous:** [Question 5](./5-arith_geo_seq.md)  
**Next:**

[Coding Questions](./readme.md)  
[Return to Index](../../readme.md)