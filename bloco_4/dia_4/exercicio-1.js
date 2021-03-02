//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info.personagem2 = 'Thiago';

console.log('Bem vindo(a): ' + info.personagem);

console.log('Bem vindo(a): ' + info['personagem2']);