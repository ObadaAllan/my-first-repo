"use strict";
//events handeling
//when i press a abutton it alert hello message 
//1.get the element
let btn1=document.getElementById("btn");
let btn2=document.getElementById("btn2");

btn1.addEventListener("click",handleclick);
function handleclick()
{
    alert("hello welcome ya hala");

}

btn2.addEventListener("mouseover",handlemouseover);

function handlemouseover()
{
    //to add emoji to windows press the windos key + semicolon
    btn2.textContent="😊🤦‍♀️🤦‍♀️🤦‍♂️🤦‍♂️🤦‍♂️🎶😉😁😁";
}
//back to surprise
btn2.addEventListener("mouseleave",handleover);
function handleover()
{
    btn2.textContent="surprice";
}

