const str1 = "i am manasa";
const str2 = "rabbit  eats carrot";
const str3 = "Great job"
const str4 = `
hello
Good morning
How are you
welcome`

const regexp1 = /m/;
const result1 = regexp1.test(str1);//checks if the string contains letter 'a' in the string 
console.log("Result1 :",result1);//true


const regexp2 = /M/i;
const result2 = regexp2.test(str1);//check if str1 contains letter 'A' and performs case-insensitive search
console.log("Result2 :",result2);//true


const regexp3 = /mn/;
const result3 = regexp3.test(str1);//check if str1 contains 'mn'
console.log("Result3 :",result3)//false



//[]-represents range 
const regexp4 = /[crs]s/;
const result4 = regexp4.test(str1);
console.log("Result4 :",result4);//false

const regexp5 = /[a-z]s/;
const result5 = regexp5.test(str1);
console.log("result5:",result5);//true

const regexp6 = /[a-z 0-9]s/;
const result6 = regexp6.test(str1);
console.log("result6:",result6);//true




//^ represents start of a string 
const regexp7 = /^rabbit/i;
const result7 = regexp7.test(str2);//checks if str2 starts with 'rabbit'
console.log("Result7 :",result7);//true

const regexp9 = /^Good/im;//m-flag represents multiline matching
const result9 = regexp9.test(str4);//checks if str4 starts with 'Good'
console.log("Result9:",result9);//true 



//$ represents end of a string 
const regexp8 = /carrot$/i;
const result8 = regexp8.test(str2);//checks if str2 ends with 'carrot'
console.log("Result8 :",result8);//true

const regexp10 = /you$/im;//m-flag represents multiline matching
const result10 = regexp10.test(str4);//checks if str4 ends with 'you'
console.log("Result10 :",result10);//true




//
const regexp11 = /job?/im;//the word or character before '?' is optional matching
const result11 = regexp11.test(str3);//it matches both but and buts , 's' is optional
console.log("Result11 : ",result11);

const regexp12 = /j(ob)?/im;//() Represents Group
const result12 = regexp12.test(str3);//it matches both but and buts , 's' is optional
console.log("Result12 : ",result12);

const regexp13 = /job*$/i;
const result13 = regexp13.test(str3);//the letter before '+' also can occur  multiple time in a string 
console.log("Result13 : ",result13)//it matches job,jobs,jobssss

const regexp14 = /job+$/i;//The letter before '+' also can occur multiple times in a string, but atleast one occurence is required 
const result14 = regexp14.test(str3);// Here it matches jobs, jobsssss...
console.log("Result14 :",result14);

const regexp15 = /job.$/i;//Any character can occur after job, '.' represents any type of character
const result15 = regexp15.test(str3);//Here it matches jobe, joba,jobb,job1,job2 ..., but does not matches job a character in place of '.' is a must
console.log("Result15 :",result15)

const regexp16 = /job.*$/i;
const result16 = regexp16.test(str3);//Here it matches jobe, jobes,jobsss, ..., since due to '*' mutliple charecters are matched
console.log("result16 : ", result16);





//
const str5 = "Hello";

const regexp17 = /[str]/i;
const result17 = regexp17.test(str5);//If there is a 's' or 't' or 'r' then it will be true
console.log("result17 : ", result17);//false

const regexp18 = /[^str]/i;
const result18 = regexp18.test(str5);//If there is no 's' or 't' or 'r' then it will be true
console.log("result18 : ", result18);//true

const regexp19 = /[H+]/i;//Atleast one 'H' is required
const result19 = regexp19.test(str5);//
console.log("result19 : ", result19);

const regexp20 = /O$/i; //String ends with 'O'
const result20 = regexp20.test(str5);
console.log("result20 : ", result20);

const regexp21 = /O?$/i; //'O' in string ending is optional
const result21 = regexp21.test(str5);
console.log("result21 : ", result21);

const regexp22 = /O+$/i; //Atleast one 'O' is required in the string ending
const result22 = regexp22.test(str5);
console.log("result22 : ", result22);






//{} - indicates the number of characters, a{2} means "aa", ie 2 a is required
const regexp23 = /L{2}o$/i; //'o' should be exactly after 2 L's
const result23 = regexp23.test(str5);
console.log("result23 : ", result23);

const regexp24 = /L{2,6}o$/i; //'o' should be exactly after between 2 to 4 L's
const result24 = regexp24.test(str5);
console.log("result24 : ", result24);

const regexp25 = /HeL{2,6}o$/i; //'o' should be exactly after between 2 to 4 L's and 'o' is required
const result25 = regexp25.test(str5);
console.log("result25 : ", result25);

const regexp26 = /HeL{2,}o$/i; //2 or more 'L' is required
const result26 = regexp26.test(str5);
console.log("result26 : ", result26);







// \ - indicates escape character, used for matching any characters which has special meaning
const regexp27 = /\d/i; //If there is any digits, it will be true, else it will be false
const result27 = regexp27.test(str5);
console.log("result27 : ", result27);

const regexp28 = /\D/i; //If there is any non-digits it will be true, if there is only digits it will be false
const result28 = regexp28.test(str5);
console.log("result28 : ", result28);

//Suppose we want to match '.' in a string, since '.' has a special meaning in regular expressions it will not work as expected and will match everything

const regexp29 = /./i; //If there is a '.' or anything it will match
const result29 = regexp29.test(str5);
console.log("result29 : ", result29);

//So we can write it as
const regexp30 = /\./i; //if there is any '.' in the string it match, else it will be false
const result30 = regexp30.test(str5);
console.log("result30 : ", result30);

//So '\' (backslash) is used to escape special charactors









//date validation
console.log("\n\n\n\n")
date = '11-12-2024'

const regexpForDate = /^\d{1,2}-\d{1,2}-\d{4}$/i;
const resultdate = regexpForDate.test(date);
console.log("date :",resultdate);


const regexpForDate1 = /^([012]?\d|3[01])-([0]\d|[1][012])-(\d{4})$/i;
const resultdate1 = regexpForDate1.test(date);
console.log("date :",resultdate1);




























