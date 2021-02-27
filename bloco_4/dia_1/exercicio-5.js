/*Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false , 
caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.*/

let angleOne = 50;
let angleTwo = 30;
let angleThree = 100;

let sumAngles = angleOne + angleTwo + angleThree;
let anglesPositive = angleOne > 0 && angleTwo > 0 && angleThree > 0;

if (anglesPositive) {
  if (sumAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('Erro, os ângulos devem ser números positivos!');
}