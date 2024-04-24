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

//   const audio = document.getElementById("starWarsAudio");
//   audio.play();
// method not allow to start playing audio because it was not initiated by a user interaction. Most modern browser have auto paly policies in place to prevent websites from auto playing audio or video wih user interaction. This is done to improve user exerience and reduce unwanted noise. To resolve, need to ensure play() method is triggered by a user interaction i.e. click event

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById("starWarsAudio");

    function playAudioOnClick() {
        audio.play();
        // Remove the event listener to prevent multiple plays
        document.removeEventListener('click', playAudioOnClick);
    }

    // Add event listener to play audio when user clicks anywhere on the page
    document.addEventListener('click', playAudioOnClick);
});
