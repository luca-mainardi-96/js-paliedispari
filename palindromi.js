// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//richiesta all'utente

let parolaUtente = prompt('Digita una parola')

isPalindrome(parolaUtente)

//creazione funzione

function isPalindrome(parolaUtente){
    const parolaMin = parolaUtente.toLocaleLowerCase()
    const parolaInvertita = parolaMin.split('').reverse().join('')
    const ePalindromo = true
    if (parolaMin === parolaInvertita){
        console.log(ePalindromo)
    } else{
        const ePalindromo = false
        console.log(ePalindromo)
    }
}




