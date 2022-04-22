'use strict'
//final scope

//block scope :every thing inside curly brackets{}
/*
if(true)
{
    let blocks="i am block scope";
    console.log(blocks);
}
console.log(blocks);

if(true)
{
    var block="i am block scope";
    console.log(block);
}
console.log(block);

if(true)
{
    const block1="i am block scope";
    console.log(block1);
}
console.log(block1);

//function scope
*/
function multi(num1,num2)
{
    let res;
    res=num1*num2
    let msg
    if(res>0)
    {
     msg="positive result";
    }
    else{msg="negative result"};
    return `the result is ${res} and its a ${msg}`;
}
let result=multi(10,10);
console.log(result);

//constant
const pi=3.14;
console.log(pi);
pi=7;