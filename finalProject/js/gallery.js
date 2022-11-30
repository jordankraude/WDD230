var requestURL = "https://raw.githubusercontent.com/jordankraude/wdd230/main/finalProject/gallery.json"

async function setDisplay(requestURL) {
    const response = await fetch(requestURL)
    if (response.ok){
        const jsObject = await response.json();
        const showcases = jsObject['galleryShowcases']
        for (showcase in showcases){
            displayShowcase(showcases[showcase])
        }
    }
}
setDisplay(requestURL)

function displayShowcase(item){
    let card = document.createElement('div');
    let img = document.createElement('img')
    let namePriceSection = document.createElement('section')
    let name = document.createElement('h3');
    let price = document.createElement('h3')

    img.setAttribute('src', item.url)
    img.setAttribute('data-src', item.placeHolderImg)
    img.setAttribute('alt', item.alt)
    name.textContent = item.name
    price.textContent = item.price
    
    namePriceSection.appendChild(name)
    namePriceSection.appendChild(price)
    namePriceSection.style.display = 'flex'
    namePriceSection.style.justifyContent = 'space-around'
    namePriceSection.style.marginTop = '10px'
    card.appendChild(img)
    card.appendChild(namePriceSection)
    document.getElementById('photogrid').appendChild(card)
}