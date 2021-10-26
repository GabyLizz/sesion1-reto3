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

  for (l = 1; i < n; l++) {
    if (numeros[i] <= 5) {
      casillero1.push(numeros[i]);
    } else {
      casillero2.push(numeros[i]);
    }
  }

  console.log('casillero 1:  ' + casillero1);
  console.log('casillero 2:  ' + casillero2);
}
module.exports = Casilleros;
