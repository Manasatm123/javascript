//write a function to find the sum of elements of a numerical array
{
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let arr = [10, 20, 30, 40, 50];
console.log("array :",arr)
console.log( "sum of elements in array:",sumOfArray(arr)); 
}

console.log("\n\n\n\n\n\n")

// write a function to find the average of element of an array  
{
function averageOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    return average;
}

let arr = [10, 20, 30, 40, 50];
console.log("array :",arr)
console.log("average of element :",averageOfArray(arr)); 
}

console.log("\n\n\n\n\n\n")

// write a function to find the maximum and minimum element of an array 

{
    function findMinMax(arr) {
        let min = arr[0];
        let max = arr[0];
    
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    
        return { min, max };
    }
    
    let arr = [10, 20, 30, 40, 50];
    let result = findMinMax(arr);
    console.log(`Minimum: ${result.min}, Maximum: ${result.max}`);
}

console.log("\n\n\n\n\n\n")

// write a function to convert the negative numbers of an array to positive numbers

{
function convertNegativesToPositives(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = Math.abs(arr[i]);
        }
    }
    return arr;
}

let arr = [-10, 20, -30, 40, -50];
console.log("array :",arr)
let result = convertNegativesToPositives(arr);
console.log("converted numbers :",result); 
}


console.log("\n\n\n\n\n\n")

// write a function to find out the sum of odd numbers of an array

{
    function sumOfOddNumbers(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                sum += arr[i];
            }
        }
        return sum;
    }
    
    let arr = [1,2 ,3,4 ,5 ];
    console.log("array :",arr)
    let result = sumOfOddNumbers(arr);
    console.log("sum of odd numbers in array : ",result);
    
}

console.log("\n\n\n\n\n\n")

// write a function to calculate the sum of even numbers of an array

{
    function sumOfEvenNumbers(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                sum += arr[i];
            }
        }
        return sum;
    }
    
    let arr = [10, 21, 30, 41, 50];
    console.log("array :",arr)
    let result = sumOfEvenNumbers(arr);
    console.log("sum of even numbers in array : ",result); 
    
}

console.log("\n\n\n\n\n\n")

// write a function to find the factorial of an array using recursion
{
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function factorialOfArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(factorial(arr[i]));
    }
    return result;
}

let arr = [3, 4, 5];
console.log("array :",arr)
let result = factorialOfArray(arr);
console.log("factorial of array : ",result); 
}





