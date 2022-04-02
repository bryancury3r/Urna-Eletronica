let seuVotoPara = document.querySelector('.divisao-1-1 span');
let cargo = document.querySelector('.divisao-1-2 span');
let descricao = document.querySelector('.divisao-1-4');
let aviso = document.querySelector('.divisao-2');
let lateral = document.querySelector('.divisao-1-right');
let numeros = document.querySelector('.divisao-1-3');

let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
  let etapa = etapas[etapaAtual];

  let numeroHtml = '';

  for(let i = 0; i < etapa.numeros; i++) {
    numeroHtml += '<div class="numero"></div>';
  }

  seuVotoPara.style.display = 'none';
  cargo.innerHTML = etapa.titulo;
  descricao.innerHTML = '';
  aviso.style.display = 'none';
  lateral.innerHTML = '';
  numeros.innerHTML = numeroHtml;

}

function atualizaInterface() {

}

function clicou(n) {
  let elNumero = document.querySelector('.numero.pisca');
  if(elNumero !== null) {
    elNumero.innerHTML = n;
    numero = `${numero}${n}`;
  }
}

function branco() {
  alert("clicou em branco")
}

function corrige() {
  alert("clicou em corrige")
}

function confirma() {
  alert("clicou em confirma")
}

comecarEtapa();