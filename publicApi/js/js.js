// Global Variables/constants
const search = document.querySelector(`.search-container`);
const gallery = document.querySelector('#gallery');
const body = document.querySelector('body')

// End of global variables/constants

// Adding the HTML code from within javascript
search.innerHTML = `<form action="#" method="get">
                            <input type="search" id="search-input" class="search-input" placeholder="Search...">
                            <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
                        </form>`;

gallery.innerHTML = '';

let counter = 0; // counter for the while loop

async function fetchThis() { // a wrapper function to use async to wait for my fetches to run so that they all would load
    while (true) { // a loop for 12 times
        await fetch('https://randomuser.me/api/?nat=us') // only english names will appear with us nationality
            .then(e => e.json())
            .then(e => e.results)
            .then(e => {
                counter++
                gallery.innerHTML += `  <div class="card" onclick="details(this)" id="${counter}">
                    <div class="card-img-container">
                        <img class="card-img" src="${e[0].picture.large}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${e[0].name.first} ${e[0].name.last}</h3>
                        <p class="card-text">${e[0].email}</p>
                        <p class="card-text cap">${e[0].location.city}, ${e[0].location.state}</p>
                        <p hidden>${e[0].cell}</p>
                        <p hidden>${e[0].location.street} ${e[0].location.city}, ${e[0].location.state} ${e[0].location.postcode}</p>
                        <p hidden>${e[0].dob.date}</p>
                    </div>
                </div>`
            })

            .catch(error =>
                console.log('something went wrong' + error));
        if (counter === 12) {
            break;
        }
    }
}


//functions
function removeDetails(e) {
    const rmv = document.querySelector(e);
    rmv.remove();
}
fetchThis(); //running the wrapper function



function details(e) { // function that shows more specific details about the person when profile is clicked
    const info = Array.from(e.lastElementChild.children);
    const pic = e.firstElementChild.children[0].src;
    let idNum = parseInt(e.id); // code storing the id ofc the element so it can be used to go next and previous elements
    let prevNum = idNum - 1;
    let nextNum = idNum + 1;
    let prevElement = document.getElementById(prevNum);

    function prev() {
        if (prevNum > 0) {
            details(prevElement)
        } else {
            alert('That is the first Profile')
        }
    }
    let nextElement = document.getElementById(nextNum);

    function next() {
        const hiddenItems = document.querySelectorAll('.hide').length
        if (nextNum < 13-hiddenItems ) {
            details(nextElement)
        } else {
            alert('That is the last Profile')
        }
    }

    gallery.innerHTML += `<div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn" onclick="removeDetails('.modal-container')"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src=${pic} alt="profile picture">
                        <h3 id="name" class="modal-name cap">${info[0].textContent}</h3>
                        <p class="modal-text">${info[1].textContent}</p>
                        <p class="modal-text cap">${info[2].textContent}</p>
                        <hr>
                        <p class="modal-text">${info[3].textContent}</p>
                        <p class="modal-text">${info[4].textContent}</p>
                        <p class="modal-text">Birthday: ${info[5].textContent.slice(0, 10)}</p>
                    </div>
                </div>
                <div class="modal-btn-container">
                <button type="button" id="modal-prev" onclick="removeDetails('.modal-container')" class="modal-prev btn">Prev</button>
                <button type="button" id="modal-next" onclick="removeDetails('.modal-container')" class="modal-next btn">Next</button>
                </div>
                </div>`;

    const prevBtn = document.querySelector('#modal-prev');
    const nextBtn = document.querySelector('#modal-next');
    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next)
}

const searchText = document.querySelector('#search-input');

function searchInput() {
    let li = Array.from(gallery.children);
    let newCounter = 0;
    let idCount = 1;
    // a function that searches names and compares them using the indexOf method and if it returns a number bigger than -1 then it is displayed
    for (i = 0; i < li.length; i++) {
        const name = li[i].querySelector("h3").textContent.toUpperCase();
        if (name.indexOf(searchText.value.toUpperCase()) > -1) {
            li[i].style.display = "";
            li[i].id = idCount
            li[i].setAttribute('class','card')
            idCount++
        } else {
            newCounter++
            li[i].style.display = "none"
            li[i].id = ''
            li[i].setAttribute('class','hide')
        }
        if (newCounter === 12) {
            alert('There is no Names Matching ' + searchText.value + '!')
        }
    }
}

searchText.addEventListener('keyup', searchInput);



//end of functions
// End of adding HTML from javascript