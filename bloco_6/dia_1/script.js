let allStates = document.getElementById('estados');
let inputDate = document.getElementById('data');

let states = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MS',
  'MT',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
]

function createOption() {
  for (let index = 0; index < states.length; index += 1) {
    let createOption = document.createElement('option');
    allStates.appendChild(createOption).innerHTML = states[index];
    allStates.appendChild(createOption).value = states[index];
  }
}

createOption();

function createBar() {
  if (inputDate.value.length === 2 || inputDate.value.length === 5) {
    inputDate.value += '/';
  }
};

inputDate.addEventListener('keypress', createBar);