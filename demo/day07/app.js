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
    console.log(person[key]);
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

/*this.summary=function()
{
    console.log(`my name is ${this.first_name}and i love ${this.fav_food}`);
}
*/
}
//prototype used to link methods to constructor

Person1.prototype.summary=function()
{
    console.log(`my name is ${this.first_name} and i love ${this.fav_food}`);
}


let obada=new Person1("obada","basta",true,true);// new instance
let hashem=new Person1("hashem","molokhia",true,false);
console.log(obada);
console.log(hashem);

console.log(obada.summary());
//adding peoperties using prototype
//Person1.prototype.lastname="obada allan"
let allDrinks=[]; 

function Drink(n,i,im,cold,hot,price)
{
    this.name=n;
    this.ingredients=i;
    this.image=im;
    this.hot=hot;
    this.cold=cold;
    this.price=price;
    allDrinks.push(this);// this will save any object i create to the arryy
}
let tableEL=document.getElementById("tableID");
Drink.prototype.rendertable=function()
{
let tr=document.createElement("tr");
tableEL.appendChild(tr);
let nameTD=document.createElement("td");
nameTD.textContent=this.name;
tr.appendChild(nameTD);
let priceTD=document.createElement("td");
priceTD.textContent=this.price;
tr.appendChild(priceTD);
}
let sectionEL=document.getElementById("csec");
let formEL=document.getElementById("formid");
Drink.prototype.render=function()
{
    //creating h3 for the name
    let namec=document.createElement("h3");
    namec.textContent=this.name;
    sectionEL.appendChild(namec);
    //create the images
    let imageel=document.createElement("img");
    imageel.src=this.image;
    imageel.style.width="75px";
    sectionEL.appendChild(imageel);
    //price
    let price =document.createElement("p");
    price.textContent=`${this.price} JD`;
    sectionEL.appendChild(price);
    //ingredient array as a list orderd or unorder list
    let orderd=document.createElement("or");
    sectionEL.appendChild(orderd);
        for (let i = 0; i < this.ingredients.length; i++) 
        {
            let list=document.createElement("li");
            list.textContent=this.ingredients[i];
            sectionEL.appendChild(list);
        }   
}
let latte=new Drink("latte coffe",["milk","coffe","ice","sugar"],"https://media-cdn.tripadvisor.com/media/photo-p/11/7a/f9/ab/el-coffe-shop-pty.jpg",true,false,2);
let hot_chocho= new Drink("choco",["sdasd","asdasd","icre","sugar"],"https://static9.depositphotos.com/1001033/1134/i/950/depositphotos_11349000-stock-photo-cup-of-coffe.jpg");
let latte2=new Drink("latte coffe",["milk","coffe","ice","sugar"],"https://thumbs.dreamstime.com/b/coffe-illustration-vector-white-background-61913706.jpg",true,false,2);
let hot_chocho1= new Drink("choco",["sdasd","asdasd","icre","sugar"],"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG");



formEL.addEventListener("submit",handlesubmit);

function handlesubmit(event)
{
    // the defalut behavior of submitting the form is to refresh th page
    event.preventDefault();
    //getting value from text input
    let drinkname=event.target.drinkname.value;
    let ingarr=(event.target.ing.value).split(",");
    let image=event.target.img.value;
    let price=event.target.price.value;
    //get a value of the checkbox
    let cold=event.target.cold.checked;
    let hot=event.target.hot.checked;
    console.log(drinkname,ingarr,image,price,cold,hot);
    //create a new drink using instance
    let newDrink=new Drink(drinkname,ingarr,image,cold,hot,price);
    newDrink.render();
    savedata(allDrinks);
}

//local storage 

function savedata(data)
{
    console.log("before saving",data);
    //taking array and convert it to string
    let datatosting=JSON.stringify(data)
    localStorage.setItem("drinks",datatosting);
}
function getdata()
{
    //taking string and convert it to array
    let retr=localStorage.getItem("drinks");
    console.log(retr);
    console.log(typeof(retr));
    let arrdata=JSON.parse(retr);
    if(arrdata!=null)
    {
    for (let i = 0; i < arrdata.length; i++) 
        {
            new Drink(arrdata[i].name,arrdata[i].ingredients,arrdata[i].image,arrdata[i].cold,arrdata[i].hot,arrdata[i].price);
        }
    }
renderAll();
}
function renderAll()
{
    for (let i = 0; i < allDrinks.length; i++)
        {
            allDrinks[i].render();  
            allDrinks[i].rendertable(); 
        }
}

getdata();


