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
let dayOfWeek = date.getDay();
let full_date = new Intl.DateTimeFormat ('en-US', { dateStyle: 'full'}).format(date_now);

console.log(full_date)
document.querySelector('#date').textContent = full_date;

let before = document.querySelector('#year').textContent;
let before1 = document.querySelector('#javadate').textContent;

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

const weatherhour = date_now.getHours() - 1;
const weatherminutes = date_now.getMinutes();

const URLweather = "https://api.open-meteo.com/v1/forecast?latitude=82.86&longitude=135.00&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
const URLweather2 = "https://api.openweathermap.org/data/2.5/weather?lat=82.86&lon=135.00&appid=8beb09695c655edae22a342c229a8040"
getWeather(URLweather)
getWeather2(URLweather2)
async function getWeather(requestURL) {
    const response = await fetch(requestURL)
    if (response.ok){
        const jsObject = await response.json();
        const temptime = jsObject['hourly']
        const Temperature = temptime.temperature_2m[weatherhour]
        const TemperatureF = Math.round((Temperature * 9/5) + 32)
        const Windspeed = temptime.windspeed_10m[weatherhour]
        const minute_hour = (weatherhour * 60) + weatherminutes
        console.log(Temperature)
        document.getElementById('weatherdegree').textContent = TemperatureF + ' F°'
        document.getElementById('windspeed').textContent = Windspeed + ' km/h'
        let chill = Math.round((35.74 + (0.6215 * TemperatureF))-(35.75 * Math.pow(Windspeed,0.16)) + (0.4275*TemperatureF*Math.pow(Windspeed,0.16)));

        if (Windspeed > 3.0 & Temperature <= 50){
            document.getElementById('windchill').textContent = chill + " °F"
        }
        else
        {document.getElementById('windchill').textContent = 'N/A'}
    }
}

async function getWeather2(requestURL) {
    const response = await fetch(requestURL)
    if (response.ok){
        const jsObject = await response.json();
        const current = jsObject['weather']
        console.log(current)
        const forecast = current[0].description
        const icon = current[0].icon
        const iconurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
        const weatherImg = document.getElementById('weatherimg')
        weatherImg.setAttribute('src', iconurl)
        weatherImg.setAttribute('alt', forecast)
        document.getElementById('weatherforcast').textContent = forecast
    }
}