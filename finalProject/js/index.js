let button = document.querySelector('.btn');
button.addEventListener('click', show)

function show() {
    let hiddenNav = document.getElementById('hiddenNav')

    if (hiddenNav.style.display == 'none'){
        hiddenNav.style.display = 'flex'
    }
    else{
        hiddenNav.style.display = 'none'
    }
    

}
