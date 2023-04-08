let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayInvertido = [];

const inverterArray = (array) => {
  return array.reverse();
};

arrayInvertido = inverterArray(arrayNumeros);

console.log("Array original: ", arrayNumeros);
console.log("Array invertido: ", arrayInvertido);
