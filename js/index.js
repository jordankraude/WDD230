let currentdate = document.lastModified;

let date = new Date();
let year = date.getFullYear();

var before = document.getElementById('javadate').textContent

var before1 = document.querySelector('div').textContent

document.querySelector('div').textContent = before1 + year + ' .:|:. Jordan Kraude .:|:. Idaho'
document.getElementById('javadate').textContent = before + currentdate;
