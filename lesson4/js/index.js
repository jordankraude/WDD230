let navlist = document.querySelector('.nav');
let button = document.querySelector('.btn');
button.addEventListener('click', show)

function show() {
    navlist.classList.toggle('newstyle');
}


let currentdate = document.lastModified;
let date = new Date();
let year = date.getFullYear();
let date_now = new Date();
let full_date = new Intl.DateTimeFormat ('en-US', { dateStyle: 'full'}).format(date_now);

console.log(full_date)
document.querySelector('#date').textContent = full_date;

let before = document.querySelector('#year').textContent;
let before1 = document.querySelector('#javadate').textContent;

document.querySelector("#year").textContent = before + year + ' .:|:. Jordan Kraude .:|:. Idaho';
document.querySelector('#javadate').textContent = before1 + currentdate;


let display = document.getElementById("#year").textContent;
console.log(display);




