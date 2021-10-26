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
   
var outputValue = FirstReverse("quick-brown-fox");
console.log(outputValue);
