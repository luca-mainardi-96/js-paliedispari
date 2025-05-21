let parolaUtente = prompt('Digita una parola')

isPalindrome(parolaUtente)

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




