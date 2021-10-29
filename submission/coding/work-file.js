function ArithGeoII(arr) { 

  var arithmeticUsed = testArithmetic(arr);
  var geometricUsed = testGeometric(arr);
  var result = -1;

  if (arithmeticUsed === true)
  {
    result = "Arithmetic";
  }
  else if (geometricUsed === true)
  {
    result = "Geometric";
  }
  else
  {
    result = -1;
  }

  return result;
}


function testArithmetic(numberList)
{
  var firstNumber = Math.abs(numberList[0]);
  var secondNumber = Math.abs(numberList[1]);
  var targetDifference = Math.abs(secondNumber - firstNumber);

  var loopIndex = 2;
  var currentNumber = -1;
  var previousNumber = -1;
  var currentDifference = -1;

  var sequenceValid = true;

  while (loopIndex >= 2 && loopIndex < numberList.length && sequenceValid === true)
  {
    currentNumber = Math.abs(numberList[loopIndex]);
    previousNumber = Math.abs(numberList[loopIndex - 1]);
    currentDifference = Math.abs(currentNumber - previousNumber);

    if (currentDifference !== targetDifference)
    {
      sequenceValid = false;
    }
	
	loopIndex = loopIndex + 1;
  }

  return sequenceValid;
}



function testGeometric(numberList)
{
	var firstNumber = Math.abs(numberList[0]);
	var secondNumber = Math.abs(numberList[1]);
	var targetProduct = Math.abs(secondNumber / firstNumber);
	
	var loopIndex = 2;
	var currentNumber = -1;
	var previousNumber = -1;
	var currentDifference = -1;
	
	var sequenceValid = true;
	
	while (loopIndex >= 2 && loopIndex < numberList.length && sequenceValid === true)
	{
		currentNumber = Math.abs(numberList[loopIndex]);
		previousNumber = Math.abs(numberList[loopIndex - 1]);
		currentDifference = Math.abs(currentNumber / previousNumber);
		
		if (currentDifference !== targetProduct)
		{
			sequenceValid = false;
		}
		
		loopIndex = loopIndex + 1;
	}
	
	return sequenceValid;
}


// Example output, both types.

var inputArith = [5, 7, 9, 11, 13, 15, 17];
var inputGeo = [2, 6, 18, 54, 162, 486, 1458];

var outputArith = ArithGeoII(inputArith);
var outputGeo = ArithGeoII(inputGeo);

console.log(outputArith, outputGeo);
