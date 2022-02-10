function convertToDecimal(input) {
  const result = parseFloat(input).toFixed(2);
  if (isNaN(result)) {
    return 0;
  }
  return result;
}
console.log(convertToDecimal("2.889"));
