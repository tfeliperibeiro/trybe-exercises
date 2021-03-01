/*Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu 
salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, 
calcule o líquido a ser recebido.*/


let salarioBruto = 3000;
let calculoIR;
let calculoINSS;


if (salarioBruto > 0 && salarioBruto <= 1556.94) {
  calculoINSS = salarioBruto * 8 / 100;
} else if (salarioBruto <= 2594.92) {
  calculoINSS = salarioBruto * 9 / 100;
} else if (salarioBruto <= 5189.82) {
  calculoINSS = salarioBruto * 11 / 100;
} else {
  calculoINSS = 570.88;
}

let salarioBase = salarioBruto - calculoINSS;

if (salarioBase > 0 && salarioBase <= 1903.98) {
  calculoIR = 0;
} else if (salarioBase <= 2826.65) {
  calculoIR = (salarioBase * 7.5 / 100) - 142.80;
} else if (salarioBase <= 3751.05) {
  calculoIR = (salarioBase * 15 / 100) - 354.80;
} else if (salarioBase <= 4664.68) {
  calculoIR = (salarioBase * 22.5 / 100) - 636.13;
}else{
  calculoIR = (salarioBase * 27.5 / 100) - 869.36;
}


console.log("O salario Bruto é: " + salarioBruto);
console.log("Desconto do INSS é: " + calculoINSS);
console.log("Desconto do IR é: " + calculoIR.toFixed(2));
console.log("A soma do salario base é: " + salarioBase.toFixed(2));
console.log("O salario liquido é: " + (salarioBase.toFixed(2) - calculoIR.toFixed(2)));