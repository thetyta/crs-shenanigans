const formulario = document.getElementById('formulario');
const tabela = document.getElementById('tabelaRegistro');
const apagar = document.getElementById('botaoApagar');
let registroLista = JSON.parse(localStorage.getItem('registros')) || [];  

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  let nome = document.getElementById('inputNome').value.trim();
  let data = document.getElementById('inputData').value.trim();
  let fim = document.querySelector("input[name=checkbox]");

  
  console.log(data);
  
  if (!nome || !data) {
      alert('Por favor informe nome/data!');
      return;
    }
    const [ano, mes, dia] = data.split('-');
    data = `${dia}/${mes}/${ano}`;

  if (verificaDuplicado(nome, data)) {
    alert('dados duplicados nao sao aceitos');
    return;
  }

  const novoRegistro = {inputNome: nome, inputData: data, checkbox: fim}
  registroLista.push(novoRegistro)
  atualizaTabela();
  salvarDados(); 
  formulario.reset();
});

function atualizaTabela() {
  tabela.innerHTML = `
        <div class="row">
            <div class="col border border-black">Nome</div>
            <div class="col border border-black">Data Fim</div>
            <div class="col border border-black">Ação</div>
        </div>
  `;
  registroLista.forEach((item, index) => {
    const tr = document.createElement('div');
    tr.innerHTML = `
    <div class="row">
      <div class="col border border-black">${item.inputNome}</div> 
      <div class="col border border-black">${item.inputData}</div>
      <div class="col border border-black">
        <button type="button" onclick="excluirRegistro(${index})">Apagar Tarefa</button>
        <button type="button" onclick="finalizarRegistro(${index})">Finalizar Tarefa</button>
    </div>
    `;
    item.finalizado ? tr.style.backgroundColor = 'green' : tr.style.backgroundColor = 'white';
    tabela.appendChild(tr)
  })
}


function verificaDuplicado(nome, data) {
  return registroLista.some(registro =>  registro.inputNome.toLowerCase() == nome.toLowerCase() && data == registro.inputData)
}

function salvarDados() {
  localStorage.setItem('registros', JSON.stringify(registroLista));  
}

window.excluirRegistro = function (index) {
  registroLista.splice(index, 1); 
  atualizaTabela();
  salvarDados(); 
};

window.finalizarRegistro = function (index) {
  registroLista[index].finalizado = true; 
  atualizaTabela(); 
  salvarDados();  
};

document.addEventListener('DOMContentLoaded', atualizaTabela);