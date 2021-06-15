//console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


function fetchFromApi() {
    // Challenge 1 - fetch all Dog images so they can be displayed
    fetch(imgUrl)
        .then(response => response.json()) 
        .then(data => displayDogImages(data)) 

    // Challenge 2 - fetch all breeds so they can be displayed
    fetch(breedUrl)
        .then(response => response.json()) 
        .then(data => renderAllBreeds(Object.keys(data.message)))  
}

// Challenge 1 - display dog images with data from fetch
function displayDogImages(data) {
    const dogImageContainer = document.getElementById('dog-image-container')
    const dogData = data.message  
    dogData.forEach(img => {
        const dogImg = document.createElement('img')
        dogImg.src = img
        dogImageContainer.appendChild(dogImg)
    })
}

// Challenge 2 - display dog breeds with data from fetch
let allDogs = []

function renderAllBreeds(dogs) {
    let ul = document.getElementById('dog-breeds') 
    for (let i = 0; i < dogs.length; i++) { 
        renderSingleBreed(dogs[i], ul)   
        allDogs.push(dogs[i])
    }

    // Challenge 4: user can filter breeds that start with a particular letter using a dropdown
    const breedDropDown = document.getElementById('breed-dropdown');
    breedDropDown.addEventListener('change', updateValue);
    function updateValue(e) {
        const selectedLetter = e.target.value; 
        


    }
}

// part of challenge 2
function renderSingleBreed(dog, ul) { 
    let li = document.createElement('li') 
    li.addEventListener('click', fontColor);  // part of challenge 3
    li.innerText = dog; 
    ul.appendChild(li)
    //getSelectValue()
}

// Challenge 3 - clicking on one of the breed Lis changes its color
function fontColor(event) {
    event.target.style.color = 'green';
}

document.addEventListener('DOMContentLoaded', fetchFromApi);