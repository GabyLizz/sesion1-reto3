const random = require('./random');

const Insercion = (arr) => {
  for (let i = 0; i <= 15; i++) {
    let aleatorio = random(1, 5, 2);
    //console.log(aleatorio);
    numeros.push(aleatorio);
  }

  const l = numeros.length;
  let j, temp;
  //Mostramos los numeros desordenados
  //console.log(numeros);

  for (let i = 1; i < l; i++) {
    j = i;
    temp = arr[i];
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }

  // console.log(arr);
};

module.export = Insercion;
