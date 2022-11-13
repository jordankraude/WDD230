var requestURL = "https://raw.githubusercontent.com/jordankraude/wdd230/main/chamber/file.json"
let tablebutton = document.getElementById('TV')
let cardbutton = document.getElementById('CV')

let navlist = document.querySelector('.nav');
let button = document.querySelector('.btn');
button.addEventListener('click', show)

function show() {
    navlist.classList.toggle('newstyle');
}

async function setDisplay(requestURL) {
    const response = await fetch(requestURL)
    if (response.ok){
        const jsObject = await response.json();
        const buisnesses = jsObject['buisnesses']
        for (buisness in buisnesses){
            displayBuisness(buisnesses[buisness])
            displayBuisnessTable(buisnesses[buisness])
        }
    }
}
setDisplay(requestURL)

function displayBuisness(item){
    let card = document.createElement('section');
    let logo = document.createElement('img')
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let linkholder = document.createElement('p')
    let websitelink  = document.createElement('a')
    

    logo.setAttribute('src', item.imageurl)
    logo.setAttribute('alt', item.name);
    address.textContent = item.address;
    phoneNumber.textContent = item.phoneNumber;
    websitelink.textContent = item.website;
    websitelink.setAttribute('href', item.website)
    websitelink.setAttribute('target', '_blank')
    

    card.appendChild(logo)
    card.appendChild(address)
    card.appendChild(phoneNumber)
    linkholder.appendChild(websitelink)
    card.appendChild(linkholder)
    document.getElementById('dirCards').appendChild(card)
}

function displayBuisnessTable(item){
    let tablerow = document.createElement('tr')
    let companyname = document.createElement('td')
    let address = document.createElement('td');
    let phoneNumber = document.createElement('td');
    let linkholder = document.createElement('td')
    let websitelink  = document.createElement('a')

    companyname.textContent = item.name
    address.textContent = item.address;
    phoneNumber.textContent = item.phoneNumber;
    websitelink.textContent = item.website;
    websitelink.setAttribute('href', item.website)
    websitelink.setAttribute('target', '_blank')

    tablerow.appendChild(companyname)
    tablerow.appendChild(address)
    tablerow.appendChild(phoneNumber)
    linkholder.appendChild(websitelink)
    tablerow.appendChild(linkholder)
    document.getElementById('dirTableActual').appendChild(tablerow)
}

function switchDisplay(){
    let dirCards = document.getElementById('dirCards')
    let dirTable = document.getElementById('dirTable')

    dirCards.style.display = 'flex'
    dirTable.style.display = 'none'

}

function switchDisplay1(){
    let dirCards = document.getElementById('dirCards')
    let dirTable = document.getElementById('dirTable')

    dirCards.style.display = 'none'
    dirTable.style.display = 'block'

}


cardbutton.addEventListener('click', switchDisplay)
tablebutton.addEventListener('click', switchDisplay1)