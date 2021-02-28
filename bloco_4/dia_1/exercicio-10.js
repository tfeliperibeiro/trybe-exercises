let custoProduto = 5;
let valorVenda = 10;

//verificando se existe numero negativo
if (custoProduto >= 0 && valorVenda >= 0) {
  //calculando produto com 20% de acrescimo
  let totalProduto = custoProduto * 1.2;
  //calculando lucro do produto em cima de mil vendas
  let lucroProduto = (valorVenda - totalProduto) * 1000;
  console.log(lucroProduto);
} else {
  console.log('Erro, valor inválido')
}