/*Escreva um programa que converte uma nota dada em
porcentagem (de 0 a 100) em conceitos de A a F.*/

/*Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F*/

let note = 101;

if (note < 0 || note > 100) {
  console.log('Erro, nota invalida');
} else if (note >= 90) {
  console.log('Nota A')
} else if (note >= 80) {
  console.log('Nota B');
} else if (note >= 70) {
  console.log('Nota C');
} else if (note >= 60) {
  console.log('Nota D');
} else if (note >= 50) {
  console.log('Nota E');
} else {
  console.log('Nota F');
}