let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
info.personagem2 = 'Thiago';

console.log('Bem vindo(a): ' + info.personagem);

console.log('Bem vindo(a): ' + info['personagem2']);