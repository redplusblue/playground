// The Odin Project
// https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// Question 1: Sum all numbers
function sumRange(n) {
    if (n == 1) {
        return 1;
    }
    else {
        return n + sumRange(n-1)
    }
}
// Test: 
// sumRange(3) == 6

// Question 2: Power function
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    }
    else {
        return base * power(base, (exponent - 1));
    }
}
// Test: 
// power(2, 4) == 16
// power(2, 3) == 8
// power(2, 2) == 4
// power(2, 1) == 2
// power(2, 0) == 1


// Question 3: Calculate factorial
function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}
// Test: 
// factorial(5) == 120

// Question 4: Check all values in an array
function all(array, callback, index = 0) {
    if (index > (array.length - 1)) {
        return true;
    }
    else {
        if (callback(array[index])) {
            index += 1;
            return all(array, callback, index);
        }
        else {
            return false;
        }
    }
}
// Test: 
// all([1,2,8], function(num) { return num < 7; }) == false

// Question 5: Product of an array
function productOfArray(array, index = 0) {
    if (index > (array.length - 1)) {
        return 1;
    }
    else {
        index += 1
        return array[index - 1] * productOfArray(array, index);
    }
}
// Test:
// productOfArray([1,2,3]) == 6
// productOfArray([1,2,3, 10]) == 60

// Question 6: Search JS Object
function contains(nestedObject, value) {
    for (let key in nestedObject) {
        if (nestedObject[key] == value) {
            return true;
        }
        else if (typeof nestedObject[key] == 'object') {
            return contains(nestedObject[key], value);
        }
    }
    return false;
}
// Test:
// contains({a: {b: {c: 3}}}, 3) == true
// let nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }
// contains(nestedObject, 44) == true
// contains(nestedObject, 'foo') == false

// Question 7: Parse a multi-dimensional array
function totalIntegers(array) {
    let total = 0
    for(let value of array) {
        // If value is an array
        if (Array.isArray(value)) {
            total += totalIntegers(value);
        } else if (typeof value == 'number') {
            total += 1;
        }
    }
    return total;
}
// Test:
// totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]) == 7

// Question 8: Write a function that sums squares of numbers in list that may contain more lists
function sumSquares(array) {
    let total = 0;
    for (let value of array) {
        // If the value is an array
        if (Array.isArray(value)) {
            total += sumSquares(value);
        }
        else if (typeof(value) == 'number') {
            total += (value * value)
        }
    }
    return total; 
}
// Test: 
// sumSquares([1, 2, 3]) == 14
// sumSquares([[1,2], 3]) == 14
// sumSquares([[[[[[[[[1]]]]]]]]]) == 1
// sumSquares([10,[[10],10],[10]]) == 400

// Question 9: Return an array containing repetitions of the number argument
function replicate(times, number) {
    if (times <= 0) {
        return [];
    } else {
        return [number].concat(replicate(times-1, number));
    }
}
// Test:
// replicate(3, 5) == [5, 5, 5]
// replicate(1, 69) == [69]
// replicate(-2, 6) == []