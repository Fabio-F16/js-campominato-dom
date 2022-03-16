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


// -------------------------------------------------------funzioni


// funzione creazione griglia
function creazioneCampo(totalCells, levelClass) {

    const square = document.getElementById('square');
    square.innerHTML = '';
    const arrayBombe = createBombs(totalCells);

    for (let i = 1; i <= totalCells; i++) {

        const cell = createCell();
        cell.classList.add(levelClass);

        let number = i
        cell.innerText = number;
        square.appendChild(cell);

        cell.addEventListener('click', () => {

            const leBombe = arrayBombe.includes(i);

            if (leBombe) {
                cell.classList.add('bg-color-red');
                alert('Hai perso!')

            } else {
                cell.classList.add('bg-color-aqua');
            }
        })

    }
}
// fine funzione creazione griglia


// genero un numero random 
function generateRandomNumber(min, max) {
    const range = (max - min) + 1;
    const numeroRandom = Math.floor(Math.random() * range + min);
    return numeroRandom;
}
// fine genero un numero random 


// creo una cella nel DOM
function createCell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}
// fine creo una cella nel DOM

// creazione bombe
function createBombs(max) {

    // creo un array vuoto dove inserire i numeri random
    const arrayBombs = [];

    // creo un ciclo per creare massimo 16 numeri
    while (arrayBombs.length < 16) {

        //creo numero random 
        const number = generateRandomNumber(1, max)

        // se il numero non è presente all'interno dell'array, lo aggiungo
        if (!arrayBombs.includes(number)) {
            arrayBombs.push(number);
        }
    }
    console.log(arrayBombs)

    return arrayBombs;
}
// fine creazione bombe

// -----------------------------------------------------fine funzioni




// chiamo bottoni genera griglia
const difficoltàUno = document.querySelector('.difficoltàUno');
const difficoltàDue = document.querySelector('.difficoltàDue');
const difficoltàTre = document.querySelector('.difficoltàTre');


// applico ai bottoni l'evento click per la creazione griglia con parametri
difficoltàUno.addEventListener('click', () => creazioneCampo(100, 'cell-10'));
difficoltàDue.addEventListener('click', () => creazioneCampo(81, 'cell-9'));
difficoltàTre.addEventListener('click', () => creazioneCampo(49, 'cell-7'));







