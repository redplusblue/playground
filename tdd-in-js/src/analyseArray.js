// function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
function analyseArray(array) {
  const average = array.reduce((a, b) => a + b, 0) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;
  return { average, min, max, length };
}

module.exports = analyseArray;
