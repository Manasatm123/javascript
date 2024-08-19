//write a function to find the sum of elements of a numerical array
{

console.log("sum of elements of a numerical array")
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
console.log("average of element of an array")    
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
    console.log("maximum and mininum element of an array")
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
    console.log("array:",arr)
    let result = findMinMax(arr);
    console.log(`Minimum: ${result.min}, Maximum: ${result.max}`);
}

console.log("\n\n\n\n\n\n")

// write a function to convert the negative numbers of an array to positive numbers

{
    console.log("convert the negative numbers of an array to positive numbers")
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
    console.log("find out the sum of odd numbers of an array") 
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
    console.log("calculate the sum of even numbers of an array")
    function sumOfEvenNumbers(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                sum += arr[i];
            }
        }
        return sum;
    }
    
    let arr = [1, 2, 3, 4, 5];
    console.log("array :",arr)
    let result = sumOfEvenNumbers(arr);
    console.log("sum of even numbers in array : ",result); 
    
}

console.log("\n\n\n\n\n\n")

// write a function to find the factorial of an array using recursion
{
console.log(" find the factorial of an array using recursion")
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


console.log("\n\n\n\n\n\n")
//convert a string into reverse and check it is palindrome or not

str = "manasa"
let array = str.split ('');

array.reverse ();

let revstr = array.join('');
console.log(revstr)
if (str==revstr)
{
    console.log("it is a palindrome")
}else
{
     console.log("it is not a palindrome") 
}


console.log("\n\n\n\n\n\n")
//to find the  multiplication table
{
    console.log("to find the multiplication table of the number")
    function mul(n){
        for(let i=1;i<=10;i++)
            console.log(`${i} x ${n} : ` ,n*i)
    }
}
n=4
console.log("multiplication :",n)
mul(n)



//Q1
console.log("\n\n\n\n\n\n\n\n\n\n")
//Given an array of numbers, use the map method to create a new array where each number is doubled.
{
    console.log("Given an array of numbers, use the map method to create a new array where each number is doubled.");
    let arr = [2,4,6,8]
    console.log("array : ",arr);


    let MappedArray = arr.map((element)=>{
    return element*2;
});
console.log("mapped array :",MappedArray)
}


//Q2
console.log("\n\n\n\n\n\n")
//Given an array of numbers, use the filter method to create a new array containing only the even numbers.
{
    console.log("Given an array of numbers, use the filter method to create a new array containing only the even numbers.")

    let arr = [1,3,2,6,4,8,5]
    console.log("array : ",arr);


    let FilteredValue = arr.filter((element)=>{
    return element %2 ==0;
});
console.log("Filtered value :",FilteredValue)
}




//Q3
console.log("\n\n\n\n\n\n")
//.Given an array of numbers, use the reduce method to calculate the sum of all the numbers
{
    console.log(".Given an array of numbers, use the reduce method to calculate the sum of all the numbers");

    let arr = [ 2,3,4,5]
    console.log("array :",arr);

    let sum = arr.reduce ((total,element )=>{
        return total + element; 
},0);
console.log("sum :" ,sum)
}


//Q4
console.log("\n\n\n\n\n\n")
//Given an array of numbers, use the reduce method to find the maximum value in the array.
{
    console.log("Given an array of numbers, use the reduce method to find the maximum value in the array.")

     arr = [3,2,5,1,9]
     console.log("array :" ,arr);


     let MinMax = arr.reduce((Min,Max) =>{
        return Min > Max ? Min : Max;

     },arr[0]);

     console.log("Maximum value :",MinMax);
 }




//Q5
console.log("\n\n\n\n\n\n")
//.Given an array of strings, use the map method to create a new array where each string is capitalized.
{
    console.log(".Given an array of strings, use the map method to create a new array where each string is capitalized.");

    str = ["manasa"];
    console.log("string");
    console.log("string :",str);
    let mapStr = str.map((element) =>{
        
        return element.toUpperCase()
    });
    console.log("caplitaloized : ",mapStr)
}



//Q6
console.log("\n\n\n\n\n\n")
//.Given an array of words, use the filter method to create a new array containing only the words with a length greater than a specified value.
{
    console.log(".Given an array of words, use the filter method to create a new array containing only the words with a length greater than a specified value.");

    arr = ["string","array","wow"];
    console.log("array :",arr);

    let specifiedLength = 5;
    let filteredArray = arr.filter((element) =>
    {
        return element.length > specifiedLength;
    });

    console.log("new array :",filteredArray)
}






//Q7
console.log("\n\n\n\n\n\n")
//Given an array of numbers, use the map method to create a new array of strings indicating whether each number is even or odd.
{
    console.log("Given an array of numbers, use the map method to create a new array of strings indicating whether each number is even or odd.");

    let arr = [1,2,3,4];
    console.log("array :",arr);

    let mappedValues = arr.map((element) => {
        return element % 2 === 0 ? "even" : "odd";
    });
    console.log("string :",mappedValues);

}


//Q8
console.log("\n\n\n\n\n\n")
//Given an array, use the filter method to create a new array with only unique elements (remove duplicates)
{
    console.log("Given an array, use the filter method to create a new array with only unique elements (remove duplicates)");

    let arr = [2,3,4,6,2,4,7];
    console.log("array :",arr);

    let filteredArray = arr.filter((element , index) => {
        return arr.indexOf(element) === index ;
    });
    console.log ("unique element :",filteredArray)

}



//Q9
console.log("\n\n\n\n\n\n")
//Given an array of numbers, use the sort method to sort them in ascending order.
{
    console.log("Given an array of numbers, use the sort method to sort them in ascending order.");

    let arr = [4,9,6,5,3,8,2,7,1]
    console.log ("array : ",arr);

    let SortedArray = arr.sort ((a,b ) => a-b)

console.log("Sorted array ",SortedArray)
}





//Q10
console.log("\n\n\n\n\n\n")
//Given an array of objects with a name property, use the map method to create a new array containing only the names.
{
    console.log("Given an array of objects with a name property, use the map method to create a new array containing only the names")

    let obj = [
        {
            name : "manasa",
            rollno : 19

        },

        {
            name : " sunisha ",
            rollno : 21
        }
        
    ];
    console.log(" object :",obj);
    let namearray = obj.map(obj => obj.rollno);

    console.log("array of names : ",namearray)
    
}























