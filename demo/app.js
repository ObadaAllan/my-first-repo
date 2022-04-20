console.log("hello world");
var book="JS";
var age;


console.log(book);
console.log(age);

//popup boxes

//alert
alert("welcome to javascript ");

//confirm
var userAnswer=confirm("are you sure ?");
console.log(userAnswer);

//prompt
var userInput=prompt("enter any name");

if(userInput.toLowerCase()==="obada")
console.log("helllo obada");
else console.log("hello stranger!");

var userAge =prompt("enter your age ");

(userAge==42)?console.log("your too old"):console.log("not too old");

if(userAge>35) console.log("never too old to learn javascript");

else if(userAge<25) console.log("its the right time to learn javascript");

else if(userAge==='19') console.log("you are too ypung to learn javascript");

else console.log("you are too older to learn js");

//trenary if
//(condition)?if true execute :else execute

// addd string to a variable 

var uName=prompt("enter your name ");
console.log("Hello "+uName);
//interpolation
console.log(`welcome to our website ${uName}`);
