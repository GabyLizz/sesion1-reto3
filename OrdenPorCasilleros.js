const random = require('./random');

function Casilleros() {
  var numeros = [];
  var casillero1 = [];
  var casillero2 = [];

  for (let i = 0; i <= 15; i++) {
    let aleatorio = random(1, 10, 0);
    //console.log(aleatorio);
    numeros.push(aleatorio);
  }

  var n, c1, c2, l;

  n = numeros.length;

  for (l = 1; l < n; l++) {
    if (numeros[l] <= 5) {
      casillero1.push(numeros[l]);
    } else {
      casillero2.push(numeros[l]);
    }
  }

  console.log('casillero 1:  ' + casillero1);
  console.log('casillero 2:  ' + casillero2);
}
module.exports = Casilleros;
