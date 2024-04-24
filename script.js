// DOM manipulation
const quoteToType = document.getElementById("quoteDisplay");

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


async function getNewQuote() {
    try {
        const getQuote = await fetchApi();
        const newQuote = getQuote.result.properties.opening_crawl
        console.log(newQuote)
        quoteToType.innerText = newQuote;
    } catch (error) {
        console.error("Error message", error);
    }
}


getNewQuote()