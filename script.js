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

for (let i = 5; i >= 0; i++){



    for(let  j = 5; j >= i; j++){
        str = str + '*'
    }
     str = str + '\n'
     
}
console.log(str)



// functions
{
function ToDo (){
    console.log ("fisrt line")
    console.log("second line")
    console.log(" third line")
}

let flag = true;

if(flag){
    ToDo();//function call

}

let flag1 =true;

if (flag1){
ToDo();//function call
}

//named function
function Hello(){
    console.log("hello world");
}

Hello();

//anonymous function
let
}







//call by value
let a=10;
function update(a){
    a="new value";
    console.log("value of a inside function",a);
}
update(a);
console.log("value of a after function call",a);



// call by reference

let arr=[10,20,30];
function update(arr){
    arr[0] = "new value";
    console.log("arr from  function",arr);
}
update(arr);
console.log("value of arr after function call",arr);

{
    function outerFunction(){
        let outerVariable = "i am from outerFunction "

        function innerFunction (){
            function innerFunction1(){
                return outerVariable;
            }
            return innerFunction1;

        }
        return innerFunction;
    }
    let result = outerFunction();
    console.log("result :",result);

    let result1 = result();
    console.log("result1:",result1)

    let result2 = result1();
    console.log("result2 :",result2);
}


//dom methods
{
    let text = document.getElementById("text");
    console.log("text : ",text);
    console.log("tex6t content :",text.textContent)
    text.textContent = "text  from javascript";


    let container = document.getElementsByClassName('contanier');
    console.log("conttainer[0] :",container[0]);
    console.log("conttainer[1] :",container[1]);

    let paragraph = document.getElementsByClassName('p')
    console.log("paragraph :",paragraph);

    console.log("pharagrtaph [0] :",paragraph[0]);
    console.log("pharagrtaph [1] :",paragraph[1]);


    let services = document.querySelector('.container #box ul li#services')
    console.log("services :",services);
}


//event handlers
let btn = document.getElementById('btn');
console.log("btn : ",btn)

let inp = document.getElementById('inp');
console.log("inp : ",inp)

btn.addEventListener('click',function (){
    console.log("button clicked");
});

btn.addEventListener('mouseover',function (){
    console.log("mouseover event");
});

btn.addEventListener('click',function (){
    console.log("button clicked");
});

btn.addEventListener('click',function (){
    console.log("button clicked");
});

btn.addEventListener('click',function (){
    console.log("button clicked");
});

btn.addEventListener('click',function (){
    console.log("button clicked");
});


//math function
console.log(Math.sqrt(16));
console.log(Math.round(10.4));
console.log(Math.round(10.5));
console.log(Math.ceil(10.2));
console.log(Math.ceil(10.8));
console.log(Math.floor(10.7));
console.log(Math.floor(10.2));
console.log(Math.floor(10.7));
console.log(Math.abs(-10));
console.log(Math.abs(10));
console.log(Math.max(10,20,30));
console.log(Math.min(10,20,30));
console.log(Math.pow(10,20));



//timer functions

setTimeout(function (){
    console.log("time out")
},5000)

setTimeout(function (){
    console.log("time in")
},5000)


//rescursion
function Counter (currentValue,limit){

    if(currentValue > limit){
        return;
    }

    console.log(currentValue);

// Counter (++currentValue.limit);//recursive call

//recursive call with some delay using time out
setTimeout(() => Counter(++currentValue,limit),2000)
}
console(0,10);



//program to show current time 

function putZero(sec){
    return sec<10?"0"+sec:sec;
}

function show(){
    var time = document.getElementById('time');
    var dt = new Date();
    var hours = dt.getHours();

    // if (hours>12){
    //     ampm = "pm";
    // }else{
    //     ampm = "am";
    // }

    var ampm = hours>12?"am":"pm";

    time.innerHTML = putZero(hours%12) + ":" + putZero(dt.getMinutes())+":"+putZero(dt.getSeconds())+ampm;

    setTimeout(function (){
        show();//recursive call
    },1000);
}
show();

