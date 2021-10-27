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
  
  // Outer loop for substring start character index.
  for (startIndex = 1; startIndex < str.length; startIndex = startIndex + 1)
  {
    
	// Begin substring.
	searchIndex = startIndex;
    currentEnd = -1;
    currentSubstring = "";

    currentCharacter = "";
    currentUnique = [];
    currentUsed = false;
    canContinue = true;

    
	// Inner loop reading substring characters until there is 'k' unique characters.
	while (searchIndex >= startIndex && searchIndex < str.length && canContinue === true)
    {
      // Read current character and check if used.
	  currentCharacter = str.charAt(searchIndex);
      currentUsed = currentUnique.includes(currentCharacter);

      
	  if (currentUsed !== true && currentUnique.length === k)
      {
        // End loop, unique character limit reached.
		canContinue = false;
      }
      else if (currentUsed !== true)
      {
        // Add unique character.
		currentUnique.push(currentCharacter);
      }

      // Continue search.
	  searchIndex = searchIndex + 1;
    }

    
	// Read current substring.
	if (currentUnique.length === k && searchIndex === str.length)
    {
      // End of string reached, read from start onwards.
	  currentSubstring = str.substring(startIndex);
    }
    else if (currentUnique.length === k)
    {
      // Read substring from boundaries.
	  currentEnd = searchIndex - 1;
      currentSubstring = str.substring(startIndex, currentEnd);
    }

    
	// Update longest substring.
	if (currentSubstring.length > longestSubstring.length)
    {
      longestSubstring = currentSubstring;
    }
	
	
  }


  return longestSubstring;
}
   
// Example output
var outputValue = KUniqueCharacters("4thequickbrownfoxjumpsoverthelazydog");
console.log(outputValue);
```

---

**Previous:** [Question 5](./5-arith_geo_seq.md)  
**Next:**

[Coding Questions](./readme.md)  
[Return to Index](../../readme.md)