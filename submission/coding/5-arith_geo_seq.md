### Coding Question 5 - Check if a given array of numbers is a valid Arithmetic or Geometric sequence

```javascript
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
  var previousIndex = loopIndex - 1;
  var currentNumber = -1;
  var previousNumber = -1;
  var currentDifference = -1;

  var arithmeticValid = true;

  while (loopIndex >= 2 && loopIndex < numberList.length && arithmeticValid === true)
  {
    currentNumber = Math.abs(numberList[loopIndex]);
    previousNumber = Math.abs(numberList[loopIndex - 1]);
    currentDifference = Math.abs(currentNumber - previousNumber);

    if (currentDifference === targetDifference)
    {
      loopIndex = loopIndex + 1;
    }
    else
    {
      arithmeticValid = false;
    }

  }

  return arithmeticValid;
}



function testGeometric(numberList)
{
  var loopIndex = 0;
  var loopCutoff = numberList.length - 1;

  var currentNumber = -1;
  var offsetNumber = -1;

  var factorNumber = 2;
  var currentDivision = -1;
  var offsetDivision = -1;
  var currentWholeFlag = -1;
  var offsetWholeFlag = -1;
  var factorFound = false;

  var geometricValid = true;

  while (loopIndex >= 0 && loopIndex < loopCutoff && geometricValid === true)
  {
    currentNumber = Math.abs(numberList[loopIndex]);
    offsetNumber = Math.abs(numberList[loopIndex + 1]);

    factorNumber = 2;
    currentDivision = -1;
    offsetDivision = -1;
    currentWholeFlag = -1;
    offsetWholeFlag = -1;
    factorFound = -1;

    while (factorFound === -1)
    {
      currentDivision = currentNumber / factorNumber;
      offsetDivision = offsetNumber / factorNumber;
      currentWholeFlag = currentDivision % 1;
      offsetWholeFlag = offsetDivision % 1;

      if (currentWholeFlag === 0 && offsetWholeFlag === 0)
      {
        factorFound = factorNumber;
      }

      factorNumber = factorNumber + 1;
    }

    if (factorFound > 2)
    {
      loopIndex = loopIndex + 1;
    }
    else
    {
      geometricValid = false;
    }
  }

  return geometricValid;
}

   
// keep this function call here 
console.log(ArithGeoII(readline()));
```

---

**Previous:** [Question 4](./4-palindrone.md)  
**Next:** [Question 6](./6-unique_substr.md)

[Coding Questions](./readme.md)  
[Return to Index](../../readme.md)
