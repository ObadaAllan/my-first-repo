'use strict';
console.log(document);
// get element by id 
let header = document.getElementById("hid");
console.log(header);
// created the element
let heading =document.createElement("h1");
// give it a value
header.style.color="brown";
heading.textContent="ASAC coffe house";
//console.log(heading);
//put the h1 inside the header/append
header.appendChild(heading);


let para=document.createElement("p");
para.textContent="hello my name is obada allan and i am 22 years old i studied computer science in al albayat university";
let main=document.getElementById("main");
main.appendChild(para);
//create an image
//<img src="" >

let image=document.createElement("img");
image.src="https://cdn.dribbble.com/users/1622978/screenshots/17069808/media/ff967acb3bcbbd0c3a5239eef96a4bb2.jpg";
main.appendChild(image);
//add styling
image.style.width="100px";
image.style.height="100px";
image.class="imageclass";
image.id="imageid";

let secondimage=document.createElement("img");
secondimage.src="http://unblast.com/wp-content/uploads/2020/03/Tea-and-Coffee-Cup-Mockup-1.jpg";
secondimage.style.width="100px";
main.appendChild(secondimage);

