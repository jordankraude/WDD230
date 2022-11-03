let navlist = document.querySelector('.nav');
let button = document.querySelector('.btn');
button.addEventListener('click', show)

function show() {
    navlist.classList.toggle('newstyle');

}


let current = document.lastModified;
let date = new Date();
let year = date.getFullYear();
let date_now = Date.now();
let dayOfWeek = date.getDay();
let full_date = new Intl.DateTimeFormat ('en-US', { dateStyle: 'full'}).format(date_now);

var currentdate = new Date(); 
var datetime = "Date Loaded: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

console.log(full_date)

let before = document.querySelector('#year').textContent;
let before1 = document.querySelector('#javadate').textContent;

document.querySelector("#year").textContent = before + year + ' .:|:. Jordan Kraude .:|:. WDD 230 Project';
document.querySelector('#javadate').textContent = before1 + currentdate;


let display = document.getElementById("year").textContent;
console.log(display);


banner = document.getElementById('banner')
console.log(dayOfWeek)


function setDateValue() {
    document.getElementById("formDate").value = datetime;
}

window.onload = setDateValue()