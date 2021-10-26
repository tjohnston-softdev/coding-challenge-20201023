function TimeConvert(num) { 

  var hoursRounded = Math.floor(num / 60);
  var remainingMinutes = num - (hoursRounded * 60);
  var resultString = hoursRounded + ":" + remainingMinutes;
  return resultString;

}
   
// Example output
var outputValue = TimeConvert(456);
console.log(outputValue);