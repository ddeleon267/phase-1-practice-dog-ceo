const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const allDogs = []

document.addEventListener('DOMContentLoaded', function(){
    fetchFromApi()
    const breedDropDown = document.getElementById('breed-dropdown');
});

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
function renderAllBreeds(dogs) {
    const ul = document.getElementById('dog-breeds') 
    for (let i = 0; i < dogs.length; i++) { 
        renderSingleBreed(dogs[i], ul)   
        allDogs.push(dogs[i])
    }
    
}

function updateValue(e) {
}

// part of challenge 2
function renderSingleBreed(dog, ul) { 
    const li = document.createElement('li') 
    li.addEventListener('click', fontColor);  // part of challenge 3
    li.innerText = dog; 
    ul.appendChild(li)
}

// Challenge 3 - clicking on one of the breed Lis changes its color
function fontColor(event) {
    event.target.style.color = 'green';
}

