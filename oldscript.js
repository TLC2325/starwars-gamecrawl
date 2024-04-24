// function getRandomNumberUpTo3() {
//     return Math.floor(Math.random() * 3) + 1; // Generates random number between 0 and 3 (inclusive)
//     // return 2
// }

// const randomNumber = getRandomNumberUpTo3();

// const Random_StarWars_Quote = `https://www.swapi.tech/api/films/${randomNumber}`;

const quoteDisplayElement = document.getElementById('quoteDisplay')

const Random_StarWars_Quote = `https://www.swapi.tech/api/films/1`;

function getRandomQuote() {
    return fetch(Random_StarWars_Quote)
    .then(response => response.json())
    .then(data => data.result)
    .catch(error => console.error('Error:', error));
};


async function getNextQuote() {
    try {
        const quote = await getRandomQuote();
        const crawlText = quote.properties.opening_crawl;
        console.log(crawlText);

        quoteDisplayElement.innerText = crawlText;
    } catch (error) {
        console.error('Error', error);
    }
}

getNextQuote();
