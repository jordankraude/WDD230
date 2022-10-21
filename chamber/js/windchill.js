let temp1 = document.getElementById('weatherdegree').textContent
let temp = parseFloat(temp1)
let windspeed1 = document.getElementById('windspeed').textContent
let windspeed = parseFloat(windspeed1)
let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

if (windspeed > 3.0 & temp <= 50){
	document.getElementById('windchill').textContent = chill + "°F"
}
else
{document.getElementById('windchill').textContent = 'N/A'}