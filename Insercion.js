const random = require('./random');

const Insercion = (arr) => {
  var numeros = [];
  for (let i = 0; i <= 15; i++) {
    let aleatorio = random(1, 5, 2);
    //console.log(aleatorio);
    numeros.push(aleatorio);
  }
  console.log(numeros);
};

module.export = Insercion;
