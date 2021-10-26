function LetterCapitalize(str) { 

  var wordList = str.split(" ");
  
  var wordIndex = 0;
  var currentOriginalWord = "";
  var currentFirstChar = "";
  var currentOtherChars = "";
  
  var stringRes = "";
  
  // Loop through unput string words.
  for (wordIndex = 0; wordIndex < wordList.length; wordIndex = wordIndex + 1)
  {
    // Read current word.
	currentOriginalWord = wordList[wordIndex];
    currentFirstChar = currentOriginalWord.charAt(0);
    currentOtherChars = currentOriginalWord.substring(1);

    // Case letters accordingly.
	currentFirstChar = currentFirstChar.toUpperCase();
    currentOtherChars = currentOtherChars.toLowerCase();
	
	// Update word.
    wordList[wordIndex] = currentFirstChar + currentOtherChars;
  }
  
  // Combine individual words back into string.
  stringRes = wordList.join(" ");
  return stringRes; 

}
   
// Example output
var outputValue = LetterCapitalize("the quick brown fox jumps over the lazy dog.");
console.log(outputValue);
