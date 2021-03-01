/*Escreva um programa que se inicie com dois valores em duas variáveis diferentes: 
o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de 
lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.*/



let custoProduto = 5;
let valorVenda = 10;

if (custoProduto >= 0 && valorVenda >= 0) {
  let totalProduto = custoProduto * 1.2;
  let lucroProduto = (valorVenda - totalProduto) * 1000;
  console.log(lucroProduto);
} else {
  console.log('Erro, valor inválido')
}