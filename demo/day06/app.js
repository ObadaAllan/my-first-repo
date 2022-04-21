'use strict';
console.log("hello");


var firstArray=["tuesday","wednessday","friday","saturday","sunday","monday"];
console.log(firstArray);

console.log(firstArray.toString());
console.log(`my fav day is ${firstArray[firstArray.length-1]} day`);


// add element to our array 
//the first way
firstArray[6]="today";
firstArray[0]="friday";//update
firstArray[10]="saturday";
console.log(firstArray);

//array methods :
//array push 
var topic=[];
topic.push("Javascript");
console.log(topic);
topic.push("html");
console.log(topic);
//push will add methods to the ends of arrray

//unshift
topic.unshift("nodejs");
console.log(topic);

//unshift will add element to array from the start of array

//pop will remove the last elemnt of array
topic.pop();
console.log(topic);

//shift will remove the first element of the array 
topic.shift();
console.log(topic);

//toString it will convert the whole array to a string
topic.toString();
console.log(topic);
console.log("number two "+topic.toString());



