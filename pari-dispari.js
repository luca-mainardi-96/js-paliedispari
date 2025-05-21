//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

// numero pc
function getRandomInt(min, max) {
   const minCeiled = Math.ceil(min);
   const maxFloored = Math.floor(max);
   return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
const numeroPc = getRandomInt(1, 5)
console.log(numeroPc)
    
//domande utente

    //numero utente

const numeroUtente = parseInt(prompt('Digita un numero da 1 a 5'))
console.log(numeroUtente)

    //scelta

const sceltaUtente = prompt('scegli tra pari o dispari')
console.log(sceltaUtente)
