// const cobaia = document.getElementById('cobaia')
// const botao = document.getElementById('botao')
// const botaomedia = document.getElementById('botaomedia')
// const notas = []

// let media = 0

// botao.addEventListener('click', (event) =>{
//     notas.push(Number(prompt('Adicione uma nota')))
//     console.log(notas)
// })



// botaomedia.addEventListener('click', (event) =>{
//     notas.forEach((v) => {
//         media = 
//     })
    
//     alert(`média = ${media}`)
// })

const cobaia = document.getElementById('cobaia');
const botao = document.getElementById('botao');
const reset = document.getElementById('reset');

cobaia.innerText = 'Adicione uma nota';
let notas = [];

botao.addEventListener('click', (event) => {
  do {
    const input = prompt('Adicione uma nota');
    if (!input) {
      break
    }
    if (Number(input) >= 0 || Number(input <= 10)) {
      notas.push(Number(input));
    } else {
      alert('Nota invalida');
    }
  } while (true);

  if (notas.length == 0) {
    return cobaia.innerText = 'Nenhuma nota valida para conta'
  }
  const valor = notas.reduce((valor, item) => valor + item)
  cobaia.innerText = (valor / notas.length).toFixed(1)
}) 

reset.addEventListener('click', (event) => {
  cobaia.innerText = 'Adicione uma nota'
  notas = []
})