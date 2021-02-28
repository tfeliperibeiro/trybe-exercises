let custoProduto = 5;
let valorVenda = 10;


if (custoProduto >= 0 && valorVenda >= 0) {
  let totalProduto = custoProduto * 1.2;
  let lucroProduto = (valorVenda - totalProduto) * 1000;
  console.log(lucroProduto);
} else {
  console.log('Erro, valor inválido')
}