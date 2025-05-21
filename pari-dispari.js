//Funzioni

function getRandomInt(min, max) {
   const minCeiled = Math.ceil(min);
   const maxFloored = Math.floor(max);
   return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function isEven(sommaNumeri){
    let risultato2 = ''
    if (sommaNumeri % 2 === 0){
        risultato2 = 'pari'
    } else {
        risultato2 = 'dispari'
    }
    return risultato2
}

function somma(a, b){
    const risultato = a + b
    return risultato
}

//Numero Pc

const numeroPc = getRandomInt(1, 5)
console.log(`Il numero del pc è ${numeroPc}`)
 
//Scelte Utente

const numeroUtente = parseInt(prompt('Digita un numero da 1 a 5'))
console.log(`Il tuo numero è ${numeroUtente}`)

const sceltaUtente = prompt('scegli tra pari o dispari')

//Calcoli

const sommaNumeri = somma(numeroPc, numeroUtente)
console.log(`La somma è ${sommaNumeri}`)

const risultatoFinale = isEven(sommaNumeri)
console.log(`Il risultato finale è ${risultatoFinale}`)

//Dichiarazione Vincitore

if (risultatoFinale === sceltaUtente){
    console.log('Hai vinto')
} else {
    console.log('Ha vinto il pc')
}
