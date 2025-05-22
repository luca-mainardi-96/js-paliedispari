//Mia Versione

const parolaUtente = prompt('Digita una parola')

isPalindrome(parolaUtente)

function isPalindrome(parola){
     const parolaMin = parola.toLocaleLowerCase()
     const parolaInvertita = parolaMin.split('').reverse().join('')
     const ePalindroma = true
     if (parolaMin === parolaInvertita){
         console.log(ePalindroma, 'La parola è palindroma')
     } else{
         const ePalindromo = false
         console.log(ePalindroma, 'La parola non è palindroma')
     }
 }


// Correzione


// const parolaUtente = prompt('Insertisci una parola')

// if (ePalindroma(parolaUtente)){
//     console.log('Si')
// } else {
//     console.log('No')
// }

// function ePalindroma(parola) {
//     parola = parola.toLowerCase()
//     const parolaInvertita = invertiParola(parola)
//     if (parolaInvertita === parola){
//         return true
//     } else {
//         return false
//     }
// }


// function invertiParola(parola){
//     let parolaInvertita = ''

//     for (let i=0; i<parola.length; i++){
//         const char = parola.at(-1 -i)
//         parolaInvertita += char
//     }
//     return parolaInvertita
// }

