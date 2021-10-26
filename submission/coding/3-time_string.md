### Coding Question 3 - Convert given number of minutes into a time string with hours and minutes

**Input:** 456  
**Output:** 7:36

```javascript
function TimeConvert(num) { 

  var hoursRounded = Math.floor(num / 60);
  var remainingMinutes = num - (hoursRounded * 60);
  var resultString = hoursRounded + ":" + remainingMinutes;
  return resultString;

}
   
// Example output
var outputValue = TimeConvert(456);
console.log(outputValue);
```

---

**Previous:** [Question 2](./2-capitalize_words.md)  
**Next:** [Question 4](./4-palindrone.md)

[Coding Questions](./readme.md)  
[Return to Index](../../readme.md)
