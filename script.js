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



console.log("\n\n\n\n\n");

//speard operator
{
let arr = [1,2,3,4,5];
console.log("arr :",arr);

let arr1 = [...arr,6]
console.log("arr1 : ",arr1);

let obj = {
    name : "manasa",
    email : "manasatm150@gmail.com",
    country : "india"
};

console.log("obj :",obj);

let obj1 = {...obj,mark : 90};
console.log("obj1 :",obj1)
}

{
console.log("\n\n\n\n\n");

//Destruvturing 

let arr = [1,2,3,4,5];
console.log("arr :",arr);

let [a,b,c,d,e] = arr;
console.log(" a ",a)
console.log(" b ",b)
console.log(" c ",c)

let obj = {
    name : "manasa",
    email : "manasatm150@gmail.com",
    country : "india",
};
console.log("obj :",obj);


let{name,email,country} = obj;
console.log("name :",name);
console.log("email :",email);
console.log("country :",country);

}

console.log("\n\n\n\n\n");

//nested destructuring

{
    let matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
    ];
    console.log("matrix :",matrix);

    let [row1,row2] = matrix;
    console.log("row1 : ",row1);
    console.log("row2 :",row2);


    let [a,b,c] = row1;
    console.log("a :",a);
    console.log("b :",b);
    console.log("c :",c);


    let [d,e,f] = row2;
    console.log("d :",d);
    console.log("e :",e);
    console.log("f :",f);


    let obj = {
        name : "manasa",
        email : "manasatm150@gmail.com",
        country : "india",
        adress : {
            street : "street",
            city : "city"
        }

    };
    let {name,email,country ,adress : {street, city}} = obj;
    console.log("name :",name);
    console.log("email :",email);   
    console.log("country :",country);
    console.log("street:",street);
    console.log("city :",city);

}


console.log("\n\n\n\n\n");
//Array methods
{
let arr = [
    {
        name : "manasa",
        email : "manasa@gmail.com",
        age : 19,

    },
    {
        name : "Sunisha",
        email : "sunisha@gmail.com",
        age : 20,
    },
    {
        name : "farzin",
        email : "farzin@gmail.com",
        age : 21,

    }
];

//forEach
console.log("ForEach");
let foreachResult = arr.forEach((element) =>{
    console.log("element : ",element);
    return element.age == 15;
});

console.log("forEachResult : ",foreachResult);

console.log("\n\n\n\n\n");



//find
console.log("Find");
let findvalue = arr.find((element) =>{
    console.log("element : ",element);
    return element.age == 15;
});

console.log("findvalue : ",findvalue);

console.log("\n\n\n\n\n");




//filter
console.log("Find");
let filtervalues = arr.filter((element) =>{
    console.log("element : ",element);
    return element.age == 15;
});

console.log("filtervalue : ",filtervalues);

console.log("\n\n\n\n\n");




//map
console.log("map");
let mappedvalues = arr.map((element) =>{
    console.log("element : ",element);
    return element.mark + 10;
});

console.log("mappedvalue : ",mappedvalues);

console.log("\n\n\n\n\n");


//reduce
console.log("reduce");
let sum = arr.reduce((total,element) => {
    return total + element.mark ;
},0);

console.log("sum : ",sum);

console.log("\n\n\n\n\n");

}







{
console.log("\n\n\n\n\n");

//call//apply//bind

console.log("this : ",this);

let obj = {
    name :"manasa",
    age : 20,
getAge : function (){
    console.log("this : ",this);
    console.log("ahe : ",age);
}
}

obj.getAge ();

console.log("\n\n\n\n\n");

function Greeting (message1,message2){
    console.log("message1 : ",message1);
    console.log("message2 ",message2);

    console.log("this :",message1)
    console.log("this.name : ",this.name);
    console.log("this.age :".this.age);
    
}
// Greeting("hello","welcome");
// Greeting.call(obj ,["hello","welcome"]);

let bindedFunction = Greeting.bind(obj,"hello","welcome");
console.log("bindedfunction :",bindedFunction);
bindedFunction();
}




{
    console.log("\n\n\n\n\n");

    //constructor function
 function person(name,age,number){
    this.name = name;
    this.age = age;
    this.mark = mark;
    this.Greeting = function(){
        console.log(`hello ${this.name},you are ${this.age},year old.`)
    }
 }

 let person = new person("manasa",19,8479236304);
 console.log("person :",person);
 person.Greeting();


 let person1=new person("midhun",26,5673409467);
 console.log("person1",person1);
 person1.Greeting();

 person1.city = "canada";
 person1.getAge = function(){
    console,log(`hi ${this.name},is ${this.number},your number ?`)
 }
 person1.getAge();


 person.prototype.getNumber = function(){
    console.log(`hi ${this.name},your age is ${this.age}`)
}

person.getAge();
person1.getNumber();
 }
 


 




    






