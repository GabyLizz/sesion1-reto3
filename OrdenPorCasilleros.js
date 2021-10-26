const random = require('./random');

function Casilleros() {
  var numeros = [];
  var casillero1 = [];
  var casillero2 = [];
  var casillero3 = [];

  for (let i = 0; i <= 30; i++) {
    let aleatorio = random(1, 10, 0);
    //console.log(aleatorio);
    numeros.push(aleatorio);
  }

  var n, c1, c2, l;

  n = numeros.length;
  //Se agregan los elementos a los casilleros correspondientes
  for (l = 1; l < n; l++) {
    if (numeros[l] <= 10) {
      casillero1.push(numeros[l]);
    } else if (numeros[l] > 10 && numeros[l] <= 20) {
      casillero2.push(numeros[l]);
    } else {
      casillero3.push(numeros[l]);
    }
  }

  for (k = 1; k < n; k++) {
    for (i = 0; i < n - k; i++) {
      if (numeros[i] > numeros[i + 1]) {
        aux = numeros[i];
        numeros[i] = numeros[i + 1];
        numeros[i + 1] = aux;
      }
    }
  }
  console.log('casillero 1:  ' + casillero1);
  console.log('casillero 2:  ' + casillero2);
  console.log('casillero 3:  ' + casillero2);
}
module.exports = Casilleros;
