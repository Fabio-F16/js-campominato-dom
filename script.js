// console.log('js okk')

/* creare una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Tre difficoltà:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49 

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.


*/


// console.log('jooo')


// funzione creazione campo di gioco    FUNZIONE MADRE ------------------------------------------
function creazioneCampo(totalCells, levelClass) {

    const square = document.getElementById('square');

    createCell(totalCells, levelClass);

    const arrayBombs = createBombs(totalCells);

    clickEvents(arrayBombs); // evento click sulla cella

}
// fine funzione creazione campo di gioco FUNZIONE MADRE-------------------------------------------


// -------------------------------------------------------funzioni-----------------------------------------------------------------


// creazione griglia di gioco
function createCell(totalCells, levelClass) {

    const square = document.getElementById('square');
    square.innerHTML = '';
    for (let i = 1; i <= totalCells; i++) {

        const cell = document.createElement('div');

        cell.classList.add('cell');
        cell.classList.add(levelClass);

        let number = i
        cell.innerText = number;

        square.appendChild(cell);
    }

}
// fine creazione griglia di gioco


// creazione bombe
function createBombs(max) {

    const arrayBombs = [];

    while (arrayBombs.length < 16) {

        const number = generateRandomNumber(1, max)

        if (!arrayBombs.includes(number)) {
            arrayBombs.push(number);
        }
    }
    console.log(arrayBombs)

    return arrayBombs;
}
// fine creazione bombe


// funzione grande, eventi clickEvents
function clickEvents(arrayBombs) {
    let punteggio = 0;
    const square = document.getElementById('square');
    const allCells = document.querySelectorAll('.cell');

    for (let i = 0; i < allCells.length; i++) {

        const cell = allCells[i];
        const domPunteggio = document.querySelector('.punteggio');

        cell.addEventListener('click', () => {

            const gameOver = checkClick(cell, i, arrayBombs); // checkClick è il se ho ed perso eventi colore

            if (gameOver) {
                finishGame(cell, arrayBombs, i);
                domPunteggio.innerText = (`${punteggio} ed è il tuo risultato finale, mi dispiace, hai perso :-( `)
            } else {
                punteggio++
                console.log(punteggio);
                domPunteggio.innerText = punteggio;
            }
        });
    }


}
// fine funzione grande, eventi clickEvents

//  inizio funzione controllo clickEvents
function checkClick(cells, iterationNumber, arrayBombs) {

    const isBomb = arrayBombs.includes(iterationNumber + 1);

    if (isBomb) {
        cells.classList.add('bg-color-red');
    } else {
        cells.classList.add('bg-color-aqua');
    }

    return isBomb;

}

// fine dei giochi
function finishGame(cell, arrayBombs, i) {

    const square = document.getElementById('square');
    const allCells = document.querySelectorAll('.cell');

    for (let i = 0; i < allCells.length; i++) {

        const bombCell = allCells[i];

        if (arrayBombs.includes(i + 1)) {
            bombCell.classList.add('bg-color-red');
            bombCell.classList.add('bomb');
            square.classList.add('youLose');
        }
    }
}
// fine fine dei giochi

// genero un numero random 
function generateRandomNumber(min, max) {
    const range = (max - min) + 1;
    const numeroRandom = Math.floor(Math.random() * range + min);
    return numeroRandom;
}
// fine genero un numero random 

// -----------------------------------------------------fine funzioni--------------------------------------------------------------------



// preparazione all'esecuzione

// chiamo bottoni genera griglia
const difficoltàUno = document.querySelector('.difficoltàUno');
const difficoltàDue = document.querySelector('.difficoltàDue');
const difficoltàTre = document.querySelector('.difficoltàTre');


// applico ai bottoni l'evento click per la creazione griglia con parametri
difficoltàUno.addEventListener('click', () => creazioneCampo(100, 'cell-10'));
difficoltàDue.addEventListener('click', () => creazioneCampo(81, 'cell-9'));
difficoltàTre.addEventListener('click', () => creazioneCampo(49, 'cell-7'));