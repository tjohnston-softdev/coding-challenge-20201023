### Coding Question 1 - Reverse a given string

**Input:** quick-brown-fox  
**Output:** xof-nworb-kciuq

```javascript
function FirstReverse(str) { 


  /*
    There are two ways to do this.
    In-place by swapping individual array elements,
    or simply splitting and reversing.
    In the interest of time constraints,
    I opted for the simpler method.
  */

  
  var charList = str.split("");
  var stringRes = "";
  
  charList.reverse();
  stringRes = charList.join("");
  return stringRes;

}

// Example output
var outputValue = FirstReverse("quick-brown-fox");
console.log(outputValue);
```

---

**Previous:**  
**Next:** [Question 2](./2-capitalize_words.md)

[Coding Questions](./readme.md)  
[Return to Index](../../readme.md)

