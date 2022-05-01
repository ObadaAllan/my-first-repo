'use strict';

console.log(localStorage);
//clear all of the local storage 
//localStorage.clear();
//saving data to local storage 
localStorage.setItem("name","Obada");
let res=localStorage.getItem("name");
console.log(res);
localStorage.removeItem("name");