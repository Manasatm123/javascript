//print numbers from 1 to 10

let str ='';

for(let i=0; i<=10; i++){
    console.log(i)
}



//calculate the sum of numbers from 1 to 10

let sum = 0;

for (let i=1; i<=10; i++){
    sum = sum + i
}
console.log ("sum :",sum)


//print even numbers between 1 and 20

let i
for(i=1; i<=20; i++){
    if(i%2==0){
        console.log(i)
    }
}


//count the numbers of vowels in a string
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


//pattern reverse
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


