//Stars
// Sets the number of stars we wish to display
const numberOfStars = 100;

// For every star we want to display
for (let i = 0; i < numberOfStars; i++) {
    let star = document.createElement("div");
    star.className = "star";
    const xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    document.body.append(star);
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {  
    var y = window.innerWidth;
    var x = window.innerHeight;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
  }


// DOM manipulation
const quoteToType = document.getElementById("quoteDisplay");


// Bug - random num could be '0' meaning when api fetch 0 returns '404', starting num must be 1
function generateRandomNumber() {
    return Math.floor(Math.random() * 6);
}


const randomNumber = generateRandomNumber();


const starWarQuote = `https://www.swapi.tech/api/films/${randomNumber}`;
// const starWarQuote = `https://www.swapi.tech/api/films/1`;

const fetchApi = () => {
    return fetch(starWarQuote)
    .then(response => response.json())
    .then(data => data)
    // .then(data => console.log(data.result.properties.opening_crawl))
    .catch(error => console.log(error))
};


async function renderNewQuote() {
    try {
        const getQuote = await fetchApi();
        const newQuote = getQuote.result.properties.opening_crawl
        console.log(newQuote)
        quoteToType.innerText = newQuote;
    } catch (error) {
        console.error("Error message", error);
    }
}


renderNewQuote()