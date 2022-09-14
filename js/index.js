let currentdate = document.lastModified;
let date = new Date();
let year = date.getFullYear();

var before = document.getElementById('javadate').textContent
var before1 = document.getElementById('year').textContent

document.getElementById('javadate').textContent = before + currentdate;

document.getElementsByName('year').textContent = before1 + year + ' .:|:. Jordan Kraude .:|:. Idaho'
