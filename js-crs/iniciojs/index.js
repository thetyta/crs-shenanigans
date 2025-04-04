let numero = 5 //let oi = new Number(1)
let letra = 'a'
let palavra = 'muito'
let decimal = 5.76
const oi = 1

let global = 1
console.log(global)
global = 'a'
console.log(global)
global = true
console.log(global)

let numeros = "66 5"
numeros = Number(numeros)
console.log(numeros)

palavra = palavra.slice(1, 3)

console.log("isso é" + palavra + "legal")
console.log("isso é", palavra, "legal")
console.log(`isso é ${palavra} legal`)

const vetor = [1, '2', null, true, 5.9, 'joao', []]
vetor.push('novo item')
vetor.unshift('3')
vetor.pop()
vetor.shift()
console.log(vetor)

function soma(a, b) {
    return a + b
}

const somar = (a, b) => a + b

console.log(somar(1, 6))

vetor.forEach((valor, i) =>{
console.log(valor, i);
})

// const vetor2 =[1,2,3,4,5,6]
// const vetorMap = vetor2.map((valor) => {
//     return valor + 1
// })

// console.log(vetorMap);

// const vetorfiltrado = vetor2.filter((valor) => {
//     if (valor % 2 == 0){
//         return valor
//     }
// })

// console.log(vetorfiltrado);

// const somaVetor = vetor2.reduce((a, valor) => a + valor)

// console.log(somaVetor);

// //função que vai receber uma string, que naquela string, só as posições pares serão maiusculas

// const nome = 'joaooooooo'
// const vetornome = nome.split('')
// vetornome.forEach((valor, i) =>{
//     if(i % 2 == 0){
//         vetornome[i] = valor.toUpperCase()
//     }
// })

// console.log(vetornome.join(''));
