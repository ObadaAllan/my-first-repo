'use strict';
/*
//hoisting 
hoist();
function hoist()
{
    console.log("call me when you need me");
}
hoist();

number=7;
console.log(number);

var number;
//will print 7

number1=7;
console.log(number);

let number1;
// will give an error

*/
//object

let obj={
    k1:"value",
    k2:"value2"
}

//person object 
let person={
    //properties
    first_name:"obada",
    fav_food:"pizza",
    iscoffe:true,
    dog:true,
    age:22,
    //method:
    driving:function()
    {
        console.log("obada drives JEEP");
    },
    summary:function()
    {
        console.log(this);
        console.log(`name is ${this.first_name},he likes ${this.fav_food }`);
    }
}
console.log(person);
//dot notation
console.log(person.first_name);
//bracket notation
console.log(person["first_name"]);
person.summary();

//change a value
person.fav_food="pizza hot";

console.log(person);

//add new properties
person.study="cs";
console.log(person);

person.summary();


//how to traverse an object person(looping object)
// foor in

for (const key in person) 
{
    console.log(key);
    console.log(person["key"]);
    console.log(`the key  is ${key} has the value of ${person[key]}`);
}
//constructer is a special type function 
//constructer cant be written in arrow function

function Person1(fn,ff,cof,dog)
{
this.first_name=fn;
this.fav_food=ff;
this.iscoffe=cof;
this.dog=dog;
}

let obada=new Person1("obada","basta",true,true);
let hashem=new Person1("hashem","molokhia",true,false)
console.log(obada);
console.log(hashem);