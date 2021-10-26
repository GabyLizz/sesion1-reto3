const random = require('./random');

function Casilleros() {
  var numeros = [];
  var casillero1 = [];
  var casillero2 = [];
  var casillero3 = [];

  for (let i = 0; i <= 15; i++) {
    let aleatorio = random(1, 35, 0);
    //console.log(aleatorio);
    numeros.push(aleatorio);
  }

  var n, c1, k, c2, l, c3;

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
  //Ordenamiento del casillero 1
  for (k = 1; k < n; k++) {
    for (c1 = 0; c1 < n - k; c1++) {
      if (casillero1[c1] > casillero1[c1 + 1]) {
        aux = casillero1[c1];
        casillero1[c1] = casillero1[c1 + 1];
        casillero1[c1 + 1] = aux;
      }
    }
  }

  //Ordenamiento del casillero 2
  for (k = 1; k < n; k++) {
    for (c2 = 0; c2 < n - k; c2++) {
      if (casillero1[c2] > casillero1[c2 + 1]) {
        aux = casillero1[c2];
        casillero1[c2] = casillero1[c2 + 1];
        casillero1[c2 + 1] = aux;
      }
    }
  }

  //Ordenamiento del casillero 3
  for (k = 1; k < n; k++) {
    for (c3 = 0; c3 < n - k; c3++) {
      if (casillero1[c3] > casillero1[c3 + 1]) {
        aux = casillero1[c3];
        casillero1[c3] = casillero1[c3 + 1];
        casillero1[c3 + 1] = aux;
      }
    }
  }
  console.log('casillero 1:  ' + casillero1);
  console.log('casillero 2:  ' + casillero2);
  console.log('casillero 3:  ' + casillero3);
}

module.exports = Casilleros;
