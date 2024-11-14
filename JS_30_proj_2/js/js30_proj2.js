// Name: Jeovany Velazquez-Gonzalez Date: 11/13/2024
// Adapted from https://javascript30.com/
// JavaScript Clock
// New properties: setInterval, .getTime

let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');

function setDate() {
    let now = new Date();

    let seconds = now.getSeconds();
    let secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    let minutes = now.getMinutes();
    let minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

    let hours = now.getHours();
    let hourDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

    console.log(seconds);
}

setInterval(setDate, 1000);