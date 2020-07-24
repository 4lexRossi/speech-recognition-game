const engine = {
  "cores": ['green', 'purple', 'pink', 'red', 'yellow', 'orange', 'grey', 'black'],
  "hexadecimais": {
    'green':'#02EF00',
    'purple': '#790093',
    'pink': '#',
    'red': '#E90808',
    'yellow': '#E7D703',    
    'black': '#141414',
    'orange': '#F16529',
    'grey': '#808080',
    'pink': '#F02A7E'
  },
  "moedas": 0
}

function sortearCor(){
  let indexCorSorteada = Math.floor(Math.random() * engine.cores.length);
  let labelBoxColor = document.getElementById('color-box')
  let nomeCorSorteada = engine.cores[indexCorSorteada]
  labelBoxColor.innerText = nomeCorSorteada.toUpperCase();

  return engine.hexadecimais[nomeCorSorteada];
}

function aplicarCorNaCaixa(nomeDaCor){
  var caixaDasCores = document.getElementById('cor-atual')

  caixaDasCores.style.backgroundColor=nomeDaCor;
  caixaDasCores.style.backgroundImage="url('/img/caixa-fechada.png')";
  caixaDasCores.style.backgroundSize="100%";

  
}