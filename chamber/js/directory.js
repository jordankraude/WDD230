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
    

    card.appendChild(logo)
    card.appendChild(address)
    card.appendChild(phoneNumber)
    linkholder.appendChild(websitelink)
    card.appendChild(linkholder)
    document.getElementById('dirCards').appendChild(card)
}

function switchDisplay(){
    let dirCards = document.getElementById('dirCards')
    let dirTable = document.getElementById('dirTable')

    if (dirCards.style.display == 'none' && dirTable.style.display != 'grid'){
        dirCards.style.display = 'grid'
        dirTable.style.display = 'none'
    }
    else if (dirCards.style.display == 'grid' && dirTable.style.display != 'none'){
        dirCards.style.display = 'none'
        dirTable.style.display = 'grid'
    }

}

cardbutton.addEventListener('click', switchDisplay)
tablebutton.addEventListener('click', switchDisplay)