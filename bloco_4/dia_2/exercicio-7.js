/*Utilizando for , descubra qual o menor valor contido no array e imprima-o;*/


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = 500;

for(let index = 0; index < numbers.length; index++){
  if(numbers[index] < menorNumero){
    menorNumero = numbers[index];
  }
}

console.log(menorNumero);