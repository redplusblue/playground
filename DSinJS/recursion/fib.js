function fibonacci(num) {
    if (num <= 0) {
        return
    }
    else if (num == 1) {
        return 0
    }
    else if (num == 2 || num == 3) {
        return 1    
    }
    else {
        return fibonacci(num-1) + fibonacci(num-2)
    }
}

function fibs(num) {
    result = []
    for(let i = 1; i <= num; i++) {
        result.push(fibonacci(i))
    }
    return result
}

//function fibsRec(num){

//}

console.log("Fibs(Iterative)" + fibs(8))
