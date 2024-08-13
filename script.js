console.log("hello");



let obj = {
    firstname : "manasa",
    lastname : "tm",
    age : 19,
    adress : {
        place : "kply",
        city : "palakkad"
    }
}


console.log("obj : ",obj);

//getting values from object 
console.log("firstname : ",obj.firstname);
console.log("last name : ",obj.lastname);
console.log("age:" ,obj.age);
console.log(" place : ",obj.adress.place);





console.log("\n\n\n\n\n\n\n\n\n")

// javascript conditions

console.log("javascript conditions")

let num1 = 100;
let num2 = 50;

// if (num1 > num2){
//     console.log(" num1 is greater than num2")
// }
// else{
//     console.log("num1 is less than num2")
// }


// if (num1 > num2){
//     console.log(`${num1} is greater than ${num2}`)
// }
// else{
//     console.log(`${num1} is less than ${num2}`)
// }



// if else-if

if(num1 < num2){
    console.log(`${num1} is greater than ${num2}`)
}

else if (num1==num2){
    console.log("both are equal")
}
else{
    console.log(`${num2} is lesser than ${num1}`)
}


console.log("\n\n\n\n\n\n\n\n\n")

let day = 10;

switch(day){

}




//nested loop

console.log("\n\n\n\n\n\n\n\n\n")

let str = '';

for (let i = 0; i < 10; i++){



    for(let  j = 0; j <= i; j++){
        str = str + '*'
    }
     str = str + '\n'
     
}
console.log(str)





