/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com 
letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as 
letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals*/

let chessPiece = 'rei'

if (chessPiece.toLowerCase) {
  if (chessPiece === 'rei') {
    console.log('Rei - Mova uma casa para qualquer direção.')
  } else if (chessPiece === 'rainha') {
    console.log('Rainha - Mova na horizontal, vertical e diagonal.')
  } else if (chessPiece === 'bispo') {
    console.log('Bispo - Mova na diagonal.')
  } else if (chessPiece === 'cavalo') {
    console.log('Cavalo - Mova em L (Vertical ou Horizontal).');
  } else if (chessPiece === 'torre') {
    console.log('Torre - Mova pela vertical ou Horizontal.');
  } else if (chessPiece === 'peao') {
    console.log('Peao - Mova uma casa para frente.');
  } else {
    console.log('Erro - peça invalida!');
  }
}

/*Com switch*/

let piece = 'bispo';

switch (piece.toLowerCase()) {
  case 'rei':
    console.log('Rei - Mova uma casa para qualquer direção.');
    break;

  case 'rainha':
    console.log('Rainha - Mova na horizontal, vertical e diagonal.');
    break;

  case 'bispo':
    console.log('Bispo - Mova na diagonal.');
    break;

  case 'cavalo':
    console.log('Cavalo - Mova em L (Vertical ou Horizontal).');
    break;

  case 'torre':
    console.log('Torre - Mova pela vertical ou Horizontal.');
    break;

  case 'peao':
    console.console.log('Peao - Mova uma casa para frente.');
    break;

  default:
    console.log('Erro - peça invalida!');
}