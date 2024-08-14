// //print numbers from 1 to 10

// let str ='';

// for(let i=0; i<=10; i++){
//     console.log(i)
// }
// console.log("\n\n\n\n\n\n")




// //calculate the sum of numbers from 1 to 10

// let sum = 0;

// for (let i=1; i<=10; i++){
//     sum = sum + i
// }
// console.log ("sum :",sum)
// console.log("\n\n\n\n\n\n")



// //print even numbers between 1 and 20

// let i
// for(i=1; i<=20; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }
// console.log("\n\n\n\n\n\n")



// //count the numbers of vowels in a string
// str = "my name is manasa"
// a=0;
// strlen = str.length
// for( let i=0; i<=strlen; i++)
    
//     {
//     if(str[i]=="a" || str[i]=="A" || str[i]=="e" ||str[i]=="E" || str[i]=="i" || str[i]=="I" || str[i]=="o" || str[i]=="O" || str[i]=="u" || str[i]=="U" ){
//         a=a+1

//     }
    
// }
// console.log("no of vowels = ",a)
// console.log("\n\n\n\n\n\n")



// //check if a number is prime

// {
//     console.log("\n\n\n\n");
    
//     let a = 20;
//     let prime = true;
//     if (a <= 1) {
//         prime = false;
//     } else {
//         for (let i = 2; i < a; i++) {
//             if (a % i === 0) {
//                 prime = false;
//                 break;
//             }
//         }
//     }
//     if (prime) {
//         console.log(`${a} is prime number`);
//     } else {
//         console.log(`${a} is not prime number`);
//     }
// }
// console.log("\n\n\n\n\n\n")




// //pattern reverse
// {
// let str = '';

// for (let i = 5; i >= 0; i--){



//     for(let  j = 1; j <= i; j++){
//         str = str + '*'
//     }
//      str = str + '\n'
     
// }
// console.log(str)
// }
// console.log("\n\n\n\n\n\n")



// {
//     let str ='';
//     for (let i=1; i<=5; i++){

//         for (let j=1; j<=i ; j++){
//             str = str + j;
//         }
//         str = str + '\n'
//     }
//     console.log(str)
// }


//functions

//print numbers from 1 to 10 using function

function Str(){
let str ='';

for(let i=0; i<=10; i++){
   console.log(i)
}
}
Str()
console.log("\n\n\n\n\n\n")




//calculate the sum of numbers from 1 to 10  using function
function Sum(){
let sum = 0;

for (let i=1; i<=10; i++){
    sum = sum + i
}
return sum
}
fsum = Sum()
console.log ("sum :",fsum)
console.log("\n\n\n\n\n\n")



//print even numbers between 1 and 20 using function
function even(){
let i
for(i=1; i<=20; i++){
    if(i%2==0){
        console.log(i)
    }
}
}
even()
console.log("\n\n\n\n\n\n")



//count the numbers of vowels in a string  using function
str = "my name is manasa"
a=0;
strlen = str.length
for( let i=0; i<=strlen; i++)
    
    {
    if(str[i]=="a" || str[i]=="A" || str[i]=="e" ||str[i]=="E" || str[i]=="i" || str[i]=="I" || str[i]=="o" || str[i]=="O" || str[i]=="u" || str[i]=="U" ){
        a=a+1

    }
    
}
console.log("no of vowels = ",a)
console.log("\n\n\n\n\n\n")



//check if a number is prime  using function

{
    console.log("\n\n\n\n");
    
    let a = 20;
    let prime = true;
    if (a <= 1) {
        prime = false;
    } else {
        for (let i = 2; i < a; i++) {
            if (a % i === 0) {
                prime = false;
                break;
            }
        }
    }
    if (prime) {
        console.log(`${a} is prime number`);
    } else {
        console.log(`${a} is not prime number`);
    }
}
console.log("\n\n\n\n\n\n")




//pattern reverse  using function
{
let str = '';

for (let i = 5; i >= 0; i--){



    for(let  j = 1; j <= i; j++){
        str = str + '*'
    }
     str = str + '\n'
     
}
console.log(str)
}
console.log("\n\n\n\n\n\n")



{
    let str ='';
    for (let i=1; i<=5; i++){

        for (let j=1; j<=i ; j++){
            str = str + j;
        }
        str = str + '\n'
    }
    console.log(str)
}


