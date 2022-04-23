'use strict mode';
//find element from any array
//function  
function Find_element(arr,element)
{
    for (let i = 0; i < arr.length; i++) 
    {
        if(arr[i]==element)
        {
            return "found";
        }
    }
    return "not found";
}
var numberarr=[1,2,5,4,8,6,5,8,5,4,5,8];
var usernum=parseInt(prompt("enter the number you wannna search for"));
var result=Find_element(numberarr,usernum);
console.log(result);

//arrow function ES6 
let newway=(number)=>
{
    return number*number;
}
console.log(newway(10));
//if i had one line of code i can remove the  return keyword and the curly brackets
let newway1=(num)=>num*num;
console.log(newway1(3));
//if i had one parameters as input,i can remove the parameters
let newway2=num=>num*num;
console.log(newway2(3));