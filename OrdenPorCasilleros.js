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

  var n, k;

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

  n = casillero1.length;
  //Ordenamiento del casillero 1
  for (k = 1; k < n; k++) {
    for (l = 0; l < n - k; l++) {
      if (casillero1[l] > casillero1[l + 1]) {
        aux = casillero1[l];
        casillero1[l] = casillero1[l + 1];
        casillero1[l + 1] = aux;
      }
    }
  }
  n = casillero2.length;
  //Ordenamiento del casillero 2
  for (k = 1; k < n; k++) {
    for (l = 0; l < n - k; l++) {
      if (casillero1[l] > casillero1[l + 1]) {
        aux = casillero1[l];
        casillero1[l] = casillero1[l + 1];
        casillero1[l + 1] = aux;
      }
    }
  }
  n = casillero3.length;
  //Ordenamiento del casillero 3
  for (k = 1; k < n; k++) {
    for (l = 0; l < n - k; l++) {
      if (casillero1[l] > casillero1[l + 1]) {
        aux = casillero1[l];
        casillero1[l] = casillero1[l + 1];
        casillero1[l + 1] = aux;
      }
    }
  }
  console.log('casillero 1:  ' + casillero1);
  console.log('casillero 2:  ' + casillero2);
  console.log('casillero 3:  ' + casillero3);
}

module.exports = Casilleros;
