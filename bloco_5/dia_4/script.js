
let bgColor = document.querySelector('#colorBody');
let corTexto = document.querySelector('#colorText');
bgColor.addEventListener('change', mudaCorBg);
corTexto.addEventListener('change', mudaCorTexto);
let tamanhoTexto = document.querySelector('#tamanhoTexto');
let espacoFonte = document.querySelector('#espacoFonte');
tamanhoTexto.addEventListener('change', tamanhoFonte);
espacoFonte.addEventListener('change', espacamento);
let fonteTipo = document.querySelector('#fonte');
fonteTipo.addEventListener('change', fonte);


function mudaCorBg() {
  document.querySelector('body').style.backgroundColor = bgColor.value;
}

function mudaCorTexto() {
  document.querySelector('body').style.color = corTexto.value;
}

function tamanhoFonte() {
  document.querySelector('p').style.fontSize = tamanhoTexto.value;
}

function espacamento() {
  document.querySelector('p').style.lineHeight = espacoFonte.value;
}

function fonte() {
  document.querySelector('p').style.fontFamily = fonteTipo.value;
}
