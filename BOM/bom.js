const button = document.querySelector('#btn');
const list = document.querySelector('.list');
const listcontainer = document.querySelector('.listcontainer')

button.addEventListener('click', additem);
console.log(input)

function additem() {
    const input = document.querySelector("#favchap").value;
    const newchapter = document.createElement('li')
    const deletebutton = document.createElement('button')
    const deleteimage = document.createElement('img')
    deleteimage.setAttribute('src','../BOM/rcLxML7Ri.png')
    deleteimage.width = 40
    deletebutton.style.position = 'absolute';
    deletebutton.style.right = '450px'
    deletebutton.appendChild(deleteimage)
    newchapter.style.marginTop = "40px"
    newchapter.innerHTML = input + "                    "
    newchapter.appendChild(deletebutton)
    list.appendChild(newchapter)
    
    // listcontainer.appendChild(list)
    console.log(newchapter)
    deletebutton.addEventListener('click', deleteItem);
    function deleteItem() {
        list.removeChild(deletebutton.parentElement)
        }
    }

