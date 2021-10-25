const random = require('./random');

function Insercion() {
  var numeros = [];
  for (let i = 0; i <= 15; i++) {
    let aleatorio = random(1, 5, 2);
    //console.log(aleatorio);
    numeros.push(aleatorio);
  }
  var n, i, k, aux;
  n = numeros.length;
  console.log(numeros); // Mostramos, por consola, la numeros desordenada
  // Algoritmo de Insercion

  console.log(numeros); // Mostramos, por consola, la numeros ya ordenada
}

module.exports = Insercion;
