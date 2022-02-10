// 2. Create a function to convert decimal string to decimal value

/**
 * Step1 - Create a function with an input
 * Step2 - Then convert to a float value which should take upto 2 decimals
 * Step3 - Check whether the input is falsy value
 * Step 3.1 - If the input is falsy  and NaN retrun 0
 */

function convertToDecimal(input) {
  const result = parseFloat(input).toFixed(2);
  if (isNaN(result)) {
    return 0;
  }
  return result;
}
console.log(convertToDecimal("2.889"));
