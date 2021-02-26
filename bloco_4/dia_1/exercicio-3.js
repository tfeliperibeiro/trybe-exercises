/*Faça um programa que retorne o maior de três números. 
Defina no começo do programa três variáveis com os 
valores que serão comparados.*/

let n1 = 45;
let n2 = 36;
let n3 = 32;

if (n1 > n2 && n1 > n3) {
  console.log(n1 + " é maior");
} else if (n2 > n1 && n2 > n3) {
  console.log(n2 + " é maior");
} else {
  console.log(n3 + " é maior");
}