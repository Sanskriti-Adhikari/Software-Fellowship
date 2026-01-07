/*const title=document.getElementById("title")
const title2=document.querySelector("#subtitle") //gets first matching element
const pars=document.getElementsByClassName("par")
const pars2=document.querySelectorAll(".par")
console.log(title)
console.log(title2)
console.log(pars)
console.log(pars2)*/

const title=document.querySelector("h1")
title.innerHTML="Hi World"
title.style.color="red";

console.log(title.getAttribute("id"))
title.setAttribute("id","title2")
console.log(title.getAttribute("id"))

const heading2=document.createElement("h2")
heading2.innerHTML="This is a new sub-heading"

/*const body=document.querySelector("body")
body.appendChild(heading2)*/

//heading2.remove() : after this the new addition can be removed

const btn = document.getElementById("btn");
btn.addEventListener("mouseover",function(){
    alert("Button is clicked");
    title.style.color="green";
})