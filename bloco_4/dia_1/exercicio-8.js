/*Escreva um programa que defina três números em variáveis no seu começo e 
retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .*/

let n1 = 2;
let n2 = 3;
let n3 = 4;

if(n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0){
  console.log(true);
}else{
  console.log(false);
}

/*------------------------------------------------------*/

let numeros = [2, 3, 5];
let resultado = false;

for (let index = 0; index < numeros.length; index++) {
  if (numeros[index] % 2 === 0) {
    resultado = true;
  }
}

console.log(resultado);