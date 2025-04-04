// const pessoa2 = require('./pessoa2.json')

// const pessoa = {
//     nome: 'joao',
//     idade: 18,
//     estuda: true,
//     endereço: {
//         rua: 'coisa',
//         numero: '568',
//         bairro: 'coisos'
//     },
//     idiomas: [
//         'portugues',
//         'ingles',
//         'japones'
//     ],
//     somar: (a, b) => {
//         return a + b 
//     }
// }
// console.log(pessoa);
// console.log(pessoa2);
// console.log(pessoa.idade);
// console.log(pessoa.endereço);
// console.log(pessoa.endereço.rua);
// console.log(pessoa.idiomas);
// console.log(pessoa.idiomas[1]);
// console.log(pessoa['idade']);
// console.log(pessoa.somar(1, 2));

// const pessoas = [
//     {
//         nome: 'fula',
//         idade: 123
//     },
//     {
//         nome: 'maluco',
//         idade: 12
//     }
// ]

// console.log(pessoas[0].nome)
// console.log(JSON.stringify(pessoas[0]))
// console.log(Object.keys(pessoa))
// Object.keys(pessoa).forEach((chave) => {
//     console.log(pessoa[chave])
// })

// fazer um vetor de objetos que tenha nome, temPelos e função de som do animal

const animais = [
    {
        nome: 'vaca',
        temPelos: false,
        mugir: () =>{
            console.log('mooo')
        }
    },
    {
        nome: 'gato',
        temPelos: true,
        miar: () =>{
            console.log('miaumiaumiau')
        }
    },
    {
        nome: 'cachorro',
        temPelos: true,
        latir: () =>{
            console.log('auauauauauauauauuauauauauauauauauuauauauauauauuaua');
        }
    }
]

animais.forEach((animal) =>{
    Object.keys(animal).forEach((a) => {
        if (typeof animal[a] == 'function') {
            animal[a]()
        } else {
            console.log(animal[a]);
        }
    })

});
