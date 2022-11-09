
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json'

async function getProphets(requestURL){
    const response = await fetch(requestURL)
    if (response.ok){
        console.log(response)
        const jsObject = await response.json();
        const prophets = jsObject['prophets'];
        const len = prophets.length
        for (prophet in prophets){
            displayProphets(prophets[prophet])
        }
    }
        
    else{
        console.log('not working')
    }
}

getProphets(requestURL)

function displayProphets(item){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let dob = document.createElement('p');
    let pob = document.createElement('p')
    let img = document.createElement('img')

    h2.textContent = item.name + ' ' + item.lastname;
    dob.textContent = item.birthdate;
    pob.textContent = item.birthplace;
    img.setAttribute('src', item.imageurl)
    img.setAttribute('alt', item.name + ' ' + item.lastname);

    card.appendChild(h2)
    card.appendChild(dob)
    card.appendChild(pob)
    card.appendChild(img)
    console.log(card)

    document.getElementById('cards').appendChild(card)
}