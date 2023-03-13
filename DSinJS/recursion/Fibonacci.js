/* Helper function for recursive fibonacci */
function fibonacci(num) {
  if (num <= 0) {
    return;
  } else if (num == 1) {
    return 0;
  } else if (num == 2 || num == 3) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

/* Iterative and recursive fibonacci */
function fibIter(num) {
  let result = [0, 1];
  for (let i = 2; i <= num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

function fibRec(num) {
  result = [];
  for (let i = 0; i < num; i++) {
    result.push(fibonacci(i));
  }
  return result;
}

console.log("Fibs(Iterative)" + fibIter(8));
console.log("Fibs(Recursive)" + fibRec(8));
