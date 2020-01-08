/*
    Joué au dés !

    - Le premier arrivé à 100 à gagner !
    - Lancez les dés mais attention si vous faites 1 avec l'un des deux dés alors votre somme redescendra à 0.
    - Si vous ne faites pas 1 alors votre somme grandira !
    - Ne soyez pas trop gourmand et vérouiller la somme dés que vous ne le sentez plus !

    BONNE CHANCE !
*/

var activePlayer, dice1, dice2, count, countScore1, countScore2;

activePlayer = 0;
count = 0;
countScore1 = 0;
countScore2 = 0;

var dices = document.querySelectorAll('.dice');

for(let i = 0; i < dices.length; i++) {
    dices[i].style.display = 'none';
}

document.querySelector('.btn-roll').addEventListener('click', function() {
    let dicesDOM = document.querySelectorAll('.dice');
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    
    for(let i = 0; i < dicesDOM.length; i++) {
        dicesDOM[i].style.display = 'block';
    }

    dicesDOM[0].src = 'dice-' + dice1 + '.png';
    dicesDOM[1].src = 'dice-' + dice2 + '.png';

    // 1 - INCREMENTATION SCORE
    if(dice1 !== 1 && dice2 !== 1) {
        count += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = count;
    } else {
        initScore();
        setToggle();
    }
})

document.querySelector('.btn-hold').addEventListener('click', function() {

    if(activePlayer === 1) {
        countScore1 += count
        document.querySelector('#score-' + activePlayer).textContent = countScore1;
    } else {
        countScore2 += count;
        document.querySelector('#score-' + activePlayer).textContent = countScore2;
    }
    
    setToggle();
    initScore();
    checkWin();
})

document.querySelector('.btn-new').addEventListener('click', function() {
    countScore1 = 0;
    countScore2 = 0;
    count = 0;

    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    resetCurrentScore();
})

function setToggle() {
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function initScore() {
    count = 0;
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
    resetCurrentScore();
}

function checkWin() {
    if(countScore1 >= 100) {
        document.querySelector('#name-1').textContent = "WINNER!";
        document.querySelector('#name-1').style.color = "red";
    } else if(countScore2 >= 100) {
        document.querySelector('#name-2').textContent = "WINNER!";
        document.querySelector('#name-2').style.color = "red";
    }
}

function resetCurrentScore() {
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
}

