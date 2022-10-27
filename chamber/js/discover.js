let datenow = Date.now();
let previousdate = localStorage.getItem('lastvisit');
let difference = datenow - previousdate;
let diffdays = Math.floor(difference/1000/60/60/24);



let navlist = document.querySelector('.nav');
let button = document.querySelector('.btn');

let images = document.querySelectorAll('img');
let pimages = document.querySelectorAll('[data-src]');

console.log(diffdays)

document.getElementById('LastVisited').textcontent = diffdays.toLocaleString;

const options = {
    threshold: .5,
    rootMargin: "0px 0px 100px 0px"
}

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    if (!source) {
        return;
    }
    else {
        img.src = source;
    }
}

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting){

            }
            else {
                preloadImage(entry.target);
                io.unobserve(entry.target)
            }
            
        });
        
    },options
    
)

images.forEach(image => {
    io.observe(image)
})



button.addEventListener('click', show)

function show() {
    navlist.classList.toggle('newstyle');

}




console.log(full_date)
document.querySelector('#date').textContent = full_date;

let before = document.querySelector('#year').textContent;
let before1 = document.querySelector('#javadate').textContent;
let currentdate = document.lastModified;
let date = new Date();
let year = date.getFullYear();
let date_now = new Date();
let dayOfWeek = date.getDay();
let full_date = new Intl.DateTimeFormat ('en-US', { dateStyle: 'full'}).format(date_now);

document.querySelector("#year").textContent = before + year + ' .:|:. Jordan Kraude .:|:. WDD 230 Project';
document.querySelector('#javadate').textContent = before1 + currentdate;


let display = document.getElementById("year").textContent;
console.log(display);


banner = document.getElementById('banner')
console.log(dayOfWeek)

if (dayOfWeek != 1 || dayOfWeek != 2){
    banner.style.display = "none";
}
if (dayOfWeek == 1 || dayOfWeek == 2){
    banner.style.display = "block"
}