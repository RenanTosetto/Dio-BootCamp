const alunos = [
    {
        nome : 'Kleber',
        nota : '5',
        turma: '1B',
    },
    {
        nome : 'Jorge',
        nota : '9',
        turma: '1B',
    },
    {
        nome : 'Ana',
        nota : '4',
        turma: '2C',
    },
    {
        nome : 'Bruna',
        nota : '2',
        turma: '2C',
    },
];

function alunosAprovados(arr, media) {
    let aprovaos = [];

    for( let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovaos.push(nome);
        }
    }

    return(aprovaos);
}

console.log(alunosAprovados(alunos, 5));