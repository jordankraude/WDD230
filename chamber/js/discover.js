let currentdate = Date.now();
let previousdate = localStorage.getItem('lastvisit');
let difference = currentdate - previousdate;
let diffdays = Math.floor(difference/1000/60/60/24);

console.log(diffdays)
// documnet.getElementById('LastVisited').textcontent = difference;