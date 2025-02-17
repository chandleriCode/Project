const fullstoppuncuation = new Audio("./sound/full-stop-punctuation.mp3");
document.querySelector('.death').addEventListener('click', () => {
    document.getElementById('audio').play();
});

const body = document.querySelector('body');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

document.getElementById("play").addEventListener("click", function ()  {
    let audio = document.getElementById("audio");
    let jumpscare = document.getElementById("jumpscare");

    // Play the audio & show the jumpscare
    audio.play();
    jumpscare.style.display = "flex";

    body.style.backgroundColor = 'red'; // Change background color to red
    body.style.color = 'black'; // Change color to black
    header.style.backgroundColor = 'black'; // Change background color to black
    header.style.color = 'red'; // Change color to red
    footer.style.backgroundColor = 'black'; // Change background color to black
    footer.style.color = 'red'; // Change color to red

    // Hide jumpscare after 3 seconds (adjust timing if needed)
    setTimeout (()=> {
        jumpscare.style.display = "none";
        body.style.backgroundColor = '';
        body.style.color = '';
        header.style.backgroundColor = '';
        header.style.color = '';
        footer.style.backgroundColor = '';
        footer.style.color = '';
        audio.pause(); // Pause the audio
    },2300);
});