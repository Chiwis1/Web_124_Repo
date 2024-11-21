// Name: Jeovany Velazquez-Gonzalez Date: 11/20/2024
// Adapted from https://javascript30.com/
// JavaScript Whack A Mole 
// New properties: Math., setTimeout

let holes = document.querySelectorAll('.hole');
let scoreBoard = document.querySelector('.score');
let moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

let startBox = document.querySelector('.startGame');
let gameOverBox = document.querySelector('.game-over');

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    let idx = Math.floor(Math.random() * holes.length);
    let hole = holes[idx];
    if (hole === lastHole) {
        console.log('Ah nah thats the same one bud');
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    let time = randomTime(200, 1000);
    let hole = randomHole(holes);

    hole.classList.add('up');
    setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
    }, time);

}

function startGame() {
    startBox.style.display = 'none';
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => { timeUp = true; gameOver(); }, 10000);   
}

function bonk(e) {
    if(!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}

function gameOver() {
    gameOverBox.classList.remove('hidden');
}

function playAgain() {
    gameOverBox.classList.add('hidden');
    startGame();
}

moles.forEach(mole => mole.addEventListener('click', bonk));