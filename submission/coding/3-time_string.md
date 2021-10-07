### Coding Question 3 - Convert given number of minutes into a time string with hours and minutes

**Input:** 456  
**Output:** 7:36

```javascript
function TimeConvert(num) { 

  var hoursBase = num / 60;
  var hoursRounded = Math.floor(hoursBase);
  var remainingMinutes = num - (hoursRounded * 60);
  var resultString = hoursRounded + ":" + remainingMinutes;
  return resultString;

}
   
// keep this function call here 
console.log(TimeConvert(readline()));
```

---

**Previous:**  [Question 2](./2-capitalize_words.md)  
**Next:** [Question 4](./4-palindrone.md)

[Contents](./readme.md)  
[Return to Index](../../readme.md)
