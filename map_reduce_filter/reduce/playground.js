function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        return prev + current;
    })
}

const arr = [1, 2];

console.log(somaNumeros(arr));

const lista = [
    {
        nome: 'sabao em po',
        preco: 10,
    },
    {
        nome: 'cereal',
        preco: 20,
    },
    {
        nome: 'toalha',
        preco: 20,
    },
];

const saldoDisponível = 100;

function calculasSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current) {
        return prev - current.preco;
    }, saldoDisponivel)
}

console.log(calculasSaldo(saldoDisponível, lista))