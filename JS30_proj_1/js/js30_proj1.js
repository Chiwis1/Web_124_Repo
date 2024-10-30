// Name: Jeovany Velazquez-Gonzalez Date: 10/29/2024
// Adapted from https://javascript30.com/
// JavaScript Drum Kit
// New properties: keyCode, e.target

function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; // Stops the function
    audio.currentTime = 0; // Rewind to Start

    audio.play();
    key.classList.add("playing"); // gives key class the "playing" class
    console.log(this);
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // if its not a transform it skips the transition
    this.classList.remove('playing');
}

let keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound); //This tracking every key that was hit.

let volumeSlider = document.getElementById('volume'); // setting volumeSlider to the volume id.

function setVolume(e) {
    let volume = e.target.value; // Get the current value of the slider
    let allAudio = document.querySelectorAll('audio'); // Select all audio elements
    allAudio.forEach(audio => {
        audio.volume = volume;
    }); // Set the volume foreach audio element
}

volumeSlider.addEventListener('input', setVolume); // gets the input sets that value to the function