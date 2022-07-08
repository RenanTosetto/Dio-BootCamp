function calculeIdade (anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade `;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30
}

const pessoa2 = {
    nome: 'Julha',
    idade: 25
}

const animal = {
    nome: 'Fiona',
    idade: 5,
    raca : 'salsicha'
};

console.log(calculeIdade.apply(pessoa1, [4]));