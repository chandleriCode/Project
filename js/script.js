const fullstoppuncuation = new Audio("./sound/full-stop-punctuation.mp3");
document.querySelector('.death').addEventListener('click', () => {
    document.getElementById('audio').play();
});



document.getElementById("play").addEventListener("click", function ()  {
    let audio = document.getElementById("audio");
    let jumpscare = document.getElementById("jumpscare");

    // Play the audio & show the jumpscare
    audio.play();
    jumpscare.style.display = "flex";

    // Hide jumpscare after 3 seconds (adjust timing if needed)
    setTimeout (()=> {
        jumpscare.style.display = "none";
    },4700);
});