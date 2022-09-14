let currentdate = document.lastModified;
let date = new Date();
let year = date.getFullYear();

var before = document.getElementById('javadate').textContent
var before1 = document.getElementById('year').textContent

document.getElementById("year").textContent = before1 + year + ' .:|:. Jordan Kraude .:|:. Idaho'
document.getElementById('javadate').textContent = before + currentdate;

let display = document.getElementById("year").textContent

console.log(display)


