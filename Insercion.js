const random = require('./random');

function Insercion() {
  var numeros = [];
  for (let i = 0; i <= 15; i++) {
    let aleatorio = random(1, 5, 2);
    //console.log(aleatorio);
    numeros.push(aleatorio);
  }
  let n, j, temp;
  n = numeros.length;
  console.log(numeros); // Mostramos, por consola, la numeros desordenada
  // Algoritmo de burbuja
  for (let i = 1; i < l; i++) {
    j = i;
    temp = numeros[i];
    while (j > 0 && numeros[j - 1] > temp) {
      numeros[j] = numeros[j - 1];
      j--;
    }
    numeros[j] = temp;
  }

  console.log(numeros); // Mostramos, por consola, la numeros ya ordenada
}

module.export = Insercion;
