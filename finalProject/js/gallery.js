var requestURL = "https://raw.githubusercontent.com/jordankraude/wdd230/main/finalProject/gallery.json"

async function setDisplay(requestURL) {
    const response = await fetch(requestURL)
    if (response.ok){
        const jsObject = await response.json();
        const showcases = jsObject['galleryShowcases']
        for (showcase in showcases){
            displayShowcase(Showcases[showcase])
        }
    }
}
setDisplay(requestURL)

function displayShowcase(item){
    let picture = document.createElement('picture');
    let img = document.createElement('img')
    let name = document.createElement('h4');

    img.setAttribute('src', item.placeHolderImg)
    img.setAttribute('data-src', item.url)
    name.textContent = item.name
    

    picture.appendChild(img)
    picture.appendChild(name)
    document.getElementById('photogrid').appendChild(picture)
}