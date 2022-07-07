function comparaNumeros(n1, n2) {
    if(!n1 || !n2) return 'Defina dois números inteiros!';
    
    const priemiraFrase = criaPrimeiraFrase (n1, n2);
    const segunfaFrase = criaSegundaFrase (n1, n2);

    return `${priemiraFrase} ${segunfaFrase}`
}

function criaPrimeiraFrase (n1, n2) {
    let saoIguais = '';

    if(n1 !== n2) {
        saoIguais = 'não';
    }

    return `Os núemros ${n1} e ${n2} ${saoIguais} são iguais.`
};

function criaSegundaFrase(n1, n2) {
    const soma = n1 + n2;

    let resultado10 = 'menor'
    let resultado20 = 'menor'
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        resultado10 = 'maior'
    }

    if(compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros (10, 5));

