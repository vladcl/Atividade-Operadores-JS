function comparacao(num1, num2) {
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
    let saoDiferentes = '';

    if (num1 === num2) {
        saoDiferentes = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoDiferentes}são diferentes.`;
}

function criaSegundaFrase(num1, num2) {
    const subtracao = num1 - num2;

    let compara20 = 'maior';
    let compara40 = 'maior';

    if(subtracao < 20) {
        compara20 = 'menor';
    }

    if(subtracao < 40) {
        compara40 = 'menor';
    }

    return `Sua subtração é ${subtracao}, que é ${compara20} que 20 e ${compara40} que 40.`
}

console.log(comparacao(60, 90))