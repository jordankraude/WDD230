let currentdate = document.lastModified;
let date = new Date();
let year = date.getFullYear();

let before = document.querySelector('#year').textContent
let before1 = document.getElementById('javadate').textContent

document.querySelector("#year").textContent = before + year + ' .:|:. Jordan Kraude .:|:. Idaho'
document.getElementById('javadate').textContent = before1 + currentdate;

let display = document.getElementById("year").textContent

console.log(display)


